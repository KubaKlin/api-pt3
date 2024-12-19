import { deleteArticle } from './utilities/deleteArticle';
import { editArticle } from './utilities/editArticle';
import { addArticle } from './utilities/addArticle';

const articleContainer = document.querySelector('.article-container');
const articleURL = `http://localhost:3000/articles`;
const articleForm = document.querySelector('.article-form');
let allArticles = [];

fetch(articleURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (articleData) {
    articleData.forEach(function (article) {
      allArticles = articleData;
      articleContainer.innerHTML += `
        <div class='article-${article.id}'>
          <h2>${article.title}</h2>
          <p>${article.content}</p>
          <button data-id=${article.id} class="edit-${article.id}" data-action="edit">Edit</button>
          <button data-id=${article.id} class="delete-${article.id}" data-action="delete">Delete</button>
        </div>
        <div class='edit-article-${article.id}'>
        </div>`;
    });
  });

articleForm.addEventListener('submit', function (event) {
  addArticle(event, articleForm, articleURL, allArticles, articleContainer);
});

articleContainer.addEventListener('click', function (element) {
  if (element.target.dataset.action === 'edit') {
    editArticle(allArticles, articleContainer, element, articleURL);
  } else if (element.target.dataset.action === 'delete') {
    deleteArticle(element, articleURL);
  }
});
