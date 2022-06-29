const api = "https://jsonplaceholder.typicode.com";

$(document).ready(function () {
  getDataById();
});

function getDataById() {
  const urlString = window.location.href;
  const url = new URL(urlString);
  const id = url.searchParams.get("id");

  $.get(`${api}/posts/${id}`, function (res) {
    renderPost(res);
  });
}

function renderPost(post) {
  const html = `
      <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
          <a href="./post.html">
              <div class="post-item">
                  <p>
                      ${item.title}
                  </p>
              </div>
          </a>
      </div>`;

  $(".posts").append(html);

  page++;
}
