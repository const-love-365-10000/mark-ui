export default {
  title: '数据展示/Image',
  argTypes: {
    src: {
      description: '图片链接',
      type: {
        name: 'text',
        required: true,
      },
      table: {
        category: '属性',
      },
    },
    alt: {
      control: { type: 'text' },
      description: '图片原生alt属性',
      table: {
        category: '属性',
      },
    },
    fit: {
      control: {
        type: 'inline-radio',
      },
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
      description: 'Object-fit属性',
      table: {
        category: '属性',
      },
    },
    // '--image-radius': {
    //   control: {
    //     type: 'text',
    //   },
    //   table: {
    //     category: 'style',
    //   },
    // },
    // '--image-width': {
    //   control: {
    //     type: 'text',
    //   },
    //   table: {
    //     category: 'style',
    //   },
    // },
    // '--image-height': {
    //   control: {
    //     type: 'text',
    //   },
    //   table: {
    //     category: 'style',
    //   },
    // },
    style: {
      control: { type: 'object' },
      table: {
        category: 'style',
      },
    },
    error: {
      description: 'slot 图片加载失败时显示',
      table: {
        category: 'slot',
      },
    },
    placeholder: {
      description: 'slot 图片加载时占位显示',
      table: {
        category: 'slot',
      },
    },
    retry: {
      description: '图片加载失败时可以通过挂载在m-image组件上的retry方法重试,该方法可以传一个url，图片将加载此url，否则将通过时间缀的方式重新加载图片',
      table: {
        category: 'method',
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
  // if (args['--image-width']) img.style.setProperty('--image-width', args['--image-width']);
  // if (args['--image-height']) img.style.setProperty('--image-height', args['--image-height']);
  // if (args['--image-radius']) img.style.setProperty('--image-radius', args['--image-radius']);
  if (args.style) {
    console.log(args.style);
    for (let key of Object.keys(args.style)) {
      img.style.setProperty(key, args.style[key]);
    }
  }
  return img;
};

export const Primary = Template.bind({});
Primary.args = {};

export const Fit = () => `
<div class="box">
    <div>
      <m-image fit="contain" src="https://picsum.photos/100/100" style="width: 180px; height: 120px; background:#eee;"></m-image>
      <div> contain </div>
    </div>
    <div>
      <m-image fit="cover" src="https://picsum.photos/100/100" style="width: 180px; height: 120px; background:#eee;"></m-image>
      <div> cover </div>
    </div>
    <div>
      <m-image fit="fill" src="https://picsum.photos/100/100" style="width: 180px; height: 120px; background:#eee;"></m-image>
      <div> fill </div>
    </div>
    <div>
      <m-image fit="none" src="https://picsum.photos/100/100" style="width: 180px; height: 120px; background:#eee;"></m-image>
      <div> none </div>
    </div>
    <div>
      <m-image fit="scale-down" src="https://picsum.photos/100/100" style="width: 180px; height: 120px; background:#eee;"></m-image>
      <div> scale-down </div>
    </div>
</div>
`;

export const placeholder = () => `
<m-image src="https://picsum.photos/300/200">
   <p slot="placeholder">加载中....</p>
</m-image>
`;

export const error = () => `
<m-image src="xxx">
   <p slot="error">加载失败</p>
</m-image>`;

export const retry = () => {
  return `
<m-image class="img" src="xxx">
  <div slot="error">
     <p>加载失败</p>
    <m-button type="text" slot="error" onclick="document.querySelector('.img').retry('https://picsum.photos/300/200')">retry</m-button>
  </div>
</m-image>`;
};

console.log(document.querySelector('m-image'));
