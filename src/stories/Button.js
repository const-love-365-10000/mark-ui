export const createButton = ({ type = 'primary', size = 'medium', color = 'primary', label = 'button', icon, loading, onClick }) => {
  const btn = document.createElement('m-button');
  btn.type = 'flat';
  btn.innerText = label;

  if (onClick) btn.addEventListener('click', onClick);

  btn.setAttribute('type', type);
  btn.setAttribute('color', color);

  if (icon) btn.setAttribute('icon', icon);
  if (loading) btn.setAttribute('loading', 'true');
  else btn.removeAttribute('loading');

  return btn;
};
