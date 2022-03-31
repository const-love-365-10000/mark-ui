import { newSpecPage } from '@stencil/core/testing';
import { MAlert } from '../m-alert';

describe('m-alert', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MAlert],
      html: `<m-alert></m-alert>`,
    });
    expect(page.root).toEqualHtml(`
      <m-alert>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-alert>
    `);
  });
});
