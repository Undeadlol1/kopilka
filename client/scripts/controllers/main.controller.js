angular
    .module('Whatsapp')
    .controller('MainCtrl', MainCtrl);

function MainCtrl($scope, $reactive, $ionicPopup) {
    console.log('MainCtrl baby!');
    $reactive(this).attach($scope);
    var vm = this;

    // oldValue is 0 at start of the apllication to
    // start fancy countdown animation beggining with 0
    this.oldValue = 0;

    this.helpers({
        goal: () => {
            return Goals.findOne({
                userId: Meteor.userId(),
                active: true
            });
        },
        savings: () => {
            //return user.profile.savings;

            var data = Meteor.users.findOne({
                _id: Meteor.userId()
            });
            if (!data) {
                console.log('undefined, returning nothing');
                return '';
            } else {
                return data.profile.savings;
            }
            /*return Savings.findOne({
                userId: Meteor.userId()
                    // _id: 'o7YqGoGz9j5f4hCa6'
            }).amount;*/
            //return Meteor.user().profile.savings;
        }
    });
    // console.log($scope.savings);
    //console.log($scope.savings.amount);

    // reset thingy
    $scope.$on('reset', function(event, msg) {
        $scope.oldValue = $scope.savings;
        $scope.savings = msg;
    });

}
