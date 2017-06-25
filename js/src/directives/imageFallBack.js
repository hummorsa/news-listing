/**
 * Created by hummorsa on 6/24/17.
 */
'use strict';

dotCMSApp.directive('imageFallBack', function() {
    return {
        link: function(scope, element, attrs) {
            element.bind('error', function() {
                if (attrs.src != attrs.imageFallBack) {
                    attrs.$set('src', attrs.imageFallBack);
                }
            });
        }
    };
});
