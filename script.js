"use strict";

// let numberOfFilms;

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function start () {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
// }
// start();

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
    
//           if (a != null && b != null && a != '' && b !='' & a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//           } else {
//             console.log('error');
//             i--;
//           }      
//     }
// }
// // rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотренно довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман!');
//     } else {
//         console.log('Произошла ошибка!');
//     }
// }
// // detectPersonalLevel();

// function showMyDB (hidden) {
//   if (!hidden) {
//     console.log(personalMovieDB);
//   }  
// };

// showMyDB(personalMovieDB.privat)


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();



// ///////////////////////////////////////////////////////////////////////////////////
// Итерируемые конструкиции
//////////////////////////////////////////////////////////////////////////////////////

const user = {
    name: 'Alex',
    surname: 'Smith',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surrname}`);
    }
}

// for(const key in user) {
//     console.log(user[key]);
// }

// const str = 'string'

// for(const key in str) {
//     console.log(str[key]);
// }

const arr = ['b', 'a', 'c']
Array.prototype.someMethod = function() {};

console.dir(arr);

for(const key of arr) {
    console.log(key);
}


const salaries = {
    john: 500,
    ivan: 100,
    ann: 5000,
    sayHello: function() {
        console.log('Hello');
    }
}

salaries[Symbol.iterator] = function() {
    return {
        current: this.john,
        last: this.ann,

        next() {
            if(this.current < this.last) {
                this.current = this.current + 500
                return {done: false, value: this.current}
            } else {
                return {done: true}
            }
        }
    }
};

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());

// for (let res of salaries) {
//     console.log(res);
// }