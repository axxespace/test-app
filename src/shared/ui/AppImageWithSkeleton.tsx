import { useRef, useEffect, useState } from "react";
import { Box, Skeleton } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";

type Props = Omit<BoxProps<"img">, "width" | "height"> & {
  src: string;
  alt: string;
  width: number;
  height: number;
  showOnError?: boolean;
  skeletonFadeMs?: number;
};

export function AppImageWithSkeleton({
  src,
  alt,
  width,
  height,
  sx,
  showOnError = false,
  skeletonFadeMs = 400,
  ...props
}: Props) {
  const imgRef = useRef<HTMLImageElement | null>(null);

  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const [skeletonMounted, setSkeletonMounted] = useState(true);

  useEffect(() => {
    setLoaded(false);
    setErrored(false);
    setSkeletonMounted(true);

    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth > 0) {
      setLoaded(true);
    }
  }, [src]);

  useEffect(() => {
    if (!loaded) return;

    const t = window.setTimeout(() => {
      setSkeletonMounted(false);
    }, skeletonFadeMs);

    return () => window.clearTimeout(t);
  }, [loaded, skeletonFadeMs]);

  const shouldShowSkeleton = !loaded && !(errored && showOnError);

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
      {skeletonMounted && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={(theme) => ({
            width: "100%",
            height: "100%",
            position: "absolute",
            inset: 0,
            borderRadius: 2,
            opacity: shouldShowSkeleton ? 1 : 0,
            transition: `opacity ${skeletonFadeMs}ms ease`,
            pointerEvents: "none",
            bgcolor: theme.custom.footer.borderSoft
          })}
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
          transition: `opacity ${skeletonFadeMs}ms ease`
        }}
        {...props}
      />
    </Box>
  );
}
