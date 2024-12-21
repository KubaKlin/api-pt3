export function addEditForm(articleData) {
  const form = document.createElement('form');
  form.className = 'form edit-article';
  form.action = 'index.html';
  form.method = 'post';

  const titleInput = document.createElement('input');
  titleInput.className = 'edit-title';
  titleInput.value = articleData.title;

  const contentInput = document.createElement('input');
  contentInput.className = 'edit-content';
  contentInput.value = articleData.content;

  const saveButton = document.createElement('input');
  saveButton.type = 'submit';
  saveButton.value = 'Save Edit';
  saveButton.className = 'save-edit-button';

  form.appendChild(titleInput);
  form.appendChild(contentInput);
  form.appendChild(saveButton);

  return form;
}
