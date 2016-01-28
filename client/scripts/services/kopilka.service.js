angular
    .module('Whatsapp').service('kopilka', function() {
        return {
            getGoal: getGoal,
            getSavings: getSavings,
        };

        function getGoal() {
            return Goals.findOne({
                userId: Meteor.userId(),
                active: true
            });
        }

        function getSavings() {
            var data = Meteor.users.findOne({
                _id: Meteor.userId()
            });
            if (!data) {
                console.log('undefined, returning nothing');
                return '';
            } else {
                return data.profile.savings;
            }
        }
    });
