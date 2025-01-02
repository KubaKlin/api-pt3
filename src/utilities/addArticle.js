import addArticleStructure from './addArticleStructure';

export function addArticle(
  event,
  articleForm,
  articleURL,
  allArticles,
  articleContainer,
  errorInfoElement,
) {
  event.preventDefault();
  const titleInput = articleForm.querySelector('.title')?.value;
  const contentInput = articleForm.querySelector('.content')?.value;

  if (titleInput) {
    errorInfoElement.innerText = '';
    const articleData = { title: titleInput };

    if (contentInput) {
      articleData.content = contentInput;
    }

    fetch(articleURL, {
      method: 'POST',
      body: JSON.stringify(articleData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(function (response) {
        if (!response.ok) {
          return Promise.reject({ status: response.status });
        }
        return response.json();
      })
      .then(function (article) {
        if (!errorInfoElement) {
          return;
        }
        addArticleStructure(article, articleContainer);
        allArticles.push(article);
      })
      .catch(function (response) {
        if (response.status === 409) {
          errorInfoElement.innerText = 'article with this title already exists!';
        } else {
          errorInfoElement.innerText = 'something went wrong!';
        }
      });
  } else {
    errorInfoElement.innerText = 'please fill in all fields!';
  }
}
