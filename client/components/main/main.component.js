angular
    .module('Whatsapp').directive('main', function() {
        return {
            restrict: 'E',
            // replcae is needed to prevent ionic css bugs
            replace: true,
            templateUrl: 'client/components/main/main.html',
            controller: 'MainCtrl as main'
        };
    });
