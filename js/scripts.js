var API_KEY = '949e950a';
var elFormMovie = document.querySelector('.js-movie-form');
var elBekorchiButton = elFormMovie.querySelector('.bekorchi-button');
var elMovieInput = elFormMovie.querySelector('.js-movie-input');

elFormMovie.addEventListener('submit', function (evt) {
  evt.preventDefault();

  var SEARCH_QUERY = elMovieInput.value.trim();

  fetch(`http://omdbapi.com/?apikey=${API_KEY}&s=${SEARCH_QUERY}&page=5`).then(function (response) {
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return response.json();
  }).then(function (data) {
    console.log(data);
    console.log(data.Search);
    console.log(data.Search[0]);
    console.log(data.totalResults);
  });
});