//Напиши скрипт, який:
//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

const ulList = document.querySelectorAll('.item');
console.log(`Number of categories: ${ulList.length}`);

ulList.forEach(el => {
  const title = el.querySelector('h2');
  const item = el.querySelectorAll('li');
  console.log(`Category: ${title.textContent}`);
  console.log(`Elements: ${item.length}`);
});