angular
    .module('Whatsapp').directive('goals', function() {
        return {
            restrict: 'E',
            // replcae is needed to prevent ionic css bugs
            // replace: true,
            templateUrl: 'client/components/goals/goals.html',
            controller: 'GoalsCtrl as goals'
        };
    });
