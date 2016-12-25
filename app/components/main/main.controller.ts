class MainController {
    public static $inject: string[] = ['STATE_NAMES'];

    public userName: string = 'Example user';
    public helloText: string = 'Hello text';
    public descriptionText: string = 'And this is description text';

    // @ngInject
    constructor(public STATE_NAMES: any) {
    }
}

angular.module('app').controller('MainController', MainController);
