'use strict';

var dotCMSApp = angular.module('dotCMSApp', ['ngRoute','ngSanitize']);

dotCMSApp.config(['$routeProvider','$locationProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: 'listNewsController',
        templateUrl: 'views/newsList.html'
      }).when('/addNews', {
        controller: 'addNewsController',
        templateUrl: 'views/addNews.html',
      }).
      otherwise({
        redirectTo: '/'
      });
  }
]);
