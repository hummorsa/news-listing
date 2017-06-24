/**
 * Created by hummorsa on 6/24/17.
 */

'use strict';

dotCMSApp.controller('listNewsController',['$scope', 'NewsService',function($scope, NewsService){
    $scope.headerButton.url = '/#!/addNews';
    $scope.headerButton.text='Add News';

    NewsService.getNews().then(function(response){
        $scope.newsList = response.data.contentlets;
        $scope.selectedIndex = 0;
        $scope.currentNews = $scope.newsList[0];
    },function(error){
        $scope.requestError=true;
        console.log('Error retrieving news')
    });


    $scope.loadContent = function(index){
        $scope.currentNews = $scope.newsList[index];
        $scope.selectedIndex = index;
    };


}]);