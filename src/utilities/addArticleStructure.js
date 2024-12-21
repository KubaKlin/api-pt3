export default function addArticleStructure(article, articleContainer) {
// Tworzenie elementu głównego
  const articleWrapper = document.createElement("div");
  articleWrapper.classList.add(`article-${article.id}`, "article-wrapper");

// Dodanie nagłówka
  const articleTitle = document.createElement("h2");
  articleTitle.textContent = article.title;
  articleWrapper.appendChild(articleTitle);

// Dodanie treści artykułu
  const articleContent = document.createElement("p");
  articleContent.textContent = article.content;
  articleWrapper.appendChild(articleContent);

// Tworzenie przycisku edycji
  const editButton = document.createElement("button");
  editButton.dataset.id = article.id;
  editButton.classList.add(`edit-${article.id}`, "edit-button");
  editButton.dataset.action = "edit";
  editButton.textContent = "Edit";
  articleWrapper.appendChild(editButton);

// Tworzenie przycisku usunięcia
  const deleteButton = document.createElement("button");
  deleteButton.dataset.id = article.id;
  deleteButton.classList.add(`delete-${article.id}`, "delete-button");
  deleteButton.dataset.action = "delete";
  deleteButton.textContent = "Delete";
  articleWrapper.appendChild(deleteButton);

// Dodanie wrappera do kontenera
  articleContainer.appendChild(articleWrapper);

// Tworzenie edytowalnego kontenera
  const editArticleContainer = document.createElement("div");
  editArticleContainer.classList.add(`edit-article-${article.id}`);
  articleContainer.appendChild(editArticleContainer);
}