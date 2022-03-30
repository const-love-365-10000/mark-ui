import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: true,
})
export class MButton {
  @Prop() color: string = '';
  @Prop() disabled: boolean;
  @Prop() icon: string;
  @Prop() type: string = '';
  render() {
    let { color, disabled, icon, type } = this;
    return (
      <Host>
        <button class={`${color} ${type}`} disabled={disabled}>
          {icon && (
            <div class="m-btn-before">
              <m-icon icon={icon}></m-icon>
            </div>
          )}
          <slot></slot>
        </button>
      </Host>
    );
  }
}
