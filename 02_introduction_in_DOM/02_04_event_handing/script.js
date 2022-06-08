console.log('=== Event Handing ===');

const btn = document.querySelector('button');
const link = document.querySelector('a');

console.log('=========================================');
// btn.onclick = function(){
// console.log(btn);
// }
console.log('=========================================');

// btn.addEventListener('click', function (e) {
//    console.log(e);
// });
//
// link.addEventListener('click', function (e) {
//    e.preventDefault();
//    console.log(e);
// });
console.log('=========================================');

// btn.addEventListener('click', e => {
//    console.log(this);
//    console.log(e);
// });
//
// function clickHandler(e) {
//    e.preventDefault();
//    console.log(this);
//    console.log('click');
// }
//
// link.addEventListener('click', clickHandler);
//
// link.removeEventListener('click', clickHandler);

console.log('=========================================');

// const container = document.querySelector('.container');
//
// btn.addEventListener('click', e => {
//     const div = document.createElement('div');
//     div.textContent = Math.random();
//     container.appendChild(div);
// });
console.log('=========================================');

const container = document.querySelector('.container');

btn.addEventListener('click', e => {
   const div = document.createElement('div');
   const nestedBtn = document.createElement('button');
   div.textContent = Math.random();
   nestedBtn.textContent = 'button';
   div.appendChild(nestedBtn);
   container.appendChild(div);
});

container.addEventListener('click', e => {
   console.dir(e.target);
   if (e.target.tagName === 'BUTTON') {
      console.log('button clicked');
   }
});

