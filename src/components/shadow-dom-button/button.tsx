import { h, Component, ComponentInterface, Element, Host } from '@stencil/core';

@Component({
  tag: 'shadow-dom-button',
  styleUrl: 'button.scss',
  shadow: true,
  scoped: false,
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
