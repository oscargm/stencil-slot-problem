/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CustomElementButton {
    }
    interface ScopedCssButton {
    }
    interface ShadowDomButton {
    }
}
declare global {
    interface HTMLCustomElementButtonElement extends Components.CustomElementButton, HTMLStencilElement {
    }
    var HTMLCustomElementButtonElement: {
        prototype: HTMLCustomElementButtonElement;
        new (): HTMLCustomElementButtonElement;
    };
    interface HTMLScopedCssButtonElement extends Components.ScopedCssButton, HTMLStencilElement {
    }
    var HTMLScopedCssButtonElement: {
        prototype: HTMLScopedCssButtonElement;
        new (): HTMLScopedCssButtonElement;
    };
    interface HTMLShadowDomButtonElement extends Components.ShadowDomButton, HTMLStencilElement {
    }
    var HTMLShadowDomButtonElement: {
        prototype: HTMLShadowDomButtonElement;
        new (): HTMLShadowDomButtonElement;
    };
    interface HTMLElementTagNameMap {
        "custom-element-button": HTMLCustomElementButtonElement;
        "scoped-css-button": HTMLScopedCssButtonElement;
        "shadow-dom-button": HTMLShadowDomButtonElement;
    }
}
declare namespace LocalJSX {
    interface CustomElementButton {
    }
    interface ScopedCssButton {
    }
    interface ShadowDomButton {
    }
    interface IntrinsicElements {
        "custom-element-button": CustomElementButton;
        "scoped-css-button": ScopedCssButton;
        "shadow-dom-button": ShadowDomButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "custom-element-button": LocalJSX.CustomElementButton & JSXBase.HTMLAttributes<HTMLCustomElementButtonElement>;
            "scoped-css-button": LocalJSX.ScopedCssButton & JSXBase.HTMLAttributes<HTMLScopedCssButtonElement>;
            "shadow-dom-button": LocalJSX.ShadowDomButton & JSXBase.HTMLAttributes<HTMLShadowDomButtonElement>;
        }
    }
}
