import { Component, Host, h, Prop, Method } from '@stencil/core';

@Component({
  tag: 'm-dialog',
  styleUrl: 'm-dialog.scss',
  shadow: true,
})
export class MDialog {
  @Prop() type;
  @Prop() name: string = '标题';
  @Prop() content: string;
  @Prop() icon: string;
  @Prop() actions: { cancel?: string; confirm?: string } = { cancel: '关闭', confirm: '提交' };

  _dialog: HTMLElement;
  _hasActions: boolean = false;
  _hasHeader: boolean = false;
  _hasContent: boolean = false;
  componentWillLoad() {
    if (document.querySelector('m-dialog *[slot="actions"]')) {
      this._hasActions = true;
    }
    if (document.querySelector('m-dialog *[slot="header"]')) {
      this._hasHeader = true;
    }
    if (document.querySelector('m-dialog *[slot="content"]')) {
      this._hasContent = true;
    }
  }

  @Method()
  async destroy() {
    console.log(this._dialog);
  }
  render() {
    const { name, icon, content, actions, _hasActions, _hasContent, _hasHeader } = this;
    const { cancel, confirm } = actions;

    console.log(actions, typeof actions);

    return (
      <Host ref={n => (this._dialog = n)}>
        <div class="m-dialog">
          <header class="m-dialog-header">
            {_hasHeader ? (
              <slot name="header"></slot>
            ) : (
              <div>
                <m-icon icon={icon}></m-icon>
                <h4 class="title">{name}</h4>
              </div>
            )}
            <m-icon class="close" icon="close-line" style={{ cursor: 'pointer' }} onClick={this.destroy.bind(this)}></m-icon>
          </header>
          <div class="m-dialog-content">{_hasContent ? <slot name="content"></slot> : <div>{content}</div>}</div>
          <div class="m-dialog-actions">
            {_hasActions ? (
              <slot name="actions"></slot>
            ) : (
              <div class="buttons">
                {confirm && <m-button>{confirm}</m-button>}
                {cancel && <m-button>{cancel}</m-button>}
              </div>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
