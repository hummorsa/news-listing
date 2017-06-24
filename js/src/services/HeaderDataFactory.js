/**
 * Created by hummorsa on 6/24/17.
 */

'use strict';

dotCMSApp.factory('HeaderDataFactory', [function(){

    var headerButton = {
        url:'/',
        text:'Home'
    };

    return{
        getHeaderButtonValues:function(){
            return headerButton
        },
        setHeaderButtonValues:function(value){
            headerButton = value;
        }
    }
}]);