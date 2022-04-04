export function MAlert({ text, type = 'default', light, close }) {
  const MAlert = document.createElement('m-alert');
  MAlert.innerText = text;
  MAlert.setAttribute('type', type);
  if (light) {
    MAlert.setAttribute('light', 'light');
  }
  if (close) {
    MAlert.setAttribute('close', 'close');
  }
  return MAlert;
}
