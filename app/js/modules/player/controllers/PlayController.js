'use strict';
/**
 * [PlayController function manages video playing functionality]
 * @param {Object} $scope [Angular $scope object]
 */
function PlayController($scope) {
    /**
     * [fetchURL function checks for a valid youtube URL]
     */
    $scope.fetchURL = function() {
        var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|\?v=)([^#\&\?]*).*/;
        if ($scope.urlLink.match(regExp)) {
            $scope.videoURL = $scope.urlLink;
            $scope.invalid=false;
        } else {
            console.log('Not a Youtube video');
            $scope.invalid=true;
        }
    };
    /**
     * [clear function removes the Url from text box]
     */
    $scope.clear = function() {
        $scope.urlLink = '';
         $scope.invalid=false;
    };
}

PlayController.$inject = ['$scope'];
module.exports = PlayController;