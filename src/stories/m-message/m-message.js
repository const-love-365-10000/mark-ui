import { m_message } from '../../../dist/esm/m-message.entry';

export const addMessage = m_message.addMessage;

export const Message = text => {
  addMessage(text);
};

export const btn = (label, text) => {
  const btn = document.createElement('m-button');
  btn.innerText = label;
  btn.addEventListener('click', Message(text));
  return btn;
};
