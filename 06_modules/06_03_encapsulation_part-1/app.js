console.log("=== Encapsulation ===");

// const User = {
//   name:"Sergey",
//   getName() {
//     return this.name;
//   },
//   setName(name) {
//     this.name = name;
//   }
// }; (name)

// function User(name) {
//   let userName = name;

//   return {
//     getName() {
//       return userName;
//     },
//     setName() {
//       userName = name;
//     },
//   };
// }

// const sergey = new User('Sergey');

// function User(name) {
//   let userName = name;

//   return Object.freeze({
//     getName() {
//       return userName;
//     },
//     setName() {
//       userName = name;
//     },
//   });
// }

// const sergey = new User("Sergey");

function User(name) {
  const symbol = Symbol();
  return {
    [symbol]: name,
    getName() {
      return this[symbol];
    },
    setName() {
      this[symbol] = name;
    },
  };
}

const sergey = new User("Sergey");