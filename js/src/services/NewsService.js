/**
 * Created by hummorsa on 6/22/17.
 */

dotCMSApp.service('NewsService',['$http',function($http){

    this.getNews = function(pageSize,offset,filterSearch){
        var url = 'https://demo.dotcms.com/api/content/render/true/type/json/query/+contentType:News';
        if (filterSearch){
            url+=' +News.tags:'+filterSearch;
        }
        url+='/limit/'+pageSize+'/offset/'+offset
      return $http.get(url);
    };

    this.addNews = function(data){
         return $http.post('https://demo.dotcms.com/api/content/publish/1',data,{
                headers:{
                    'Authorization':'admin@dotcms.com:admin',
                    'Content-Type': undefined
                },
                transformRequest: angular.identity
            });
        };

}]);