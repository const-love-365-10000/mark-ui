export default {
  title: '表单组件/dialog',
};

let id = 0;
const Template = args => {
  const _id = id;
  const dialog = document.createElement('m-dialog');
  dialog.id = `m-dialog-${_id}`;
  id++;
  dialog.setAttribute('content', '是否删除该项目？');
  if (args.actions) {
    let node = '';
    // destroy
    function destroy() {
      document.querySelector('#' + _id).destroy();
    }
    // if (args.actions?.confirm) {
    //   node += `<m-button>${args.actions.confirm}</m-button>`;
    // }
    // if (args.actions?.cancel) {
    //   node += `<m-button>${args.actions.cancel}</m-button>`;
    // }
    dialog.setAttribute('actions', { cancel: '123' });
    // dialog.innerHTML = `<div slot="actions">${node}</div>`;
  }
  const btn = document.createElement('m-button');
  btn.innerText = 'click me';
  btn.addEventListener('click', function () {
    document.body.appendChild(dialog);
  });
  return btn;
};

export const Primary = Template.bind({});
Primary.args = {
  actions: {
    confirm: '确定',
  },
};

export const Actions = Template.bind({});
Primary.args = {
  actions: {
    confirm: '确定',
    cancel: '关闭',
  },
};
