export function getType(target) {
  return Object.prototype.toString.call(target).slice(8);
}

export function isObject(obj) {
  return getType(obj) === 'Object';
}

// 是否是十六进制颜色值
export function isColor(color: string) {
  const includeColors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
  if (color.length === 7 && color[0] === '#') {
    const c = color.slice(1);
    for (let i = 0; i < c.length; i++) {
      if (includeColors.includes(c[i]) === false) {
        return false;
      }
    }
    return true;
  }
  return false;
}
