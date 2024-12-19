export function addArticle(
  event,
  articleForm,
  articleURL,
  allArticles,
  articleContainer,
  errorInfo,
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
      if (response.status === 409) {
       return Promise.reject({ status: response.status });
     }
      return response.json();
    })
    .then(function (article) {
      errorInfo.innerText = '';
      allArticles.push(article);
      articleContainer.innerHTML += `
        <div class='article-${article.id} article-wrapper'>
          <h2>${article.title}</h2>
          <p>${article.content}</p>
          <button data-id=${article.id} class="edit-${article.id} edit-button" data-action="edit">Edit</button>
          <button data-id=${article.id} class="delete-${article.id} delete-button" data-action="delete">Delete</button>
        </div>
        <div class='edit-article-${article.id}'>
        </div>`;
    })
    .catch(function () {
      errorInfo.innerText = 'article with this title already exists!';
    })
}
