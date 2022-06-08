console.log('=== Work wiith attributes elements ===');

const div = document.querySelector('div');
const link = document.querySelector('.link');

div.classList.add('article', 'custom');
div.classList.remove('article');
// div.classList.contains('article');  // false
// div.classList.contains('custom');  // true
console.log(div.classList);

div.classList.toggle('toggle');
console.log(link);
console.dir(link);

div.setAttribute('id', 'myId');
// div.id = 'myId2';
 
// div.getAttribute('id');   // myId
// div.hasAttribute('id');   // true
// div.removeAttribute('id');  // undefined

div.dataset.myattr;   // 'myCustom value'
// div.getAttribute('data-myattr');  // 'myCustom value'
// div.dataset.myattr = 'my a';  // 'my a'