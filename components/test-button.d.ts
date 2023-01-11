import type { Components, JSX } from "../dist/types/components";

interface TestButton extends Components.TestButton, HTMLElement {}
export const TestButton: {
  prototype: TestButton;
  new (): TestButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
