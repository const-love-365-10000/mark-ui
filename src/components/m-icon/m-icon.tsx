import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'm-icon',
  styleUrls: ['remixicon.scss', 'm-icon.scss'],
  shadow: true,
})
export class MIcon {
  @Prop() icon!: string;
  @Prop() size: string | number = '14px';
  @Prop() color: string = '#333';
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
    let { icon, size, color } = this;

    if (typeof size === 'number') {
      size = size + 'px';
    }
    console.log('size', size);
    return (
      <Host icon-name={icon} style={{ 'font-size': size, 'color': color }}>
        <i class={'m-icon ri-' + icon}></i>
      </Host>
    );
  }
}
