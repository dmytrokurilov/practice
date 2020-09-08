'use strict';

    let numberOfFilms;

    function start() {
        numberOfFilms = +prompt('How many movies did you watch?', '1-3');   

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
               numberOfFilms = +prompt('How many movies did you watch?', '1-3');    
        }
}

start();

const personalMovieDB = {

        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
};

    function showMyDB(hidden) {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    }

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
                personalMovieDB.genres[i -1] = prompt(`Your favourite genre pod nomerom ${i}`, '');
        }
    }
writeYourGenres();

    function rememberMyFilms() {
for (let i = 0; i < 2; i++) {
    const a = prompt('One of last seen movies?', ''),
          b = prompt('Rate this movie?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log ('error');
        i--;
    }
    
}
    }

rememberMyFilms();


    function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
            console.log ("watched dovolno malo filmov");
    }   else if (personalMovieDB.count >= 10 &&  personalMovieDB.count < 30) {
           console.log ("classic zritel");
    }
        else if (personalMovieDB.count >= 30) {
            console.log ("you are kinoman");
        }
        else {
            console.log ("error");
        }
   
}

rememberMyFilms();

console.log(personalMovieDB);