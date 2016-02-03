angular
    .module('kopilka').directive('displaySavings', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/templates/display-savings.html',
            controller: 'MainCtrl as main',
            link: function($scope, iElm, iAttrs, controller) {
                if (iAttrs.showImage === 'false') {
                    iElm.find('.item-image').hide();
                }
            }
        };
    });
