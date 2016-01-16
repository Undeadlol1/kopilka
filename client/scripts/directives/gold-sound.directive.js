angular
    .module('Whatsapp')
    .directive('goldSound', function() {
        // Runs during compile
        return {
            link: function($scope, el, iAttrs, controller) {
                $scope.$watch("savings", function(oldValue, newValue) {
                    if (oldValue !== newValue) {
                        var audio = new Audio('/gold_coins.mp3');
                        audio.play();
                    }
                });
            }
        };
    });
