class ShowsController {
    // tslint:disable-next-line
    public static $inject: Array<string> = ['apiService', 'logger','$state','imgUrl'];

    public title: string = 'Shows';
    public data: any = {};

    // @ngInject
    constructor(public apiService: any, public logger: any,public $state: any,public imgUrl:string) {
        this.getShows();
    }
     public search = (searchTerm: string) => {
        if (searchTerm && searchTerm.length > 3) {
            this.apiService.searchShows(searchTerm)
                .then((response: any) => {
                    this.data.showsList = response.results;
                    this.logger.success('Fetched shows', 'Success', response);
                });
        }
    };
 public openShow = (show: any) => {
        this.$state.go('index.show', {show: show});
    }
    private getShows() {
        this.apiService.getShows()
            .then((response: any) => {
                this.data.showsList = response.results;
                this.logger.success('Fetched shows', 'Success', response);
            });
    }
}

angular.module('app').controller('ShowsController', ShowsController);
