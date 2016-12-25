'use strict';
class ShowController {
    // tslint:disable-next-line
    public static $inject: Array<string> = ['$sce','apiService', 'logger', '$stateParams','imgUrl'];

    public show: any = {};

    // @ngInject
    constructor(public $sce: any,public apiService: any, public logger: any, public $stateParams: any,public imgUrl:string) {
        this.show = $stateParams.show;
        this.apiService.getMovieVideoByID(this.show.id).then((url: string) => {
            this.show.YTUrl = $sce.trustAsResourceUrl( url);
        });
    }
}

angular
    .module('app')
    .controller('ShowCtrl', ShowController);

