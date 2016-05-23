angular
    .module('kopilka')
    .controller('HistoryCtrl', HistoryCtrl);

function HistoryCtrl($scope, $reactive) {
    $reactive(this).attach($scope);
    this.subscribe('data');

    const vm = this;
    //vm.listCanSwipe = true;
    vm.helpers({
        reminders() {
                return Pays.find({
                    userId: Meteor.userId(),
                    remind: true
                }, {
                    sort: {
                        date: -1
                    }
                });
            },
            pays() {
                return Pays.find({
                    userId: Meteor.userId(),
                    // THIS LINE IS EXPERIMENTAL
                    remind: undefined
                }, {
                    sort: {
                        date: -1
                    }
                });
                /*let pays = Pays.find({
                    userId: Meteor.userId(),
                    // THIS LINE IS EXPERIMENTAL
                    remind: undefined
                }, {
                    sort: {
                        date: -1
                    }
                });
                console.log(pays);
                if (pays) {
                    return pays;
                } else {
                    return '';
                }*/
            }
    });
    vm.doneTask = function(pay) {
        Meteor.call('reminded', pay);

    };
    vm.reversePay = function(pay) {
        console.log('dsds');
    };
    vm.editPay = function(pay) {
        console.log('dsds');
    };
}
