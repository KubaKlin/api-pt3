import { addEditForm } from './addEditForm';
import addEditedArticle from './addEditedArticle';

export function editArticle(
  allArticles,
  articleContainer,
  element,
  articleURL,
  errorInfoElement,
) {
  const articleData = allArticles.find(function (article) {
    return article.id === element.target.dataset.id;
  });

  const editForm = articleContainer.querySelector(
    `.edit-article-${element.target.dataset.id}`,
  );
  const editformButton = articleContainer.querySelector(
    `.edit-${element.target.dataset.id}`,
  );
  editformButton.disabled = true;
  const form = addEditForm(articleData);
  editForm?.appendChild(form);

  editForm?.addEventListener('submit', function (element) {
    element.preventDefault();
    const titleInput = document.querySelector('.edit-title')?.value;
    const contentInput = document.querySelector('.edit-content')?.value;
    const editedArticle = document.querySelector(`.article-${articleData.id}`);
    errorInfoElement.innerText = '';

    fetch(`${articleURL}/${articleData.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        title: !titleInput ? articleData.title : titleInput,
        content: contentInput === '' ? null : contentInput,
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
        editformButton.disabled = false;
      })
      .catch(function (response) {
        if (response.status === 409) {
          errorInfoElement.innerText =
            'article with this title already exists!';
        } else {
          errorInfoElement.innerText = 'something went wrong!';
        }
      });
  });
}
