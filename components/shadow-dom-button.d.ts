import type { Components, JSX } from "../dist/types/components";

interface ShadowDomButton extends Components.ShadowDomButton, HTMLElement {}
export const ShadowDomButton: {
  prototype: ShadowDomButton;
  new (): ShadowDomButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
