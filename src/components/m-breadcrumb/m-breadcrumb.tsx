import { Component, Host, h, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'm-breadcrumb',
  styleUrl: 'm-breadcrumb.scss',
  shadow: true,
})
export class MBreadcrumb {
  @Prop() list: string[] | string;
  @Prop() current: number | string;
  @Prop() separator: string = '/';
  _list: string[];
  private handleList(list) {
    let res;
    if (typeof list === 'string') {
      try {
        res = JSON.parse(list);
      } catch (err) {
        res = list.split(',');
      }
    }
    if (Array.isArray(res) === true) {
      return res;
    } else {
      throw new Error('list属性只支持数组、JSON数组或用逗号分隔的字符串');
    }
  }
  @Event({
    eventName: 'link',
  })
  linkEmit: EventEmitter<{ index: number }>;
  handleLink(event) {
    const index = event.currentTarget.dataset.index;
    this.linkEmit.emit({ index });
  }
  render() {
    const { current, separator, handleList, handleLink } = this;
    let list;
    if (this.list) {
      list = handleList(this.list);
      this._list = list;
    }

    let curIndex;
    if (current) curIndex = typeof current === 'number' ? current : list.findIndex(item => item === current);

    return (
      <Host>
        <div class="m-breadcrumb">
          {list ? (
            list.map((item, index) => (
              <span class={'m-breadcrumb-text ' + (index <= curIndex && 'm-text-bold')} onClick={handleLink.bind(this)} data-index={index}>
                {item}
              </span>
            ))
          ) : (
            <span>
              <slot></slot>
              <span class="m-breadcrumb-separator">{separator}</span>
            </span>
          )}
        </div>
      </Host>
    );
  }
}
