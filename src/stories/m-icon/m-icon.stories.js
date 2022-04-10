export default {
  title: '通用组件/Icon',
  argTypes: {
    icon: {
      type: { name: 'text',required: true, },
      table: {
        category: '属性',
      },
    },
    size: {
      control: { type: 'number' },
      table: {
        category: '属性',
        defaultValue: { summary: '14px' },
        description: { summary: '图片大小' },
      },
    },
    color: {
      control: { type: 'color' },
      table: {
        category: '属性',
      },
    },
  },
  args: {
    icon: 'riding-fill',
  },
  parameters: {
    docs: {
      description: {
        component: `  m-icon使用了remix图标库，组件通过icon属性来确定使用的图标
        <a href="http://www.remixicon.cn/" target="_blank" >查看所有图标</a>   `,
      },
    },
  },
};

const Template = args => {
  const div = document.createElement('div');
  let size = args.size || '14px';
  if (typeof size === 'number') size = size + 'px';
  console.log('size2', size);
  div.innerHTML = `
  <m-icon icon="${args.icon}"
    size="${size}"
    color="${args.color || ''}" >
  </m-icon>
`;
  return div;
};

export const Primary = Template.bind({});
Primary.args = {};
