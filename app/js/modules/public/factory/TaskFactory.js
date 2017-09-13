'use strict';

function TaskFactory($window) {

    var dataObj;
    /**
     * [setTask function sets Task List on Local Storage]
     * @param {Object} obj [Task]
     */
    function setTask(obj) {
        dataObj = JSON.parse($window.localStorage.getItem('TaskStorage')) || [];
        dataObj.push(obj);
        $window.localStorage.setItem('TaskStorage', JSON.stringify(dataObj));
    }

    /**
     * [getTask function fetches Task List from Local Storage]
     * @return {Object}    [Task List Object]
     */
    function getTask() {
        dataObj = JSON.parse($window.localStorage.getItem('TaskStorage')) || [];
        return dataObj;
    }
    /**
     * [getTaskById function fetches A single Task by matching Task Id]
     * @param  String id [Task Id]
     * @return {Object}    [Task Object]
     */
    function getTaskById(id) {
        console.log('type of id:', typeof(id));
        var task;
        dataObj = JSON.parse($window.localStorage.getItem('TaskStorage')) || [];
        dataObj.find(function(each) {
            if (each._id == id) {
                task = each;
            }
        });
        return task
    }
    /**
     * [editTask function matches the edited task and 
     * stores it in Local Storage]
     * @param  {Object} obj [Task Object]
     */
    function editTask(obj) {
        dataObj = JSON.parse($window.localStorage.getItem('TaskStorage')) || [];
        dataObj.map(function(each) {
            if (each._id == obj._id) {
                each.name = obj.name;
                each.desc = obj.desc;
            }
        });
        $window.localStorage.setItem('TaskStorage', JSON.stringify(dataObj));
    }
    /**
     * [archiveTask function Archive a task by storing 
     * the changed status in Local Storage]
     * @param  {Object} obj [Task Object]
     */
    function archiveTask(obj) {
        dataObj = JSON.parse($window.localStorage.getItem('TaskStorage')) || [];
        dataObj.map(function(each) {
            if (each._id == obj._id) {
                each.archived = obj.archived;
            }
        });
        $window.localStorage.setItem('TaskStorage', JSON.stringify(dataObj));
    }

    return {
        setTask: setTask,
        getTask: getTask,
        getTaskById: getTaskById,
        editTask: editTask,
        archiveTask: archiveTask
    }

}
TaskFactory.$inject = ['$window'];
module.exports = TaskFactory;