import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-icon',
  styleUrls: ['remixicon.scss', 'm-icon.scss'],
  shadow: true,
})
export class MIcon {
  @Prop() icon!: string;
  @Prop() size: number | string = 14;
  @Prop() color: string = '#FFF';
  @Prop() fill: string = 'none';
  @Prop() iconWidth: number = 1;
  componentWillLoad() {
    // document引入font-icon
    if (!document.querySelector('#m-icon-font')) {
      const fontDeclarationElement: HTMLStyleElement = document.createElement('style');
      fontDeclarationElement.setAttribute('id', 'm-icon-font');
      fontDeclarationElement.textContent +=
        '@font-face{font-family: "remixicon";src: url("/assets/icons/remixicon.woff?t=1590207869815") format("woff"), url("/assets/icons/remixicon.woff2?t=1590207869815") format("woff2")}';
      +'@font-face{font-family:MontserratTest;src:url("/assets/icons/remixicon.ttf?t=1590207869815")  format("truetype");}';
      document.head.append(fontDeclarationElement);
    }
  }
  render() {
    const { icon, size, iconWidth, color, fill } = this;
    return (
      <Host icon-name={icon} style={{ '--icon-size': size + 'px', '--icon-width': iconWidth + 'px', '--icon-color': color, '--icon-fill': fill }}>
        <i class={'m-icon ri-' + icon}></i>
      </Host>
    );
  }
}
