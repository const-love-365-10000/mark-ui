import { h } from '@stencil/core';

export function loading() {
  return (
    <svg name="loading" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4" />
    </svg>
  );
}
export function closeM() {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 14L34 34" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14 34L34 14" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}
export function info() {
  return (
    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 44C29.5228 44 34.5228 41.7614 38.1421 38.1421C41.7614 34.5228 44 29.5228 44 24C44 18.4772 41.7614 13.4772 38.1421 9.85786C34.5228 6.23858 29.5228 4 24 4C18.4772 4 13.4772 6.23858 9.85786 9.85786C6.23858 13.4772 4 18.4772 4 24C4 29.5228 6.23858 34.5228 9.85786 38.1421C13.4772 41.7614 18.4772 44 24 44Z"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 11C25.3807 11 26.5 12.1193 26.5 13.5C26.5 14.8807 25.3807 16 24 16C22.6193 16 21.5 14.8807 21.5 13.5C21.5 12.1193 22.6193 11 24 11Z"
      />
      <path d="M24.5 34V20H23.5H22.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 34H28" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
}

export const icons = {
  loading,
  'close-m': closeM,
  info,
};

export function getIcon(name) {
  if (typeof icons[name] !== 'function') throw new Error('该icon不存在');
  return icons[name](name);
}
