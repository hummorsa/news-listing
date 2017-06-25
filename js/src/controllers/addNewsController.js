/**
 * Created by hummorsa on 6/24/17.
 */

'use strict';

dotCMSApp.controller('addNewsController',['$scope','NewsService',function($scope,NewsService){

    $scope.headerButton.url = '/';
    $scope.headerButton.text='Home';
    $scope.headerButton.showMenu=false;


    console.log('addNewsController linked');

    var r = new FileReader();


    $scope.uploadFile = function(files) {
        var fd = new FormData();
        //Take the first selected file
        fd.append("file", files[0]);

       console.log(fd);
    };


    r.onloadend = function(e) {
        var data = e.target.result;
        console.log(data);
        //send your binary data via $http or $resource or do anything else with it
    }


    $scope.validate = function() {
        angular.forEach($scope.addItem.$error.required, function(field) {
            field.$setDirty();
        });
        if ($scope.addItem.$valid){
            var fd = new FormData();

            var uploadedFile = document.getElementById('file');

            if (uploadedFile.files.length=== 0){

            }else{

            }

            console.log();

            NewsService.addNews($scope.item);

            $scope.errorMessage=null;

        }else{
            $scope.errorMessage='Error: Required fields in red.';
        }


    }

}]);