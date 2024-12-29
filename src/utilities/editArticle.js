import { addEditForm } from './addEditForm';
import addEditedArticle from './addEditedArticle';

export function editArticle(
  allArticles,
  articleContainer,
  element,
  articleURL,
  errorInfo,
) {
  const articleData = allArticles.find(function (article) {
    return article.id === element.target.dataset.id;
  });

  const editForm = articleContainer.querySelector(
    `.edit-article-${element.target.dataset.id}`,
  );
  const form = addEditForm(articleData);
  editForm?.appendChild(form);

  editForm?.addEventListener('submit', function (element) {
    element.preventDefault();
    const titleInput = document.querySelector('.edit-title')?.value;
    const contentInput = document.querySelector('.edit-content')?.value;
    const editedArticle = document.querySelector(`.article-${articleData.id}`);
    errorInfo.innerText = '';

    fetch(`${articleURL}/${articleData.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: !titleInput ? articleData.title : titleInput,
        content: !contentInput ? articleData.content : contentInput,
      }),
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
        const oldArticleElements = document.querySelectorAll(
          `.article-${articleData.id} *`,
        );
        oldArticleElements.forEach(function (element) {
          element.remove();
        });
        editForm?.remove();
        addEditedArticle(article, editedArticle, articleContainer);
      })
      .catch(function (response) {
        if (response.status === 409) {
          errorInfo.innerText = 'article with this title already exists!';
        } else {
          errorInfo.innerText = 'something went wrong!';
        }
      });
  });
}
