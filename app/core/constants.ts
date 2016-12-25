 const STATE_NAMES = {
        movies: 'index.movies',
        shows: 'index.shows',
        main: 'index.main'
    };

    angular.module('app')
        .constant('apiUrl', 'https://api.themoviedb.org/3/')
        .constant('apiKey', '3f1b103e26e5c68ba7a5a82f17417006')
        .constant('imgUrl', 'https://image.tmdb.org/t/p/w500')
        .constant('videoUrl', 'https://www.youtube.com/embed/')
        .constant('STATE_NAMES', STATE_NAMES);

