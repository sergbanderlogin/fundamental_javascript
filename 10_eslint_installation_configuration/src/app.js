const a = 1;

function foo(name) {
  const lastName = name;
  return lastName;
}

let x = 120;

x++;

foo("Sergey");

console.log(window);

// eslint-disable-next-line no-console
console.log(x, a);

// a;sf;asklf;asfj;as- a;klf;askljf;asjf;;a ;aklf;aklsf;aksfhlsfioqewrfpihv ;asfkh;askfh;askfh;;asf

const arrow = (y) => y + 1;
arrow(2);

const obj = {
  name: "Sergey",
};

const name = obj.name;

console.log(obj);
