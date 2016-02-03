angular
    .module('kopilka')
    .controller('AddTaskCtrl', AddTaskCtrl);

function AddTaskCtrl($scope, $reactive, $ionicLoading, toastr) {

    $reactive(this).attach($scope);
    var wm = this;
    wm.subscribe('data');

    wm.helpers({});
    wm.addTask = function(t) {
        Tasks.insert({
            userId: Meteor.userId(),
            name: t.name,
            amount: t.amount,
            done: false,
            createdAt: new Date()
        });
        toastr.success('Задача добавлена!');
        /*$ionicLoading.show({
            template: 'Задача добавлена!',
            noBackdrop: true,
            duration: 1200
        });*/
    };
}
