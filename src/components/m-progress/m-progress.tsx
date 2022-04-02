import { Component, Host, h, Prop } from '@stencil/core';

enum Color {
  Primary = 'primary',
  Warn = 'warn',
  Danger = 'danger',
  Success = 'success',
}

@Component({
  tag: 'm-progress',
  styleUrl: 'm-progress.scss',
  shadow: true,
})
export class MProgress {
  @Prop() color: Color;
  @Prop() progress: string = '0%';
  @Prop() showProgress: boolean = false;
  render() {
    const { color, progress, showProgress } = this;

    return (
      <Host>
        <div part="m-progress" class={'m-progress ' + `${color ? 'm-color-' + color : ''} `} style={{ '--progress': progress }}>
          {showProgress && <div class={'m-show-progress'}>{progress} </div>}
        </div>
      </Host>
    );
  }
}
