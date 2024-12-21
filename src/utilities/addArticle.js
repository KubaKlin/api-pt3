import addArticleStructure from "./addArticleStructure";

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

  if (titleInput && contentInput) {
    errorInfo.innerText = '';
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
            return Promise.reject({status: response.status});
          }
          if (!response.ok) {
            return Promise.reject({status: response.status});
          }
          return response.json();
        })
        .then(function (article) {
          errorInfo.innerText = '';
          addArticleStructure(article, articleContainer);
          allArticles.push(article);
        })
        .catch(function () {
          errorInfo.innerText = 'article with this title already exists!';
        });
  } else {
    errorInfo.innerText = 'please fill in all fields!';
  }
}
