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
                    template: '<main></main>'
                }
            },
        }).state('tab.goals', {
            url: '/goals',
            views: {
                'tab-goals': {
                    template: '<goals></goals>'
                }
            }
        }).state('tab.addGoal', {
            url: '/add-goal',
            views: {
                'tab-goals': {
                    controller: 'AddGoalCtrl as addGoal',
                    templateUrl: 'client/templates/add-goal.html'
                        // template: '<add-goal></add-goal>'
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
                    template: '<settings></settings>'
                }
            }
        }).state('tab.history', {
            url: '/history',
            views: {
                'tab-history': {
                    template: '<history></history>'
                }
            }
        }).state('tab.tasks', {
            url: '/tasks',
            views: {
                'tab-tasks': {
                    template: '<tasks></tasks>'
                }
            }
        }).state('tab.addTask', {
            url: '/add-task',
            views: {
                'tab-tasks': {
                    controller: 'AddTaskCtrl as addTask',
                    templateUrl: 'client/templates/add-task.html'
                        // template: '<add-task></add-task>'
                }
            }
        }).state('signIn', {
            url: '/sign-in',
            template: '<accounts></accounts>'
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
