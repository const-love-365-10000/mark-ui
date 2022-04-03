import { Component, Host, h, Prop } from '@stencil/core';
import { getIcon } from './icons';

@Component({
  tag: 'm-icon',
  styleUrl: 'm-icon.scss',
  shadow: true,
})
export class MIcon {
  @Prop() icon: string;
  @Prop() size: number | string = 14;
  @Prop() color: string = '#FFF';
  @Prop() fill: string = 'none';
  @Prop() iconWidth: number = 1;
  render() {
    const { icon, size, iconWidth, color, fill } = this;
    return (
      <Host icon-name={icon} style={{ '--icon-size': size + 'px', '--icon-width': iconWidth + 'px', '--icon-color': color, '--icon-fill': fill }}>
        {getIcon(icon)}
      </Host>
    );
  }
}
