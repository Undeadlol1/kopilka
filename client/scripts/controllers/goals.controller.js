angular
    .module('Whatsapp')
    .controller('GoalsCtrl', GoalsCtrl);

function GoalsCtrl($scope) {
    $scope.helpers({
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
    $scope.makeActive = function(g) {
        Meteor.call('makeActive', g._id);
    };

}
