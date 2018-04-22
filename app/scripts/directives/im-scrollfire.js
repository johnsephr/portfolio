(function () {
    'use strict';


angular
    .module('portfolioApp')
    .directive('imScrollfire', imScrollfire);

function imScrollfire($window, $log) {
    var directive = {
        restrict: 'A',
        link: link,
        scope: {
            show: '='
        }
    };

    return directive;

    function link(scope, element, attrs) {
//        angular.element($window).bind("scroll", function () {
//
//            var scrollTop = $window.pageYOffset;
//            var elementOffset = element[0].getBoundingClientRect().top;
//            var distance = (elementOffset - scrollTop);
//
//            if(distance < 20) {
//                 $log.log(distance);
//                scope.show = true;
//                scope.$apply();
////                element.addClass('active');
//            }
//        });

    }
}
})();
