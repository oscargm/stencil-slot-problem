import type { Components, JSX } from "../dist/types/components";

interface ScopedCssButton extends Components.ScopedCssButton, HTMLElement {}
export const ScopedCssButton: {
  prototype: ScopedCssButton;
  new (): ScopedCssButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
