/**
 * Created by hummorsa on 6/24/17.
 */
'use strict';

dotCMSApp.filter('ConvertDateFormat',['$filter',function($filter){
  return function(){
      return $filter('date')(new Date(arguments[0].split(' ')[0]), arguments[1])
  }
}]);