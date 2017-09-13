'use strict';

module.exports = angular.module('NotePad.modules.public', ['ui.router'])
    .config(require('./router/router'))
    .factory('TaskFactory', require('./factory/TaskFactory'))
    .controller('TaskController', require('./controllers/TaskController'))
    .controller('ListController', require('./controllers/ListController'))
    .controller('CreateController', require('./controllers/CreateController'));