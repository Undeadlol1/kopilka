angular
    .module('kopilka')
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $reactive, $ionicPopup, $timeout, $rootScope) {
    $reactive(this).attach($scope);
    var vm = this;
    vm.subscribe('data', undefined, {
        onReady: function() {
            vm.loading = false;
        }
    });

    // oldValue is 0 at start of the apllication to 
    // start fancy countdown animation beggining with 0
    vm.oldValue = 0;
    vm.loading = true;
    vm.helpers({
        goal: () => {
            return Goals.findOne({
                userId: Meteor.userId(),
                active: true
            });
        },
        savings: () => {
            var user = Meteor.user();
            if (!user) {
                return '';
            } else {
                return user.profile.savings;
            }
        }
    });


    // reset thingy
    $scope.$on('reset', function(event, msg) {
        vm.oldValue = vm.savings;
        vm.savings = msg;
    });

    vm.addMoney = function() {
        console.log('addmoney in ctrl is invoked!');
        $scope.money = {};
        var myPopup = $ionicPopup.show({
            template: '<form ng-submit="addMoney()">' +
                'Сумма <input type="number" autofocus ng-model="money.value">' +
                'Комментарий <input type="text" ng-model="money.name" placeholder="необязательно">' +
                '<ion-toggle ng-model="money.remind" toggle-class="toggle-positive">Напомнить?</ion-toggle>' +
                '</form>',
            title: 'Добавить денег',
            scope: $scope,
            buttons: [{
                text: 'Отмена'
            }, {
                text: '<b>Добавить</b>',
                type: 'button-positive',
                onTap: function(e) {
                    // console.log($scope.money.remind);
                    addMoney();
                }
            }]
        });
        myPopup.then(function(res) {
            checkGoal();
        });

        function addMoney() {
            var post = {
                savings: vm.savings,
                name: $scope.money.name,
                money: $scope.money.value,
                remind: $scope.money.remind
            };
            Meteor.call('addMoney', post, function(error, result) {});
            // vm.savings = Number(vm.savings) + Number($scope.money.value);
            vm.oldValue = Number(vm.savings) - Number($scope.money.value);
        }

        function checkGoal() {
            // if there is an active goal
            if (vm.goal) {
                // check if goal is reached
                if (vm.savings >= vm.goal.amount) {
                    console.log('Goal is reached!');
                    // Open a confirm dialog
                    var confirmPopup = $ionicPopup.confirm({
                        title: 'Поздравляю! Вы достигли цель',
                        template: 'Потратить деньги или копить дальше?'
                    });
                    confirmPopup.then(function(res) {
                        if (res) {
                            // ask if user want to share to social media
                            var confirmPopup = $ionicPopup.confirm({
                                title: 'Рассказать друзьям?',
                                template: '<ul ng-social-buttons data-url="\'http://kopilka.meteor.com/\'" data-title="main.goal.name" data-description="\'Я накопил на эту вещь!\'" data-image="main.goal.img">' +
                                    '<li>Share:</li>' +
                                    '<!-- <li class="ng-social-facebook">Facebook</li>' +
                                    '<li class="ng-social-twitter">Twitter</li> -->' +
                                    '<li class="ng-social-vk">Вконтакте</li>' +
                                    '</ul>'
                            });

                            // then do the rest
                            confirmPopup.then(function(res) {
                                console.log('confirmPopup ended!');
                                var post = {
                                    userId: Meteor.userId(),
                                    goal: vm.goal
                                };
                                Meteor.call('doneGoal', post, function(error, result) {
                                    if (error) {
                                        console.log(error);
                                    } else {
                                        vm.savings -= vm.goal.amount;
                                        //vm.goal = '';
                                    }
                                });
                            });

                        } else {
                            var post = {
                                userId: Meteor.userId(),
                                goal: vm.goal
                            };
                            Meteor.call('keepSavings', post, function(error, result) {});
                        }
                    });
                }
            }

        }
    };

}
