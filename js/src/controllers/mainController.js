/**
 * Created by hummorsa on 6/24/17.
 */

'use strict';

dotCMSApp.controller('mainController', ['$scope','$location', function($scope,$location) {

    $scope.headerButton = {
        url:'/#!/addNews',
        text:'Add News',
        showMenu:true
    };

    $scope.cacheData = {

    };

    $scope.toggleLeftMenu = function(open){
        if(open){
            document.getElementById('news-list').style.width='70%';
        }else{
            document.getElementById('news-list').style.width='0%';
        }
    };

}]);
