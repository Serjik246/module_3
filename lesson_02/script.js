'use strict';

const app = document.querySelector('#app');

const createPage = () => {
  const input = document.createElement('input');
  const paragraph = document.createElement('p');

  app.append(input, paragraph);

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
  let timeout;
  input.addEventListener('keyup', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      paragraph.textContent = input.value;
    }, 300);
  });  
};

pControl()


