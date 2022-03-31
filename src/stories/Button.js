export const createButton = ({ type = 'primary', size = 'medium', color = 'primary', label = 'button', onClick }) => {
  const btn = document.createElement('m-button');
  btn.type = 'flat';
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  btn.setAttribute('type', type);
  btn.setAttribute('color', color);

  return btn;
};

export function createButtonBox(args) {
  console.log(123, args);
  const btns = document.createElement('div');
  for (let i in args) {
    if (args[i]?.type) {
      const btn = createButton(args[i]);
      btn.style.margin = '0 8px';
      btns.appendChild(btn);
    }
  }
  return btns;
}
