export type OverlayComponentState = 'opening' | 'opened' | 'closing';

export type OverlayComponent<P = unknown> = {
  id: string;
  component: React.FunctionComponent<unknown>;
  state: OverlayComponentState;
  props: P & OverlayComponentProps;
}

export type OverlayComponentPromise = {
  componentId: string;
  resolve: (value: unknown) => void;
  reject: (value: unknown) => void;
}

export type OverlayComponentProps = {
  state: OverlayComponentState;
  onClose: (payload?: unknown) => void;
}
