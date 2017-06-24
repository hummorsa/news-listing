dotCMSApp.filter('CapitalizeFirstLetter', ['$filter',
  function($filter) {
    return function(value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    };
  }
]);

dotCMSApp.filter('ConvertDateFormat',['$filter',function($filter){
  return function(){
      return $filter('date')(new Date(arguments[0]), arguments[1])
  }
}]);