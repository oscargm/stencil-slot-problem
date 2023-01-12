import type { Components, JSX } from "../dist/types/components";

interface CustomElementButton extends Components.CustomElementButton, HTMLElement {}
export const CustomElementButton: {
  prototype: CustomElementButton;
  new (): CustomElementButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
