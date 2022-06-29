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
<div class="col-12">
  <h1>
    ${post.title}
  </h1>
  <p>
  ${post.body}
  </p>
</div>`;

  $(".content-post").append(html);
}
