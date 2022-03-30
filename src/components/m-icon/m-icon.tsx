import { Component, Host, h, Prop } from '@stencil/core';
import { getIcon } from './icons';
@Component({
  tag: 'm-icon',
  styleUrl: 'm-icon.scss',
  shadow: true,
})
export class MIcon {
  @Prop() icon: string;   
  @Prop() size: number = 14;
  @Prop() iconWidth: number = 1;
  render() {
    const { icon,size,iconWidth } = this;
    return <Host icon-name={icon}  style={{'--icon-size':size+'px','--icon-width': iconWidth+'px'}}>{getIcon(icon)}</Host>;
  }
}
