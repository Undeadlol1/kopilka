angular
    .module('Whatsapp')
    .controller('AddGoalCtrl', AddGoalCtrl);

function AddGoalCtrl($scope, $reactive, $ionicLoading, toastr) {

    $reactive(this).attach($scope);
    var wm = this;
    wm.subscribe('data');

    wm.helpers({});
    wm.addGoal = function(g) {
        Goals.insert({
            userId: Meteor.userId(),
            name: g.name,
            amount: g.amount,
            img: g.img,
            done: false,
            active: false
        });

        toastr.success('Цель добавлена!');
        /*$ionicLoading.show({
            template: 'Цель добавлена!',
            noBackdrop: true,
            duration: 2000
        });*/
    };
}
