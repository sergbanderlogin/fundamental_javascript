console.log("=== Introduction in Promises. Part-1. ===");

const promise = new Promise((resolve, reject) => {
  // setTimeout(() => resolve(Math.random()), 5000);
  setTimeout(() => reject('error'), 5000);
});

console.log(promise);
promise
  .then(x => {
    console.log(x);
    return x;
  })
  .then((y) => console.log(y))
  .catch((err) => console.log(err));

// promise.then((z) => console.log(z));
