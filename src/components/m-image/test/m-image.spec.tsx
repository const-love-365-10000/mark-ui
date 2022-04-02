import { newSpecPage } from '@stencil/core/testing';
import { MImage } from '../m-image';

describe('m-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MImage],
      html: `<m-image></m-image>`,
    });
    expect(page.root).toEqualHtml(`
      <m-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-image>
    `);
  });
});
