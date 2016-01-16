angular
    .module('Whatsapp')
    .controller('AddGoalCtrl', AddGoalCtrl);

function AddGoalCtrl($scope, $ionicLoading) {
    $scope.helpers({});
    $scope.addGoal = function(g) {
        Goals.insert({
            userId: Meteor.userId(),
            name: g.name,
            amount: g.amount,
            img: g.img,
            done: false,
            active: false
        });
        //$scope.g = " ";
        $ionicLoading.show({
            template: 'Цель добавлена!',
            noBackdrop: true,
            duration: 2000
        });
    };
}
