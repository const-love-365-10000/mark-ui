import { newSpecPage } from '@stencil/core/testing';
import { MBreadcrumb } from '../m-breadcrumb';

describe('m-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MBreadcrumb],
      html: `<m-breadcrumb></m-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <m-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-breadcrumb>
    `);
  });
});
