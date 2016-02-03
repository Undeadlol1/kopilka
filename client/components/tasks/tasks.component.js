angular
    .module('kopilka').directive('tasks', function() {
        return {
            restrict: 'E',
            // replcae is needed to prevent ionic css bugs
            // replace: true,
            templateUrl: 'client/components/tasks/tasks.html',
            controller: 'TasksCtrl as tasks'
        };
    });
