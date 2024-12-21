export function deleteArticle(element, articleURL) {
  fetch(`${articleURL}/${element.target.dataset.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(function (response) {
      return response.json();
    })
    .catch(function (error) {
      console.error('Delete failed:', error);
    });
  const articleElement = document.querySelector(
    `.article-${element.target.dataset.id}`,
  );
  if (articleElement) {
    articleElement.remove();
  } else {
    console.log('Article element not found in the DOM');
  }
}
