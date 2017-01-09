(function () {

    angular
        .module(
            'test', [
                'testList',
                'testDetail',
                'getData'
            ])
        .directive('listDetail', function () {
            return{
                templateUrl: 'templates/test-detail.template.html'
            };
        })
        .directive('list', function () {
            return{
                templateUrl: 'templates/task-list.template.html'
            };
        })

})()