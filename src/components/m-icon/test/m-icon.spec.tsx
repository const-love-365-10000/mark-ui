import { newSpecPage } from '@stencil/core/testing';
import { MIcon } from '../m-icon';

describe('m-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MIcon],
      html: `<m-icon></m-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <m-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-icon>
    `);
  });
});
