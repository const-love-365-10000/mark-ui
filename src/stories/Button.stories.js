import { createButton, createButtonBox } from './Button';

const typeOptions = ['primary', 'flat', 'dashed', 'hollow', 'text'];

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: '通用组件/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      description: '按钮风格',
      defaultValue: { summary: 'primary' },
      options: typeOptions,
      table: {
        category: '属性',
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'warn', 'success', 'danger'],
      description: '按钮颜色',
      defaultValue: { summary: 'primary' },
      table: {
        category: '属性',
      },
    },
    onClick: {
      action: 'onClick',
      table: {
        category: '事件',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: '按钮',
      },
    },
  },
  args: {
    label: 'Button',
  },
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};
const TemplateBox = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButtonBox({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  type: 'primary',
  color: 'primary',
};

export const Type = Template.bind({});
Type.args = {
  type: 'primary',
  color: 'primary',
};

const typeOp = [];
for (let item of typeOptions) {
  typeOp.push({ type: item });
}
export const test = TemplateBox.bind({}, typeOp);
test.description = '123';
console.log(test);
