import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-card',
  styleUrl: 'm-card.scss',
  shadow: true,
})
export class MCard {
  @Prop() inline: boolean = false;
  componentWillLoad() {
    console.log(123);

    console.log(document.querySelector('m-card div'));
  }
  render() {
    const { inline } = this;
    return (
      <Host>
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
