export default {
  title: '数据展示/Image',
  argTypes: {
    'src': {
      description: '图片链接',
      type: {
        name: 'text',
        required: true,
      },
      table: {
        category: '属性',
      },
    },
    'alt': {
      control: { type: 'text' },
      description: '图片原生alt属性',
      table: {
        category: '属性',
      },
    },
    'fit': {
      control: {
        type: 'inline-radio',
      },
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description: 'Object-fit属性',
      table: {
        category: '属性',
      },
    },
    '--image-radius': {
      control: {
        type: 'text',
      },
      table: {
        category: 'style',
      },
    },
    '--image-width': {
      control: {
        type: 'text',
      },
      table: {
        category: 'style',
      },
    },
    'error': {
      description: 'slot 图片加载失败时显示',
      table: {
        category: 'slot',
      },
    },
    'placeholder': {
      description: 'slot 图片加载时占位显示',
      table: {
        category: 'slot',
      },
    },
  },
  args: {
    src: 'https://picsum.photos/300/200',
  },
};

const Template = args => {
  const img = document.createElement('m-image');
  img.setAttribute('src', args.src);
  if (args.fit) img.setAttribute('fit', args.fit);
  if (args.alt) img.setAttribute('alt', args.alt);
  if (args['--image-width']) img.style.setProperty('--image-width', args['--image-width']);
  if (args['--image-height']) img.style.setProperty('--image-height', args['--image-height']);
  return img;
};

export const Primary = Template.bind({});
Primary.args = {};
