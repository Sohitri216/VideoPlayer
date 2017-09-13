'use strict';
/**
 * [TaskController controls the abstract header View]
 * @param {Object} $scope     [$scope object]
 * @param {Object} $state      [Changing routing view]
 * @param {Object} $rootScope [Parent scope]
 */
function TaskController($scope, $state, $rootScope) {

    /**
     * [gotoList function to navigate to list view]
     */
    $scope.gotoList = function() {
        $state.go('task.list');
    }


}

TaskController.$inject = ['$scope', '$state', '$rootScope'];
module.exports = TaskController;