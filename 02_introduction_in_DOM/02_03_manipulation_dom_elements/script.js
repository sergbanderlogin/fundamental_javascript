console.log('=== Manipulation DOM Elements ===');

const div = document.querySelector('div');
const title = document.querySelector('h1');
// title.innerHTML = '<span>Text</span>';
// title.textContent = '<span>Text</span>';

// title.appendChild('<span>append</span>');   // TypeError on 'Node'
// title.insertAdjacentHTML('beforebegin', '<h2>title h2</h2>');
// title.insertAdjacentElement

// title.innerHTML += '<span>new Text</span>';
// const span = title.querySelector('span');
// console.log(span);
// title.innerHTML += '<span>new text 2</span>';
// span.textContent = 'another Text';

// *Створення едемента
const span = document.createElement('span');
span.textContent = ' span created by createElement';
span.classList.add('myClass');
console.log(span);
title.appendChild(span);

// div.appendChild(span);

const fragment = document.createDocumentFragment();
const colors = ['black', 'yellow', 'orange'];
colors.forEach(color => {
  const item = document.createElement('div');
  item.classList.add(`bg-${color}`);
  item.style.background = color;
  item.textContent = color;
  fragment.appendChild(item);

});

document.body.appendChild(fragment);

// *Видалення едементів зі сторінки

// title.remove();
// title.parentElement.removeChild(title);
