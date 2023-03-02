const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

//Напиши скрипт, який для кожного елемента масиву ingredients:
//Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//Додасть назву інгредієнта як його текстовий вміст.
//Додасть елементу клас item.
//Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const createLI = ingredients.map(el => {
const itemEl = document.createElement('li');
  itemEl.textContent = el;
  itemEl.classList.add('item');
  return itemEl;
});

const getIngrELem = document.querySelector('#ingredients');

getIngrELem.append(...createLI);