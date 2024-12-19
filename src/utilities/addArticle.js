export function addArticle(
  event,
  articleForm,
  articleURL,
  allArticles,
  articleContainer,
) {
  event.preventDefault();
  const titleInput = articleForm.querySelector('.title').value;
  const contentInput = articleForm.querySelector('.content').value;

  fetch(articleURL, {
    method: 'POST',
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
      allArticles.push(article);
      articleContainer.innerHTML += `
        <div class='article-${article.id}'>
          <h2>${article.title}</h2>
          <p>${article.content}</p>
          <button data-id=${article.id} id="edit-${article.id}" data-action="edit">Edit</button>
          <button data-id=${article.id} id="delete-${article.id}" data-action="delete">Delete</button>
        </div>
        <div class='edit-article-${article.id}'>
        </div>`;
    });
}
