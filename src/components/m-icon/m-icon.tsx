import { Component, Host, h, Prop } from '@stencil/core';
import { getIcon } from './icons';
@Component({
  tag: 'm-icon',
  styleUrl: 'm-icon.scss',
  shadow: true,
})
export class MIcon {
  @Prop() icon: string;
  render() {
    const { icon } = this;
    return <Host icon-name={icon}>{getIcon(icon)}</Host>;
  }
}
