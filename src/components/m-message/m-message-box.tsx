import { Component, Host, h } from '@stencil/core';
@Component({
  tag: 'm-message-box',
  shadow: true,
  styles: `
  #box{
    position: fixed;
    top: 0px;
    display: flex;
    flex-direction: column;
    left: 50%;
    transform: translateX(-50%);
  }
  #box ::slotted(m-message){
    margin-top: 10px;
  }
  `,
})
export class MMessageBox {
  render() {
    return (
      <Host id="m-message-box">
        <div id="box">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
