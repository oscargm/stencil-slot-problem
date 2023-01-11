import { h, Component, ComponentInterface, Element, Host } from '@stencil/core';

@Component({
  tag: 'test-button',
  styleUrl: 'button.scss',
  shadow: false,
  scoped: false,
})
export class Button implements ComponentInterface {
  @Element() host;

  render(): HTMLElement {
    return (
      <Host class="test-button">
        <button>
          <div class="content-wrapper">
            <slot name="prefix" />
            <slot />
            <slot name="suffix" />
          </div>
        </button>
      </Host>
    );
  }
}
