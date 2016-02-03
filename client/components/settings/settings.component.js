angular
    .module('kopilka').directive('settings', function() {
        return {
            restrict: 'E',
            // replcae is needed to prevent ionic css bugs
            // replace: true,
            templateUrl: 'client/components/settings/settings.html',
            controller: 'SettingsCtrl as settings'
        };
    });
