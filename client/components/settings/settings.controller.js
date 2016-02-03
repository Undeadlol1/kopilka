angular
    .module('kopilka')
    .controller('SettingsCtrl', SettingsCtrl);

function SettingsCtrl($scope, $rootScope, $ionicPopup, $state) {
    $scope.helpers({});
    $scope.reset = function() {
        var confirmPopup = $ionicPopup.confirm({
            title: "Вы уверены?",
            template: 'Исправить это действие будет не возможно'
        });

        confirmPopup.then(function(res) {
            if (res) {
                Meteor.call('reset', Meteor.userId(), function(error, result) {});
                $rootScope.$broadcast('reset', 0);
                $state.go("tab.main");
            }
        });


    };
}
