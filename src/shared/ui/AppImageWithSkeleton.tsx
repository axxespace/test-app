import { useState } from "react";
import { Box, Skeleton } from "@mui/material";
import type { BoxProps } from "@mui/material/Box";

interface AppImageWithSkeletonProps extends BoxProps<"img"> {
  src: string;
  alt: string;
}

export function AppImageWithSkeleton({ src, alt, sx, ...props }: AppImageWithSkeletonProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Box sx={{ position: "relative", ...sx }}>
      {!loaded && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: 10,
            height: "100%",
            background: "rgba(0, 0, 0, 0.1)"
          }}
        />
      )}

      <Box
        component="img"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        sx={{
          width: "100%",
          height: "auto",
          display: "block",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease"
        }}
        {...props}
      />
    </Box>
  );
}
