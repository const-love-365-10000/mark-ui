import { Component, Host, h, Prop } from '@stencil/core';

// type Type = 'primary' | 'dashed' | 'hollow' | 'text' | 'flat';
// type Color = 'primary' | 'warn' | 'success' | 'danger';

@Component({
  tag: 'm-button',
  styleUrl: 'm-button.scss',
  shadow: true,
})
export class MButton {
  @Prop() color: 'primary' | 'warn' | 'success' | 'danger';
  @Prop() disabled: boolean;
  @Prop() loading: boolean;
  @Prop() icon: string;
  @Prop() type: 'primary' | 'dashed' | 'hollow' | 'text' | 'flat' = 'primary';

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
