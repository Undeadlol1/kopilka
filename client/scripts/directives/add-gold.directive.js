angular
    .module('Whatsapp').directive('addGold', ['$ionicPopup', function($ionicPopup) {
        return {
            controller: 'MainCtrl',
            link: function($scope, iElm, iAttrs, controller) {
                console.log('addGold directive is running');
                iElm.on('click', function(event) {
                    // SCOPES SHOULD NOT BE HERE
                    // CHANGE TO PLAING JAVASCRIPT/JQLITE
                    $scope.money = {};
                    var myPopup = $ionicPopup.show({
                        template: '<form>' +
                            'Сумма <input type="number" autofocus ng-model="money.value">' +
                            'Комментарий <input type="text" ng-model="money.name" placeholder="необязательно">' +
                            '</form>',
                        title: 'Добавить денег',
                        scope: $scope,
                        buttons: [{
                            text: 'Отмена'
                        }, {
                            text: '<b>Добавить</b>',
                            type: 'button-positive',
                            onTap: function(e) {
                                addMoney();
                                console.log($scope.savings);
                                console.log($scope.money);
                            }
                        }]
                    });
                    myPopup.then(function(res) {
                        checkGoal();
                    });

                    function addMoney() {
                        var post = {
                            savings: $scope.savings,
                            name: $scope.money.name,
                            money: $scope.money.value
                        };
                        Meteor.call('addMoney', post, function(error, result) {});
                        $scope.savings = Number($scope.savings) + Number($scope.money.value);
                        $scope.oldValue = Number($scope.savings) - Number($scope.money.value);
                    }

                    function checkGoal() {
                        // if there is an active goal
                        if ($scope.goal) {
                            // check if goal is reached
                            if ($scope.savings >= $scope.goal.amount) {
                                console.log('Goal is reached!');
                                // Open a confirm dialog
                                var confirmPopup = $ionicPopup.confirm({
                                    title: 'Поздравляю! Вы достигли цель',
                                    template: 'Потратить деньги или копить дальше?'
                                });
                                confirmPopup.then(function(res) {
                                    if (res) {
                                        var post = {
                                            userId: Meteor.userId(),
                                            goal: $scope.goal
                                        };
                                        Meteor.call('doneGoal', post, function(error, result) {
                                            if (error) {
                                                console.log(error);
                                            } else {
                                                $scope.savings = 0;
                                                $scope.goal = '';
                                            }
                                        });
                                    } else {
                                        var object = {
                                            userId: Meteor.userId(),
                                            goal: $scope.goal
                                        };
                                        Meteor.call('keepSavings', object, function(error, result) {});
                                    }
                                });
                            }
                        }

                    }
                });
            }
        };
    }]);
