// Custom Http Module
function customHttp() {
  return {
    get(url, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        xhr.send();
      } catch (error) {
        cb(error);
      }
    },
    post(url, body, headers, cb) {
      try {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.addEventListener("load", () => {
          if (Math.floor(xhr.status / 100) !== 2) {
            cb(`Error. Status code: ${xhr.status}`, xhr);
            return;
          }
          const response = JSON.parse(xhr.responseText);
          cb(null, response);
        });

        xhr.addEventListener("error", () => {
          cb(`Error. Status code: ${xhr.status}`, xhr);
        });

        if (headers) {
          Object.entries(headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
          });
        }

        xhr.send(JSON.stringify(body));
      } catch (error) {
        cb(error);
      }
    },
  };
}
// Init http module
const http = customHttp();

const newsService = (function () {
  const apiKey = "4468e8ef393c40d7ba162f97affa8acc";
  const apiUrl = "https://newsapi.org/v2";

  return {
    topHeadlines(country = "ua", cb) {
      http.get(
        `${apiUrl}/top-headlines?country=${country}&category=technology&apiKey=${apiKey}`,
        cb
      );
    },
    everythig(query, cb) {
      http.get(`${apiUrl}/everything?q=${query}&apiKey=${apiKey}`, cb);
    },
  };
})();

const form = document.forms["newsControls"];
const contrySelect = form.elements["country"];
const searchInput = form.elements["search"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loadNews();
});

//  init selects
document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
  loadNews();
});

// Load news function
function loadNews() {

showLoader();

  const country = contrySelect.value;
  const searchText = searchInput.value;

  if (!searchText) {
    newsService.topHeadlines(country, onGetResponse);
  } else {
    newsService.everythig(searchText, onGetResponse);
  }

  newsService.topHeadlines("ua", onGetResponse);
}

// finction on get response from server
function onGetResponse(err, res) {
  removeProloader();
  if (err) {
    showAlert(err, "error-msg");
    return;
  }

  if (!res.articles.length) {
    // show empty message
    return;
  }

  renderNews(res.articles);
}

// function render news
function renderNews(news) {
  const newsContainer = document.querySelector(".news-container .row");
  if (newsContainer.children.length) {
    clearContainer(newsContainer);
  }
  let fragment = "";

  news.forEach((newsItem) => {
    const el = newsTemplate(newsItem);
    fragment += el;
  });

  newsContainer.insertAdjacentHTML("afterbegin", fragment);
}

// function clear container
function clearContainer(container) {
  // container.innerHTML = "";
  let child = container.lastElementChild;
  while (child) {
    container.removeChild(child);
    child = container.lastElementChild;
  }
}

// News item template function
function newsTemplate({ urlToImage, title, url, description }) {
  return `
    <div class="col s12">
      <div class="card">
        <div class="card-image">
          <img src="${urlToImage}">
          <span class="card-title">${title} || ""</span>
        </div>
        <div class="card-content">
          <p>${description} || ""</p>
        </div>
        <div class="card-action">
          <a href="${url}">Read more</a>
        </div>
      </div>
    </div>
  `;
}

function showAlert(msg, type = "success") {
  M.toasts({ html: msg, classes: type });
}

// Show loader function
function showLoader() {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="progress">
      <div class="indeterminate"></div>
    </div>
  `,
  );
}

// Remove loader function
function removeProloader(){
  const loader = document.querySelector('.progress');
  if(loader) {
    loader.remove();
  }
}