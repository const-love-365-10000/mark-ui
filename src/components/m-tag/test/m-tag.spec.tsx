import { newSpecPage } from '@stencil/core/testing';
import { MTag } from '../m-tag';

describe('m-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MTag],
      html: `<m-tag></m-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <m-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-tag>
    `);
  });
});
