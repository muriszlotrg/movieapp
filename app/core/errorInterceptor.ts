angular.module('app').factory('errorInterceptor', errorInterceptor);

 function errorInterceptor($exceptionHandler: any, $q: ng.IQService) {
    return {
        responseError: function responseError(rejection: any) {
            const errorMessage: string = 'An HTTP request error has occurred.' +
                '\nStatus: ' + rejection.status +
                '\nStatus Text: ' + rejection.statusText +
                '\nHTTP object:';
            $exceptionHandler(errorMessage, { config: rejection.config, data: rejection.data });
            return $q.reject(rejection);
        }
    };
}
