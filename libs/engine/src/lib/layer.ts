export interface Layer {
  onAttach(): void;
  onDetach(): void;
  onUpdate(): void;
  onEvent(): void;
}
