angular
    .module('kopilka').directive('accounts', function() {
        return {
            restrict: 'E',
            templateUrl: 'client/components/accounts/accounts.html',
            controller: 'AccountsCtrl as accounts'
        };
    });
