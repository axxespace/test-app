import * as React from "react";
import { Box, Skeleton } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";

type Props = Omit<BoxProps<"img">, "width" | "height"> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  showOnError?: boolean;
};

export function AppImageWithSkeleton({
  src,
  alt,
  width,
  height,
  sx,
  showOnError = false,
  ...props
}: Props) {
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = React.useState(false);
  const [errored, setErrored] = React.useState(false);

  React.useEffect(() => {
    setLoaded(false);
    setErrored(false);

    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  const showSkeleton = !loaded && !(errored && showOnError);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: width,
        aspectRatio: `${width} / ${height}`,
        overflow: "hidden",
        ...sx
      }}
    >
      {showSkeleton && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{ width: "100%", height: "100%", position: "absolute", inset: 0, borderRadius: 2 }}
        />
      )}

      <Box
        ref={imgRef}
        component="img"
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoad={() => setLoaded(true)}
        onError={() => {
          setErrored(true);
          setLoaded(false);
        }}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 200ms ease"
        }}
        {...props}
      />
    </Box>
  );
}
