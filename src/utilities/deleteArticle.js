export function deleteArticle(element, articleURL) {
  document.querySelector(`.article-${element.target.dataset.id}`).remove();
  fetch(`${articleURL}/${element.target.dataset.id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(function (response) {
    return response.json();
  });
}
