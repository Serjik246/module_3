'use strict';

const app = document.querySelector('#app');

const createPage = () => {
  const input = document.createElement('input');
  const paragraf = document.createElement('p');

  app.append(input, paragraf);

  return {
    input,
    paragraph,
  };
};

const {
  input,
  paragraph,
} = createPage();

const pControl = () => {
  input.addEventListener('change', () => {
    setTimeout(() => {
      paragraph.textContent = `${input.value}`
    }, 300);
  });
};

pControl();


