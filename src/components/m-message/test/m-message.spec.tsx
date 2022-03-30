import { newSpecPage } from '@stencil/core/testing';
import { MMessage } from '../m-message';

describe('m-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MMessage],
      html: `<m-message></m-message>`,
    });
    expect(page.root).toEqualHtml(`
      <m-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-message>
    `);
  });
});
