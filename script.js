const numberOfFilms = +prompt('How many movies did you watch?', '1-3');

const personalMovieDB = {

        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
}

const a = prompt('One of last seen movies?', ''),
      b = prompt('Rate this movie?', ''),
      c = prompt('One of last seen movies?', ''),
      d = prompt('Rate this movie?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);