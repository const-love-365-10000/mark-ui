import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-message',
  styleUrl: 'm-message.scss',
  shadow: true,
})
export class MMessage {
  @Prop() icon: string;
  @Prop() type: string = 'primary';
  @Prop() canDelete: boolean = false;
  render() {
    const { icon, type,canDelete } = this;
    return (
      <Host>
        <div class="m-card">
          {icon && <div class="m-message-before"><m-icon icon={icon} size={16} icon-width={2} class={`m-color-${type}`}></m-icon></div>}
          <div class="m-content">
            <slot></slot>
          </div>
         {canDelete &&  <div class="m-message-after"></div>}
        </div>
      </Host>
    );
  }
}
