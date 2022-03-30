import { Component, Host, h, Prop,Method } from '@stencil/core';

let messageId: number = 0;
const curMsgs: number[] = [];

@Component({
  tag: 'm-message',
  styleUrl: 'm-message.scss',
  shadow: true,
})
export class MMessage {
  @Prop() icon: string;
  @Prop() type: string = 'primary';
  @Prop() canDelete: boolean = false;

  messageId: number;
  componentWillRender() {
    this.messageId = messageId;
    curMsgs.push(this.messageId);
    // console.log(curMsgs, curMsgs.indexOf(messageId));
    messageId++;
  }
  componentDidRender() {
    if (curMsgs.length > 3) {
      const node:any = document.querySelector('#m-message-'+curMsgs[0]);
      node.destroy(node)
      curMsgs.shift()
      console.log(curMsgs);
      
    }
  }

  private handleTop(messageId) {
    return (curMsgs.indexOf(messageId) + 1) * 50 + 'px';
  }
  @Method()
  destroy(node:HTMLElement) {
    node.parentElement.removeChild(node)
  }
  render() {
    const { icon, type, canDelete, messageId, handleTop } = this;
    return (
      <Host id={`m-message-${messageId}`} messageId={messageId}>
        <div class="m-card">
          {icon && (
            <div class="m-message-before">
              <m-icon icon={icon} size={16} icon-width={2} class={`m-color-${type}`}></m-icon>
            </div>
          )}
          <div class="m-content">
            <slot></slot>
          </div>
          {canDelete && <div class="m-message-after"></div>}
        </div>
      </Host>
    );
  }
}
