export type GameModalSize =
  | { mode: "fullscreen" }
  | { mode: "boxed"; width?: number | string; height?: number | string };

export type GameModalProps = {
  open: boolean;
  onClose: () => void;
  url: string;
  size?: GameModalSize;
  loadTimeoutMs?: number;
  disableBackdropClose?: boolean;
};
