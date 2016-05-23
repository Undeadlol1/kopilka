angular
    .module('kopilka')
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
                    controller: 'MainCtrl as main',
                    templateUrl: 'client/templates/main.html'
                }
            },
        }).state('tab.goals', {
            url: '/goals',
            views: {
                'tab-goals': {
                    controller: 'GoalsCtrl as goals',
                    templateUrl: 'client/templates/goals.html'
                }
            }
        }).state('tab.addGoal', {
            url: '/add-goal',
            views: {
                'tab-goals': {
                    controller: 'AddGoalCtrl as addGoal',
                    templateUrl: 'client/templates/add-goal.html'
                }
            }
        }).state('tab.editGoal', {
            url: '/edit-goal/:goalId',
            views: {
                'tab-goals': {
                    controller: 'EditGoalCtrl as editGoal',
                    templateUrl: 'client/templates/edit-goal.html'
                }
            }
        }).state('tab.settings', {
            url: '/settings',
            views: {
                'tab-settings': {
                    controller: 'SettingsCtrl as settings',
                    templateUrl: 'client/templates/settings.html'
                }
            }
        }).state('tab.history', {
            url: '/history',
            views: {
                'tab-history': {
                    controller: 'HistoryCtrl as history',
                    templateUrl: 'client/templates/history.html'
                }
            }
        }).state('tab.tasks', {
            url: '/tasks',
            views: {
                'tab-tasks': {
                    controller: 'TasksCtrl as tasks',
                    templateUrl: 'client/templates/tasks.html'
                }
            }
        }).state('tab.addTask', {
            url: '/add-task',
            views: {
                'tab-tasks': {
                    controller: 'AddTaskCtrl as addTask',
                    templateUrl: 'client/templates/add-task.html'
                }
            }
        }).state('signIn', {
            url: '/sign-in',
            controller: 'AccountsCtrl as accounts',
            templateUrl: 'client/templates/accounts.html'
        });

    $urlRouterProvider.otherwise('tab/main');
}

angular.module('kopilka').run(function($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        if (error === 'AUTH_REQUIRED') {
            $state.go('signIn');
        }
    });
});
