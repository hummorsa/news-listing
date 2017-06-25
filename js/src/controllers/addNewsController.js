/**
 * Created by hummorsa on 6/24/17.
 */
'use strict';
dotCMSApp.controller('addNewsController',['$scope','NewsService','$filter','$location' ,function($scope,NewsService,$filter,$location){
    var dataDefaults = {
        stInode:"28039964-5615-4ccf-bb96-ded62adbcc6a",
        languageId:1,
        hostfolder:"demo.dotcms.com",
        byline: "Demo Testing",
        topic: "test,demo,angular"
    }, dataForm = new FormData();
    $scope.headerButton.url = '/';
    $scope.headerButton.text='Home';
    $scope.headerButton.showMenu=false;
    $scope.submitBtn = {
        text:'Add',
        sending:false
    };

    $scope.validate = function() {
        angular.forEach($scope.addItem.$error.required, function(field) {
            field.$setDirty();
        });
        var uploadedFile = document.getElementById('file');
        if ($scope.addItem.$valid && uploadedFile.files.length > 0){
            $scope.submitBtn = {
                text:'Sending Data...',
                sending:true
            };
            $scope.item.urlTitle=$scope.item.title.replace(/\s/g ,"-")
            $scope.item.sysPublishDate= new Date();
            angular.extend($scope.item, dataDefaults);
            dataForm.append('json',JSON.stringify($scope.item))
            dataForm.append('file', uploadedFile.files[0]);
            NewsService.addNews(dataForm).then(function(response){
                $location.path('/');
                $scope.errorMessage=null;
            },function(error){
                $scope.errorMessage='Error Uploading the news';
                $scope.submitBtn = {
                    text:'Add',
                    sending:false
                };
            });

        }else{
            $scope.errorMessage='Error: All Fields Including the Image is Required.';
        }
    }
}]);