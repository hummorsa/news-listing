/**
 * Created by hummorsa on 6/24/17.
 */

'use strict';

dotCMSApp.controller('addNewsController',['$scope',function($scope){

    $scope.headerButton.url = '/';
    $scope.headerButton.text='Home';

    console.log('addNewsController linked')

}]);