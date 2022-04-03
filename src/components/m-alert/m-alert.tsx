import { Component, Host, h, Prop } from '@stencil/core';

// type Type = 'default' | 'primary' | 'info' | 'warn' | 'danger' | 'success';

let id = 0;
@Component({
  tag: 'm-alert',
  shadow: true,
  styleUrl: 'm-alert.scss',
})
export class MAlert {
  @Prop() type: 'default' | 'primary' | 'info' | 'warn' | 'danger' | 'success' = 'default';
  @Prop() icon: string;
  @Prop() light: boolean = false;
  @Prop() close: boolean = false;
  id: number;
  componentWillLoad() {
    this.id = id;
    id++;
  }
  destroy() {
    const node = document.querySelector('#m-alert-' + this.id);
    if (node?.parentElement) node.parentElement.removeChild(node);
    console.log(node, this);
  }
  render() {
    const { id, icon, light, close, type, destroy } = this;

    return (
      <Host id={'m-alert-' + id}>
        <div class={`m-card m-color-${type}${light ? '-light' : ''}`}>
          {icon && (
            <div class="m-message-before">
              <m-icon icon={icon} size={16} icon-width={4} class={`m-color-${type}`}></m-icon>
            </div>
          )}
          <div class="m-content">
            <slot></slot>
          </div>
          {close && (
            <div class="m-message-after">
              <m-icon onClick={destroy.bind(this)} icon="close-m" size={18} iconWidth={2} color={type === 'default' ? '#333' : null}></m-icon>
            </div>
          )}
        </div>
      </Host>
    );
  }
}
