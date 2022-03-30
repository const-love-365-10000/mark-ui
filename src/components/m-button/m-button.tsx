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
  @Prop() href: string;

  private handleSlot(config) {
    const { href } = config;
    if (typeof href === 'string') {
      return (
        <a href={href} target="_blank">
          <slot></slot>
        </a>
      );
    } else {
      return <slot></slot>;
    }
  }

  render() {
    let { color, disabled, loading, icon, type, href, handleSlot } = this;
    if (loading) icon = 'loading';

    return (
      <Host>
        <button id="button" class={`${color ? 'm-color-' + color : ''} m-type-${type} }`} disabled={disabled}>
          {icon && (
            <div class="m-btn-before">
              <m-icon icon={icon}></m-icon>
            </div>
          )}
          {handleSlot({ href })}
        </button>
      </Host>
    );
  }
}
