"use strict";
const editor = document.getElementById('editor');

if (localStorage.getItem('text')) {
  editor.value = localStorage.getItem('text');
}

editor.addEventListener('input', () => {
  const inputText = editor.value;
  localStorage.setItem('text', inputText);
});