import { newSpecPage } from '@stencil/core/testing';
import { MDialog } from '../m-dialog';

describe('m-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MDialog],
      html: `<m-dialog></m-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <m-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-dialog>
    `);
  });
});
