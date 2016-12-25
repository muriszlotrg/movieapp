function routerConfig($locationProvider: ng.ILocationProvider,
                      $stateProvider: any,
                      $urlRouterProvider: any): void {
    $stateProvider
        .state('index', {
            abstract: true,
            templateUrl: 'app/views/content.html',
            url: '/index'
        })
        .state('index.main', {
            data: { pageTitle: 'Example view' },
            templateUrl: 'app/components/main/main.html',
            url: '/main'
        })
        .state('index.movies', {
            controller: 'MoviesController as movies',
            data: { pageTitle: 'Movies' },
            templateUrl: 'app/components/movies/movies.html',
            url: '/movies'
        })
         .state('index.movie', {
            controller: 'MovieCtrl as movie',
            params: { movie: null },
            data: { pageTitle: 'Movie' },
            templateUrl: 'app/components/movie/movie.html',
            url: '/movie'
        })
        .state('index.show', {
            controller: 'ShowCtrl as show',
            params: { show: null },
            data: { pageTitle: 'Shows' },
            templateUrl: 'app/components/show/show.html',
            url: '/show'
        })
        .state('index.shows', {
            controller: 'ShowsController as shows',
            data: { pageTitle: 'Shows' },
            templateUrl: 'app/components/shows/shows.html',
            url: '/shows'
        });

    $urlRouterProvider.otherwise('/index/movies');

    $locationProvider.html5Mode(true);
}

angular.module('app').config(routerConfig);
