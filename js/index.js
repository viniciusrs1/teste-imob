var page = 1;

var allPosts;

const api = "https://jsonplaceholder.typicode.com";

const pageSize = 12;

$(document).ready(function () {
  getData();
  listenBottomBody();
});

function getData() {
  $.get(`${api}/posts`, function (res) {
    allPosts = res ? res : [];
    handlePaginationData();
  });
}

function handlePaginationData() {
  const postsByPage = allPosts.slice((page - 1) * pageSize, page * pageSize);
  if (postsByPage?.length > 0) {
    renderPosts(postsByPage);
  }
}

function renderPosts(postsByPage) {
  for (const item of postsByPage) {
    const html = `
    <div class="col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
        <a href="./post.html?id=${item.id}">
            <div class="post-item">
                <p>
                    ${item.title}
                </p>
            </div>
        </a>
    </div>`;

    $(".posts").append(html);
  }
  page++;
}

function listenBottomBody() {
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() == $(document).height()) {
      handlePaginationData();
    }
  });
}
