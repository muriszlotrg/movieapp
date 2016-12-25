angular.module('app').factory('logger', logger);

logger.$inject = ['$log', 'toastr'];

function logger($log: ng.ILogService, toastr: any) {
    return {
        error,
        info,
        success,
        warning,

        // straight to console; bypass toastr
        log: $log.log,
        showToasts: true
    };

    function error(message: string, title: string, data: any) {
        toastr.error(message, title);
        $log.error('Error: ' + message, data);
    }

    function info(message: string, title: string, data: any) {
        toastr.info(message, title);
        $log.info('Info: ' + message, data);
    }

    function success(message: string, title: string, data: any) {
        toastr.success(message, title);
        $log.info('Success: ' + message, data);
    }

    function warning(message: string, title: string, data: any) {
        toastr.warning(message, title);
        $log.warn('Warning: ' + message, data);
    }
}
