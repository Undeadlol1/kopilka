angular
    .module('Whatsapp')
    .controller('EditGoalCtrl', EditGoalCtrl);

function EditGoalCtrl($scope, $ionicLoading, $stateParams) {
    $scope.helpers({
        g: function() {
            return Goals.findOne({
                _id: $stateParams.goalId
            });
        }
    });
    $scope.editGoal = function(g) {
        Goals.update({
            _id: g._id
        }, {
            $set: {
                name: g.name,
                amount: g.amount,
                img: g.img
            }
        });
        $scope.g.img = g.img;
        $ionicLoading.show({
            template: 'Цель обновлена!',
            noBackdrop: true,
            duration: 2000
        });
    };
}
