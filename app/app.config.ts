function mainConfig($httpProvider: angular.IHttpProvider,
                    $provide: any,
                    toastrConfig: any): void {
    angular.extend(toastrConfig, {
        closeButton: true
    });

    $provide.decorator('$exceptionHandler', $exceptionHandler);

    $exceptionHandler.$inject = ['$delegate', '$injector'];
    function $exceptionHandler($delegate: any, $injector: any) {
        return function exceptionHandler(exception: any, cause: any) {
            let toastr = $injector.get('toastr');
            toastr.error(exception.message, 'Error');
            $delegate(exception, cause);
        };
    }

    $httpProvider.interceptors.push('errorInterceptor');
}

angular.module('app').config(mainConfig);
