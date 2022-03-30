import { newSpecPage } from '@stencil/core/testing';
import { MButton } from '../m-button';

describe('m-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MButton],
      html: `<m-button></m-button>`,
    });
    expect(page.root).toEqualHtml(`
      <m-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </m-button>
    `);
  });
});
