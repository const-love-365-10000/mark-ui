import { newSpecPage } from '@stencil/core/testing';
import { MCard } from '../m-card';

describe('m-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MCard],
      html: `<m-card></m-card>`,
    });
    expect(page.root).toEqualHtml(`
      <m-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-card>
    `);
  });
});
