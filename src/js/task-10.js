function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input 
//і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція 
//елементів очищається.
//Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>,
//скільки вказано в amount і додає їх у div#boxes.
//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor
//для отримання кольору.

const ref = {
  boxes: document.querySelector('#boxes'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  input: document.querySelector('input'),
};

ref.createBtn.addEventListener('click', () => {
  let boxesAdd = createBoxes(ref.input.value);
  ref.boxes.append(...boxesAdd);
});

ref.destroyBtn.addEventListener('click', deleteBoxes);

function createBoxes(amount) {
  const newArray = [];

  for (let i = 0; i < amount; i++) {
    const newDivElem = document.createElement('div');
    newDivElem.style.height = `${30 + 10 * i}px`;
    newDivElem.style.weight = `${30 + 10 * i}px`;
    newDivElem.style.background = getRandomHexColor();
    newArray.push(newDivElem);
  }
  return newArray;
}

function deleteBoxes() {
  ref.boxes.innerHTML = '';
}

console.log(ref.boxes);
