import { h, Component, ComponentInterface, Element, Host } from '@stencil/core';

@Component({
  tag: 'scoped-css-button',
  styleUrl: 'button.scss',
  shadow: false,
  scoped: true,
})
export class Button implements ComponentInterface {
  @Element() host;

  render(): HTMLElement {
    return (
      <Host>
        <button>
          <div class="content-wrapper">
            <span class="prefix">
              <slot name="prefix" />
            </span>
            <slot />
            <slot name="suffix" />
          </div>
        </button>
      </Host>
    );
  }
}
