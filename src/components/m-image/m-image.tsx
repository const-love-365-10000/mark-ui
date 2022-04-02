import { Component, Host, h, Prop, State } from '@stencil/core';

type ImgLoadStatus = 'loading' | 'success' | 'error';
let id:number= 0

@Component({
  tag: 'm-image',
  styleUrl: 'm-image.scss',
  shadow: true,
})
export class MImage {
  @Prop() src!: string;
  @Prop() alt: string;
  @Prop() fit: string;
  @State() imgLoadStatus: ImgLoadStatus;
  id: number;
  componentWillLoad(){
    this.id = id;
    id++
  }
  onLoadSuccess() {
   this.imgLoadStatus = 'success';
  }
  onLoadError() {
    this.imgLoadStatus = 'error';
  }
  render() {
    const {id, src, fit, alt, onLoadSuccess, onLoadError } = this;
    const that = this;

    return (
      <Host id={`m-image-${id}`}>
        <div class="m-image" part="m-image-box">
          {this.imgLoadStatus !==('error'&&'success') && <slot name='placeholder'></slot>}
          {this.imgLoadStatus === 'error' && <slot name="error"></slot>}
          {this.imgLoadStatus !== 'error' && <img part='m-image' src={src} style={{ 'Object-fit': fit && fit }} alt={alt && alt} onLoad={onLoadSuccess.bind(that)} onError={onLoadError.bind(that)} />}
        </div>
      </Host>
    );
  }
}
