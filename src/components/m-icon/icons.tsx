import { h } from '@stencil/core';

export function loading(name) {
  return (
    <svg name={name} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" />
    </svg>
  );
}

export const icons = {
  loading,
};

export function getIcon(name) {
  if (typeof icons[name] !== 'function') throw new Error('该icon不存在');
  return icons[name](name);
}
