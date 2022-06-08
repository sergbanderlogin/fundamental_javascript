console.log("=== HomeWork DOM ===");

const span = document.querySelector("span");
const spanParent = document.querySelector(".parent-1");

// function isPatent (parent, child) {
//   return parent === child.parentElement;
// }

// console.log(isPatent(spanParent, span));

function isParent(parent, child) {
  let currentParent = child.parentElement;
  let isParent = false;

  while (currentParent) {
    isParent = parent === currentParent;
    if (isParent) {
      currentParent = null;
    } else {
      currentParent = currentParent.parentElement;
    }
  }
  return isParent;
}

// console.log(isParent(spanParent, span));

const p = document.querySelector("p");

// console.dir(p);
const [...childNodes] = p.childNodes;

childNodes.forEach((node) => {
  if (node.nodeType === 3) {
    node.textContent = "-text-";
  }
});

console.log(childNodes);

const ul = document.querySelector('ul');
const counts = 4;
const totalCounts = ul.children.length + counts;

for (let i = ul.children.length; i < totalCounts; i++) {
  const li = document.createElement('li');
  li.classList.add('new-item');
  li.textContent = `item ${i +1}`;
  ul.appendChild(li);
}
