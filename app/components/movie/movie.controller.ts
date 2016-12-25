'use strict';
class MovieController {
    // tslint:disable-next-line
    public static $inject: Array<string> = ['$sce', 'apiService', 'logger', '$stateParams','imgUrl'];

    public movie: any = {};

    // @ngInject
    constructor(public $sce: any, public apiService: any, public logger: any, public $stateParams: any,public imgUrl:string) {
        this.movie = $stateParams.movie;
    
       
      
        this.apiService.getMovieVideoByID(this.movie.id).then((url: string) => {
            this.movie.YTUrl = $sce.trustAsResourceUrl( url);
        });
        
    }
}

angular
    .module('app')
    .controller('MovieCtrl', MovieController);

