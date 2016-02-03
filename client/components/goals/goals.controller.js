angular
    .module('kopilka')
    .controller('GoalsCtrl', GoalsCtrl);

function GoalsCtrl($scope, $reactive) {
    $reactive(this).attach($scope);
    this.subscribe('data');

    var vm = this;
    vm.helpers({
        goals() {
            return Goals.find({
                userId: Meteor.userId(),
                done: false
            }, {
                sort: {
                    amount: 1
                }
            });
        }
    });
    vm.makeActive = function(g) {
        Meteor.call('makeActive', g._id);
    };

}
