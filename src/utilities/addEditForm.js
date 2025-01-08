export function addEditForm(articleData) {
  const form = document.createElement('form');
  form.className = 'form edit-article';
  form.action = 'index.html';
  form.method = 'post';

  const articleTitle = document.querySelector(`.article-title-${articleData.id}`);
  const titleInput = document.createElement('input');
  titleInput.className = 'edit-title';
  titleInput.value = articleTitle.innerText;

  const articleContent = document.querySelector(`.article-content-${articleData.id}`);
  const contentInput = document.createElement('input');
  contentInput.className = 'edit-content';
  contentInput.value = articleContent.innerText;

  const saveButton = document.createElement('input');
  saveButton.type = 'submit';
  saveButton.value = 'Save Edit';
  saveButton.className = 'save-edit-button';

  form.appendChild(titleInput);
  form.appendChild(contentInput);
  form.appendChild(saveButton);

  return form;
}
