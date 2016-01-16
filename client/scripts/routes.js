angular
    .module('Whatsapp')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'client/templates/tabs.html',
            resolve: {
                currentUser: ($q) => {
                    if (Meteor.userId() === null) {
                        return $q.reject('AUTH_REQUIRED');
                    } else {
                        return $q.resolve();
                    }
                }
            }
        })
        .state('tab.main', {
            url: '/main',
            views: {
                'tab-main': {
                    templateUrl: 'client/templates/main.html',
                    controller: 'MainCtrl as main'
                }
            },
            resolve: {
                user: function($q, $timeout) {
                        /* var deferred = $q.defer();
                         var user;
                         $timeout(function() {
                             user = Meteor.users.findOne({
                                 _id: Meteor.userId()
                             });
                         }, 3000);
                         if (user) {
                             console.log('user is defined');
                             console.log(user);
                             deferred.resolve(user);
                         } else {
                             deferred.reject(console.log('you fucked up'));
                         }*/
                        return true;
                    }
                    /*,
                                    greeting: function($q, $timeout) {
                                        var deferred = $q.defer();
                                        $timeout(function() {
                                            deferred.resolve('Hello!');
                                        }, 3000);
                                        return deferred.promise;
                                    }*/
            }
        }).state('tab.goals', {
            url: '/goals',
            views: {
                'tab-goals': {
                    templateUrl: 'client/templates/goals.html',
                    controller: 'GoalsCtrl as gc'
                }
            }
        }).state('tab.add', {
            url: '/add-goal',
            views: {
                'tab-goals': {
                    templateUrl: 'client/templates/add-goal.html',
                    controller: 'AddGoalCtrl as ag'
                }
            }
        }).state('tab.edit', {
            url: '/edit-goal/:goalId',
            views: {
                'tab-goals': {
                    templateUrl: 'client/templates/edit-goal.html',
                    controller: 'EditGoalCtrl as eg'
                }
            }
        }).state('tab.settings', {
            url: '/settings',
            views: {
                'tab-settings': {
                    templateUrl: 'client/templates/settings.html',
                    controller: 'SettingsCtrl as st'
                }
            }
        }).state('tab.history', {
            url: '/history',
            views: {
                'tab-history': {
                    templateUrl: 'client/templates/history.html',
                    controller: 'HistoryCtrl as ht'
                }
            }
        }).state('signIn', {
            url: '/sign-in',
            templateUrl: 'client/templates/accounts.html',
            controller: 'AccountsCtrl as ac'
        });

    $urlRouterProvider.otherwise('tab/main');
}

angular.module('Whatsapp').run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error === 'AUTH_REQUIRED') {
            $state.go('signIn');
        }
    });
});
