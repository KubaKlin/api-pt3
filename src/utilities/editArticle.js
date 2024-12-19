export function editArticle(
  allArticles,
  articleContainer,
  element,
  articleURL,
) {
  const articleData = allArticles.find(function (article) {
    return article.id === element.target.dataset.id;
  });

  const editForm = articleContainer.querySelector(
    `.edit-article-${element.target.dataset.id}`,
  );
  editForm.innerHTML = `
    <form class='form edit-article' action='index.html' method='post'>
      <form class="article-form">
        <input required class="edit-title" placeholder="${articleData.title}">
        <input required class="edit-content" placeholder="${articleData.content}">
        <input class="save-edit-button" type="submit" value="Save Edit">
    </form>`;

  editForm.addEventListener('submit', function (element) {
    element.preventDefault();
    const titleInput = document.querySelector('.edit-title').value;
    const contentInput = document.querySelector('.edit-content').value;
    const editedArticle = document.querySelector(`.article-${articleData.id}`);

    fetch(`${articleURL}/${articleData.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: titleInput,
        content: contentInput,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (article) {
        editedArticle.innerHTML = `
          <div class='article-${article.id} article-wrapper'>
            <h2>${article.title}</h2>
            <p>${article.content}</p>
            <button data-id=${article.id} class="edit-${article.id} edit-button" data-action="edit">Edit</button>
            <button data-id=${article.id} class="delete-${article.id} delete-button" data-action="delete">Delete</button>
          </div>
          <div class='edit-article-${article.id}'>
          </div>`;
        editForm.innerHTML = '';
      });
  });
}
