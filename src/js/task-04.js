//Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//Оновлюй інтерфейс новим значенням змінної counterValue.

const ref = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value'),
  };
  
  ref.decrement.addEventListener('click', () => {
    ref.span.textContent -= 1;
  });
  
  ref.increment.addEventListener('click', () => {
    let counterValue = parseInt(ref.span.textContent);
    ref.span.textContent = counterValue + 1;
  });
  