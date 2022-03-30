import { Component, Host, h, Prop, Method } from '@stencil/core';

let messageId: number = 1;
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
    messageId++;
  }
  componentDidRender() {
    if (curMsgs.length > 3) {
      const node: any = document.querySelector('#m-message-' + curMsgs[0]);
      node?.destroy(node);
      curMsgs.shift();
      console.log(curMsgs);
    }

    setTimeout(() => {
      this?.destroy(document.querySelector('#m-message-' + this.messageId));
    }, 1500);
  }

  @Method()
  destroy(node: HTMLElement) {
    if (!node) return;
    node.classList.add('destroy');
    setTimeout(() => {
      try {
        node.parentElement.removeChild(node);
      } catch (err) {}
    }, 1500);
  }

  @Method()
  static addMessage(text, icon, actions) {
    let M_Message_Box = document.querySelector('#m-message-box');
    console.log(M_Message_Box);
    if (!M_Message_Box) {
      M_Message_Box = document.createElement('m-message-box');
      document.body.appendChild(M_Message_Box);
    }
    const M_Message = document.createElement('m-message');
    M_Message.appendChild(document.createTextNode(text));
    if (icon) M_Message.setAttribute('icon', icon);
    if (actions) {
    }
    const firstMessage = document.querySelector('m-message');
    if (firstMessage) {
      firstMessage.parentElement.insertBefore(M_Message, firstMessage);
    } else {
      M_Message_Box.appendChild(M_Message);
    }
  }
  render() {
    const { icon, type, canDelete, messageId } = this;
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
