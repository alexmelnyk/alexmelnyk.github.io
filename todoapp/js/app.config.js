/**
 * Created by leha on 09.01.17.
 */
angular.
module('app').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/tasks', {
                template: '<task-list></task-list>'
            }).
            when('/tasks/task', {
                template: '<task-detail></task-detail>'
            }).
            otherwise('/tasks');
    }
]);