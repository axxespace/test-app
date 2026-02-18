import * as React from "react";
import { Frame } from "@/features/game-modal/ui/GameModalStyles";

type Props = {
  src: string;
  title?: string;
  onLoad: () => void;
  retryKey?: number;
};

export function GameModalFrame({ src, title = "Game", onLoad, retryKey }: Props) {
  return <Frame key={retryKey} src={src} title={title} onLoad={onLoad} />;
}
