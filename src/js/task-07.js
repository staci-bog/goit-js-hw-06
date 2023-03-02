//Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text,
// оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const ref = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
  };
  
  ref.input.addEventListener('input', event => {
    ref.span.style.fontSize = event.currentTarget.value + 'px';
  });