angular
    .module('kopilka').directive('history', function() {
        return {
            restrict: 'E',
            // replcae is needed to prevent ionic css bugs
            // replace: true,
            templateUrl: 'client/components/history/history.html',
            controller: 'HistoryCtrl as history'
        };
    });
