'use strict';
/**
 * [ListController controls the list of Tasks created by the user]
 * @param {Object} $scope      [Angular $scope object]
 * @param {Object} $state      [Changing routing view]
 * @param {Object} TaskFactory [Factory to accesses the Local Storage]
 */
function ListController($scope, $state, TaskFactory, $rootScope) {
    var vm = this;
    $rootScope.listPage = true;
    /**
     * [initialization function to fetch all the Tasks from Local Storage]
     */
    vm.init = function() {
        vm.taskList = TaskFactory.getTask();
    };
    /**
     * [gotoCreate function function goes to CreateTask]
     */
    vm.gotoCreate = function() {
        $state.go('task.create');
    };
    /**
     * [archiveTask function archives a particular Task 
     * and saves the Task in Local Storage]
     * @param  {Object} task [An Individual Task Object]
     */
    vm.archiveTask = function(task) {
        task.archived = !task.archived;
        TaskFactory.archiveTask(task);
    };
    /**
     * [editTask function navigates to Edit Task view
     *  and opens a Task in Edit Mode]
     * @param  {[type]} task [description]
     * @return {[type]}      [description]
     */
    vm.editTask = function(task) {
        $state.go('task.edit', { id: task._id })

    }
}

ListController.$inject = ['$scope', '$state', 'TaskFactory', '$rootScope'];
module.exports = ListController;