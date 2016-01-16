angular
    .module('Whatsapp')
    .controller('HistoryCtrl', HistoryCtrl);

function HistoryCtrl($scope) {
    $scope.helpers({
        pays() {
            return Pays.find({
                userId: Meteor.userId()
            }, {
                sort: {
                    date: -1
                }
            });
        }
    });
    /* $scope.makeActive = function(g) {
         Goals.update({
             _id: g._id
         }, {
             $set: {
                 active: true
             }
         });
     }; */

}
