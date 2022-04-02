import { newSpecPage } from '@stencil/core/testing';
import { MProgress } from '../m-progress';

describe('m-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MProgress],
      html: `<m-progress></m-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <m-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-progress>
    `);
  });
});
