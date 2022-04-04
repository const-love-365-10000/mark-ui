import { MAlert } from './m-alert';

export default {
  title: '反馈组件/Alert',
  parameters: { docs: { description: { component: 'some component **markdown**', story: 'story' } } },
  argTypes: {
    text: {
      control: { type: 'text' },
      table: {
        category: '属性',
        defaultValue: { summary: '' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['default', 'primary', 'info', 'warn', 'danger', 'success'],
      table: {
        category: '属性',
        defaultValue: { summary: 'default' },
      },
    },
    light: {
      control: { type: 'boolean' },
      table: {
        category: '属性',
        defaultValue: { summary: false },
        description: { summary: '明亮模式' },
      },
    },
    close: {
      control: { type: 'boolean' },
      table: {
        category: '属性',
        defaultValue: { summary: false, detail: '这是一个HTML属性，如果不设置则认为是false' },
      },
    },
    icon: {
      control: { type: 'boolean' },
      table: {
        category: 'Slot',
        defaultValue: { summary: false },
      },
    },
  },
  args: {
    text: '这是一条警告',
    type: 'default',
    close: false,
    light: false,
  },
};

const Template = args => {
  return MAlert(args);
};

export const Primary = Template.bind({});
