console.log('=== Test VS Code ===');

const div = document.querySelector('div');
const titles = document.querySelectorAll('h2');
const h1 = document.getElementsByTagName('h1');

// console.log(div);
console.dir(div);
console.dir(titles);
console.log(Array.from(titles));
console.log(Array.prototype.slice.call(titles));
console.log([...titles]);
console.log(h1);
console.log(titles);

console.log(div.parentElement);

const link = div.querySelector('.link');
console.log(link.parentElement);
console.log(link.closest('.content'));