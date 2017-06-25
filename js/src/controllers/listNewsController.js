/**
 * Created by hummorsa on 6/24/17.
 */

'use strict';

dotCMSApp.controller('listNewsController',['$scope', 'NewsService','$location',function($scope, NewsService,$location){
    $scope.headerButton.url = '/#!/addNews';
    $scope.headerButton.text='Add News';
    $scope.headerButton.showMenu=true;
    $scope.pagination = {
        pageSize:5,
        offSet:0,
        previous:true,
        next:false
    };

    //Initial Load.
    NewsService.getNews($scope.pagination.pageSize,$scope.pagination.offSet,$location.search().tag).then(function(response){
        $scope.newsList = response.data.contentlets;
        $scope.selectedIndex = 0;
        $scope.currentNews = $scope.newsList[0];
        if($scope.newsList.length < $scope.pagination.pageSize){ //Disable buttons if results are less than pagination.
            $scope.pagination.next = true;
        }
        if ($scope.newsList.length == 0){
            $scope.emptyresults = true;
        }
    },function(error){
        $scope.requestError=true;
        console.log('Error retrieving news');
    });


    $scope.loadContent = function(index){
        $scope.currentNews = $scope.newsList[index];
        $scope.selectedIndex = index;
        if(window.innerWidth <= 667){ //Add behavior to the left nav
            document.getElementById('news-list').style.width='0%';
            window.scrollTo(0, 0);
        };
    };


    $scope.paginationLoad = function(direction){ //true next - false previous.
        if (direction){
            $scope.pagination.offSet+=5;
        }else{
            $scope.pagination.offSet-=5;
        }
        NewsService.getNews($scope.pagination.pageSize,$scope.pagination.offSet,$location.search().tag).then(function(response){
            $scope.selectedIndex = null;
            $scope.newsList = response.data.contentlets;
            $scope.pagination.next = $scope.newsList.length < $scope.pagination.pageSize ? true : false;
            $scope.pagination.previous = $scope.pagination.offSet === 0 ? true : false;
        },function(error){
            $scope.requestError=true;
            console.log('Error retrieving news')
        });
    };





}]);