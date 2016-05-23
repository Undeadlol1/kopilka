angular
    .module('kopilka')
    .controller('AccountsCtrl', AccountsCtrl);

function AccountsCtrl($scope, $state) {
    Accounts.onLogin(function() {
        $state.go('tab.main');
    });
}
