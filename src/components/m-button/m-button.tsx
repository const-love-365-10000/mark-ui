import { Component, Host, h, Prop } from '@stencil/core';
import { Color, Type } from './Type';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: true,
})
export class MButton {
  @Prop() color: Color;
  @Prop() disabled: boolean;
  @Prop() loading: boolean;
  @Prop() icon: string;
  @Prop() type: Type = 'primary';

  render() {
    let { color, disabled, loading, icon, type } = this;
    if (loading) icon = 'loading';

    return (
      <Host>
        <button id="button" class={`${color ? 'm-color-' + color : ''} m-type-${type} }`} disabled={disabled}>
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
