angular
    .module('kopilka')
    .directive('goldSound', function() {
        // Runs during compile
        return {
            link: function($scope, el, iAttrs, controller) {
                $scope.$watch("main.savings", function(oldValue, newValue) {
                    // making sure there is no sound on startup
                    if (oldValue !== 0) {
                        if (oldValue !== newValue) {
                            var audio = new Audio('/gold_coins.mp3');
                            audio.play();
                        }
                    }
                });
            }
        };
    });
