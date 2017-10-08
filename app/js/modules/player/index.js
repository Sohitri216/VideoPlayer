'use strict';

module.exports = angular.module('VideoPlayer.modules.player', ['ui.router'])
    .config(require('./router/router'))
    .controller('PlayController', require('./controllers/PlayController'));