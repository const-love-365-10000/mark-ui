import { Component, Host, h, Prop } from '@stencil/core';

let id:number = 0;
@Component({
  tag: 'm-card',
  styleUrl: 'm-card.scss',
  shadow: true,
})
export class MCard {
  @Prop() inline: boolean = false;
  id:number;
  componentWillLoad() {
    this.id = id;
    id++;
  }
  render() {
    const { id,inline } = this;
    return (
      <Host id={`${id&&'m-card-'+id}`}>
        <div class={`m-card ${inline && 'flex-row'}`}>
          <div class={`m-card-header ${inline && 'flex-column'}`}>
            <slot name="title"></slot>
            <slot name="action"></slot>
          </div>
          <div class="m-card-content">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
