console.log("=== Introduction async await ===");

// ==================================================
// function getPost(id) {
//   return Promise.resolve().then(() => {
//     const [userType, userId] = id.split("-");
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`).then(
//       (response) => response.json()
//     );
//   });
// }

// ====================================================
// async function getPost(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   );

//   const data = await response.json();
//   return data;
// }

// getPost(3)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ====================================================

// async function getPost2(id) {
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   ).then((res) => res.json());

//   return response;
// }

// getPost2(3)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ====================================================

// async function getPost3(id) {
//   try {
//     const response = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//     ).then((res) => res.json());

//     return response;
//   } catch (err) {
//     console.log(err);
//     return Promise.reject(err);
//   }
// }

// getPost3(1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// =====================================================

//   async function getPost4(id) {
//   try {
//     const response1 = await fetch(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//     ).then((res) => res.json());
//     const response2 = await fetch(
//       `https://jsonplaceholder.typicode.com/users`,
//     ).then((res) => res.json());

//     return (response1, response2);
//   } catch (err) {
//     console.log(err);
//     return Promise.reject(err);
//   }
// }

// getPost4(1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// ==================================================

async function getPost4(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    ).then((res) => res.json());

    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

// getPost4(1)
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

async function getAll() {
  const [res1, res2] = await Promise.all([getPost4(1), getPost4(2)]);
  console.log(res1, res2);
}

getAll();

// ==================================================
