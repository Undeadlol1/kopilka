angular
    .module('Whatsapp')
    .controller('AccountsCtrl', AccountsCtrl);

function AccountsCtrl($scope, $state) {
    Accounts.onLogin(function() {
        $state.go('tab.main');

    });
}
