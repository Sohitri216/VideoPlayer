'use strict';
module.exports = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('task', {
                url: '/task',
                absract: true,
                template: require('../templates/task.html'),
                controller: 'TaskController'
            })
        $stateProvider
            .state('task.list', {
                url: '^/list',
                template: require('../templates/list.html'),
                controller: 'ListController',
                controllerAs: 'vm'
            })
        $stateProvider
            .state('task.create', {
                url: '^/create',
                template: require('../templates/create-task.html'),
                controller: 'CreateController',
                controllerAs: 'vm'
            })
        $stateProvider
            .state('task.edit', {
                url: '^/edit/id/:id',
                template: require('../templates/create-task.html'),
                controller: 'CreateController',
                controllerAs: 'vm',
                params: {
                    id: null
                }
            })
        $urlRouterProvider.otherwise('/list');
    }
];