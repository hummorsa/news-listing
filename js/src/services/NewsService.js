/**
 * Created by hummorsa on 6/22/17.
 */

dotCMSApp.service('NewsService',['$http',function($http){

    this.getNews = function(){
      return $http.get('https://demo.dotcms.com/api/content/render/true/type/json/query/+contentType:News/');
    };

    this.addNews = function(data){

        var dataDefaults = {
            stInode:"28039964-5615-4ccf-bb96-ded62adbcc6a",
            languageId:1,
            hostfolder:"demo.dotcms.com",
            byline: "Demo Testing",
            sysPublishDate: new Date,
            topic: "test,demo,angular",
            urlTitle: data.title.replace(/\s/g ,"-")
        };


        angular.extend(data, dataDefaults);

        console.log(data);

     $http.post('https://demo.dotcms.com/api/content/publish/1',data,{
            headers:{
                'Authorization':'admin@dotcms.com:admin',
                'Content-Type': 'application/json'
            }
        });
    };

}]);