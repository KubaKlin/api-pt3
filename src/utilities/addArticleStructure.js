export default function addArticleStructure(article, articleContainer) {
  const articleWrapper = document.createElement("div");
  articleWrapper.classList.add(`article-${article.id}`, "article-wrapper");

  const articleTitle = document.createElement("h2");
  articleTitle.textContent = article.title;
  articleWrapper.appendChild(articleTitle);

  const articleContent = document.createElement("p");
  articleContent.textContent = article.content;
  articleWrapper.appendChild(articleContent);

  const editButton = document.createElement("button");
  editButton.dataset.id = article.id;
  editButton.classList.add(`edit-${article.id}`, "edit-button");
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";
  articleWrapper.appendChild(editButton);

  const deleteButton = document.createElement("button");
  deleteButton.dataset.id = article.id;
  deleteButton.classList.add(`delete-${article.id}`, "delete-button");
  deleteButton.dataset.action = "delete";
  deleteButton.textContent = "Delete";
  articleWrapper.appendChild(deleteButton);

  articleContainer.appendChild(articleWrapper);

  const editArticleContainer = document.createElement("div");
  editArticleContainer.classList.add(`edit-article-${article.id}`);
  articleWrapper.appendChild(editArticleContainer);
}