export default function addEditedArticle(article, editedArticle) {
  const heading = document.createElement('h2');
  heading.textContent = article.title;

  const content = document.createElement('p');
  content.textContent = article.content;

  const editButton = document.createElement('button');
  editButton.setAttribute('data-id', article.id);
  editButton.className = `edit-${article.id} edit-button`;
  editButton.setAttribute('data-action', 'edit');
  editButton.textContent = 'Edit';

  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('data-id', article.id);
  deleteButton.className = `delete-${article.id} delete-button`;
  deleteButton.setAttribute('data-action', 'delete');
  deleteButton.textContent = 'Delete';

  const editDiv = document.createElement('div');
  editDiv.className = `edit-article-${article.id}`;

  editedArticle?.appendChild(heading);
  editedArticle?.appendChild(content);
  editedArticle?.appendChild(editButton);
  editedArticle?.appendChild(deleteButton);
  editedArticle?.appendChild(editDiv);
}