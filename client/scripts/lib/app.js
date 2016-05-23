angular
    .module('kopilka', [
        'angular-meteor',
        'ionic',
        'countTo',
        'ngAnimate',
        'toastr',
       // 'ngSocial',
        '720kb.socialshare'
    ]);

if (Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
} else {
    angular.element(document).ready(onReady);
}

function onReady() {
    angular.bootstrap(document, ['kopilka']);
}
