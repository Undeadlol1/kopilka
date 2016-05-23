angular
    .module('kopilka')
    .controller('TasksCtrl', TasksCtrl);

function TasksCtrl($scope, $reactive, $state, toastr) {
    $reactive(this).attach($scope);
    this.subscribe('data');
    const vm = this;
    // show delete button 
    vm.showDelete = false;
    vm.helpers({
        tasks() {
            return Tasks.find({
                userId: Meteor.userId(),
                done: false
            }, {
                sort: {
                    createdAt: -1
                }
            });
        }
    });
    vm.done = function(task) {
        Meteor.call('doneTask', task);
    };
    vm.removeTask = function(t) {
        Tasks.remove(t._id);
        toastr.success('Task Removed!');
    };

}
