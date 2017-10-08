'use strict';
module.exports = [
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('play', {
                url: '/play',
                template: require('../templates/play.html'),
                controller: 'PlayController'
            })
        $urlRouterProvider.otherwise('/play');
    }
];