console.log("=== Homework Ajax ===");

const apiURL = "https://jsonplaceholder.typicode.com";
const usersListEl = document.querySelector(".users-list");
const userInfoEl = document.querySelector(".user-info");

// 1. розробити запит отримання користувачів
// 2. розробити обробник відповідей від сервера
// 3. рендер списка користувачів
// 4. повісити подію click на список
// 5. отримати id коримтувача
// 6. робимо запит на сервер отримуючи інфу про користувача
// 7. обробник на відповідь від сервера
// 8. рендереьо інфу про користувача

// DOM Events
usersListEl.addEventListener("click", onUserClickHandler);

function onUserClickHandler(e) {
  e.preventDefault();

  if (e.target.dataset.userId) {
    // console.log(e.target.dataset.userId);
    getUserInfoHTTP(e.target.dataset.userId, onGetUserCallback);
  }

}

function getUsersHTTP(cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${apiURL}/users`);

  xhr.addEventListener("load", () => {
    // console.log(xhr.responseText);
    if (xhr.status !== 200) {
      console.log("Error", xhr.status);
      return;
    }

    const res = JSON.parse(xhr.responseText);

    cb(res);
  });

  xhr.send();
}

function getUserInfoHTTP(id, cb) {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `${apiURL}/users/${id}`);

  xhr.addEventListener("load", () => {
    // console.log(xhr.responseText);
    if (xhr.status !== 200) {
      console.log("Error", xhr.status);
      return;
    }

    const res = JSON.parse(xhr.responseText);

    cb(res);
  });

  xhr.send();
}

function onGetUsersCallback(users) {
  // console.log(users);

  if (!users.length) {
    return;
  }

  renderUsersList(users);
}

function onGetUserCallback(user) {
  console.log(user);
  if (!user.id) {
    console.log("User not found");
    return;
  }

  renderUserInfo(user);
}

function renderUserInfo(user) {
  userInfoEl.innerHTML = "";

  const template = userInfoTemplate(user);

  userInfoEl.insertAdjacentHTML("afterbegin", template);
}

function renderUsersList(users) {
  const fragment = users.reduce(
    (acc, user) => acc + userListItemTemplate(user),
    ""
  );

  // console.log(fragment);

  usersListEl.insertAdjacentHTML("afterbegin", fragment);
}

function userListItemTemplate(user) {
  return `
  
  <button type="button" class="list-group-item list-group-item-action" data-user-id="${user.id}">
  ${user.name}
  </button>
  `;
}

function userInfoTemplate(user) {
  return `
    <div class="card border-dark mb-3">
      <div class="card-header">${user.name}</div> 
      <div vlass="card-body text-dark">
        <h5 class="card-title ml-3">${user.email}</h5>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>Nickname: </b>${user.username}</li>
          <li class="list-group-item"><b>Website: </b>${user.website}</li>
          <li class="list-group-item"><b>Company: </b>${user.company.name}</li>
          <li class="list-group-item"><b>City: </b>${user.address.city}</li>
        </ul>
      </div>
      
    <div class="card-footer bg-transparent border-dark">Phone: ${user.phone}</div>
    </div>
  `;
}

// Init app
getUsersHTTP(onGetUsersCallback);