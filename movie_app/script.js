// add end number ::))
const apiKey = '4c00b3613a87503dd082665c05e3f17';
const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=' + apiKey + '&page=1';
const baseImageAddress = 'https://image.tmdb.org/t/p/w1280';
const searchUrl = 'https://api.themoviedb.org/3/discover/movie?api_key' + apiKey + '&query=';
const main = document.getElementById('main');

const getMovies = async () => {
  try {
    const movies = await fetch(apiUrl);
    const result = await movies.json();
    result.results.forEach((movie) => {
      createMoviecard(movie);
    });
  } catch (e) {
    console.error(e);
  }
};
function createMoviecard(movie) {
  //   console.log(movie);
  const newMovie = `
        <div class="movie">
          <img src=${baseImageAddress + movie.poster_path} alt="movie" />
          <div class="movie-info">
            <h3>${movie.original_title}</h3>
            <span class=${movie.vote_average > 7 ? 'green' : movie.vote_average <= 7 && movie.vote_average > 5 ? 'yellow' : 'red'}>${movie.vote_average}</span>
          </div>
          <div class="overview">
            <h3>Overview</h3>
                ${movie.overview}  
           </div>
        </div>`;

  main.innerHTML = main.innerHTML + newMovie;
}
getMovies();
