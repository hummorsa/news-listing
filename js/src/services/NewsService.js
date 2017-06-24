/**
 * Created by hummorsa on 6/22/17.
 */

dotCMSApp.service('NewsService',['$http',function($http){

    this.getNews = function(){
      return $http.get('https://demo.dotcms.com/api/content/render/true/type/json/query/+contentType:News/');
    };

}]);