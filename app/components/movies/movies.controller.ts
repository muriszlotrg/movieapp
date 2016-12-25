'use strict';
class MoviesController {
    // tslint:disable-next-line
    public static $inject: Array<string> = ['apiService', 'logger', '$state','imgUrl'];

    public title: string = 'Movies';
    public data: any = {};

    // @ngInject
    constructor(public apiService: any, public logger: any, public $state: any,public imgUrl:string) {
        this.activate();
    }

    public activate = () => {
        this.getMovies();
    };

    public search = (searchTerm: string) => {
        if (searchTerm && searchTerm.length > 3) {
            this.apiService.searchMovies(searchTerm)
                .then((response: any) => {
                    this.data.moviesList = response.results;
                    this.logger.success('Fetched movies', 'Success', response);
                });
        }
    };

    public openMovie = (movie: any) => {
        this.$state.go('index.movie', {movie: movie});
    }

    private getMovies() {
        this.apiService.getMovies()
            .then((response: any) => {
                this.data.moviesList = response.results;
                this.logger.success('Fetched movies', response, 'Success');
            });
    }
}

angular.module('app').controller('MoviesController', MoviesController);


