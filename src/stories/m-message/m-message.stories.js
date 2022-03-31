import { m_message } from '../../../dist/esm/m-message.entry';

export default {
  title: '反馈/Message',
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
  },
};

const createMessage = ({ label }) => {
  m_message.addMessage(label);
};
const Template = ({ label, ...args }) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createMessage({ label, ...args });
};

export const Primary = () => {
  const btn = document.createElement('m-button');
  btn.innerText = 'click me';
  btn.addEventListener(
    'click',
    Template.bind(
      {},
      {
        label: 'click me',
      },
    ),
  );
  return btn;
};
