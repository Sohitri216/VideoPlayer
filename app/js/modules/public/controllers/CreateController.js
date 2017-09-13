'use strict';
/**
 * [CreateController manages the TASK Create and Edit operation]
 * @param {Object} $scope      [Angular $scope object]
 * @param {Object} TaskFactory [Factory to accesses the Local Storage]
 * @param {Object} $state      [Changing routing view]
 */
function CreateController($scope, TaskFactory, $state, $rootScope) {
    var vm = this;
    vm.taskId = $state.params.id;
    $rootScope.listPage = false;
    /**
     * [initialization function of Creating a new Task]
     */
    vm.init = function() {
        vm.task = {
            archived: false
        };

    };
    /**
     * [getTaskData function fetches Task by Id]
     */
    vm.getTaskData = function() {
        vm.task = TaskFactory.getTaskById(vm.taskId);
    }
    /**
     * [checkMode checks for create or edit mode]
     */
    vm.checkMode = function() {
        if (vm.taskId === null) {
            $state.go('task.list');
        } else if (typeof(vm.taskId) === 'undefined') {
            vm.mode = 'add';
            vm.init();
        } else {
            vm.mode = 'edit';
            vm.getTaskData();
        }
    };
    /**
     * [addTask function adds a Task in the TaskList]
     */
    vm.addTask = function() {
        vm.task._id = Math.ceil((Math.random() * Math.random()) * 10000);
        TaskFactory.setTask(vm.task);
        $state.go('task.list');
    };
    /**
     * [editTask function edits an existing Task and sets it in the TaskList]
     */
    vm.editTask = function() {
        TaskFactory.editTask(vm.task);
        $state.go('task.list');
    };
    /**
     * [submitTask function handles the form submit function]
     */
    vm.submitTask = function() {
        if (vm.mode === 'add') {
            vm.addTask();
        } else {
            vm.editTask();
        }
    };
}

CreateController.$inject = ['$scope', 'TaskFactory', '$state', '$rootScope'];
module.exports = CreateController;