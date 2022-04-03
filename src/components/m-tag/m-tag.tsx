import { Component, Host, h, Prop, Event, EventEmitter, Method } from '@stencil/core';
import { isColor } from '../../utils/common';

@Component({
  tag: 'm-tag',
  styleUrl: 'm-tag.scss',
  shadow: true,
})
export class MTag {
  @Prop() color: 'primary' | 'info' | 'warn' | 'success' | 'danger' | string = 'info';
  @Prop() outline: boolean = false;
  @Prop() close: boolean = false;
  @Event({ eventName: 'close' }) closeEmitter: EventEmitter<{ node: HTMLElement; destroy: () => void }>;
  node;
  handleClose() {
    this.closeEmitter.emit({ node: this.node, destroy: this.destroy });
  }
  @Method()
  async destroy() {
    this.node.parentElement.removeChild(this.node);
  }
  render() {
    const { color, outline, close, handleClose } = this;
    const isCustomColor = isColor(this.color);
    return (
      <Host ref={n => (this.node = n)}>
        <div
          part="m-tag"
          class={'m-tag ' + (!isCustomColor ? `m-color-${color}-light ` : '') + (outline ? 'm-tag-outline ' : '')}
          style={isCustomColor && { '--background-color': color }}
        >
          <slot></slot>
          {close && (
            <svg
              onClick={handleClose.bind(this)}
              style={{
                width: 'var(--text-size)',
                height: 'var(--text-size)',
                fill: outline ? 'var(--background-color)' : 'var(--text-color)',
                cursor: 'pointer',
                padding: '0 0px 0px 4px',
              }}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 20"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          )}
        </div>
      </Host>
    );
  }
}
