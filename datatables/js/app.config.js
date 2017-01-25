/**
 * Created by leha on 09.01.17.
 */
angular.
module('dataTables').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

            $routeProvider.
            when('/gridlist/:gridId', {
                template: '<main></main>'
            }).
            when('/edit', {
                template: '<grid-edit></grid-edit>'
            }).
            otherwise('/gridlist/1');
    }
]);