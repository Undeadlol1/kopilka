angular
    .module('kopilka')
    .controller('EditGoalCtrl', EditGoalCtrl);

function EditGoalCtrl($scope, $reactive, $ionicLoading, $stateParams) {
    var wm = this;
    $reactive(wm).attach($scope);
    wm.subscribe('data');


    wm.helpers({
        g: function() {
            return Goals.findOne({
                _id: $stateParams.goalId
            });
        }
    });
    wm.editGoal = function(g) {
        Goals.update({
            _id: g._id
        }, {
            $set: {
                name: g.name,
                amount: g.amount,
                img: g.img
            }
        });
        wm.g.img = g.img;
        $ionicLoading.show({
            template: 'Цель обновлена!',
            noBackdrop: true,
            duration: 2000
        });
    };
}
