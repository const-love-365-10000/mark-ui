import { createButton } from './Button';

const typeOptions = ['primary', 'flat', 'dashed', 'hollow', 'text'];

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: '通用组件/Button',
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    type: {
      control: { type: 'select' },
      description: '按钮风格',
      defaultValue: 'primary',
      options: typeOptions,
      table: {
        category: '属性',
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'warn', 'success', 'danger'],
      description: '按钮颜色',
      defaultValue: 'primary',
      table: {
        category: '属性',
      },
    },
    icon: {
      control: { type: 'text' },
      description: '图标按钮',
      table: {
        category: '属性',
      },
    },
    loading: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: '加载状态',
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
};

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton({ label, ...args });
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {};

export const Type = () => {
  const div = document.createElement('div');
  // 'primary 'flat', 'dashed', 'hollow', 'text'
  const TypeBtns = `
  <m-button type="primary">button</m-button>
  <m-button type="flat">button</m-button>
  <m-button type="dashed">button</m-button>
  <m-button type="hollow">button</m-button>
  <m-button type="text">button</m-button>
`;
  div.innerHTML = TypeBtns;
  return div;
};

export const Color = () => {
  const div = document.createElement('div');
  // 'primary' | 'warn' | 'success' | 'danger'
  const Colors = `
  <m-button color="primary">button</m-button>
  <m-button color="warn">button</m-button>
  <m-button color="success">button</m-button>
  <m-button color="danger">button</m-button>
`;
  div.innerHTML = Colors;
  return div;
};

export const Icon = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <m-button icon="loading">提交</m-button>
    <m-button icon="loading"></m-button>
  `;
  return div;
};

export const Loading = () => {
  const div = document.createElement('div');
  div.innerHTML = `
    <m-button icon="loading">提交</m-button>
    <m-button icon="loading"></m-button>
  `;
  return div;
};

export const Disabled = () => {
  const div = document.createElement('div');
  div.innerHTML = `
  <m-button type="primary" disabled>button</m-button>
  <m-button type="flat" disabled>button</m-button>
  <m-button type="dashed" disabled>button</m-button>
  <m-button type="hollow" disabled>button</m-button>
  <m-button type="text" disabled>button</m-button>
  `;
  return div;
};
