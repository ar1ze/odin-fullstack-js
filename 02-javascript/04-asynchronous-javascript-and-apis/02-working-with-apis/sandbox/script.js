const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('#search');

const constructUrl = function constructUrl(term) {
  const apiKey = 'EJAYyuj8TsfepeB4osYYLe8HtWtgDJTN';
  const baseUrl = 'https://api.giphy.com/v1/gifs/random';
  return `${baseUrl}?api_key=${apiKey}&tag=${term}`;
};

const createImageElement = function createImageElement(src) {
  const img = document.querySelector('img');
  if (!img) {
    const newImg = document.createElement('img');
    newImg.src = src;
    document.body.appendChild(newImg);  
  } else {
    img.src = src;
  }
};

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const url = constructUrl(searchTerm);

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    })
    .then((data) => {
      const src = data.data.images.original.url;
      createImageElement(src);
    });
});
