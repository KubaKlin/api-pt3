import './styles.css';
import { deleteArticle } from './utilities/deleteArticle';
import { editArticle } from './utilities/editArticle';
import { addArticle } from './utilities/addArticle';
import addArticleStructure from "./utilities/addArticleStructure";

const articleContainer = document.querySelector('.article-container');
const articleURL = `http://localhost:3000/articles`;
const articleForm = document.querySelector('.article-form');
const errorInfo = document.querySelector('.error-info');
let allArticles = [];

fetch(articleURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (articleData) {
    articleData.forEach(function (article) {
      allArticles = articleData;
      addArticleStructure(article, articleContainer);
    });
  });

articleForm.addEventListener('submit', function (event) {
  addArticle(
    event,
    articleForm,
    articleURL,
    allArticles,
    articleContainer,
    errorInfo,
  );
});

articleContainer.addEventListener('click', function (element) {
  if (element.target.dataset.action === 'edit') {
    editArticle(allArticles, articleContainer, element, articleURL);
  } else if (element.target.dataset.action === 'delete') {
    deleteArticle(element, articleURL);
  }
});
