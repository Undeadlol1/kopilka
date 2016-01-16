Meteor.methods({
    getUser: function(userId) {
        var i = {
            goal: Goals.findOne({
                userId: userId,
                active: true
            }),
            user: Meteor.users.findOne({
                _id: userId
            })
        };
        return i;
    },
    addMoney: function(post) {
        var user = Meteor.users.findOne({
            _id: Meteor.userId()
        });
        if (isNaN(user.profile.savings)) {
            console.log('savings is NaN');
            console.log('Setting savings to 0');
            Meteor.users.update({
                _id: user._id
            }, {
                $set: {
                    'profile.savings': Number(post.money)
                }
            });
        } else {
            Meteor.users.update({
                _id: Meteor.userId()
            }, {
                $set: {
                    'profile.savings': Number(post.savings) + Number(post.money)
                }
            });
        }
        /* Savings.update({
            userId: Meteor.userId()
        }, {
            $set: {
                amount: Number(post.savings) + Number(post.money)
            }
        });*/
        Pays.insert({
            userId: Meteor.userId(),
            name: post.name,
            amount: post.money,
            date: new Date()
        });
    },
    makeActive: function(_id) {
        Goals.update({
            userId: Meteor.userId(),
            active: true,
            done: false
        }, {
            $set: {
                active: false
            }
        }, {
            multi: true
        });
        Goals.update({
            _id: _id
        }, {
            $set: {
                active: true
            }
        });
    },
    reset: function(userId) {
        Meteor.users.update({
            _id: userId
        }, {
            $set: {
                "profile.savings": 0
            }
        });
        Pays.remove({
            userId: userId
        });
    },
    doneGoal: function(post) {
        Meteor.users.update({
            _id: post.userId
        }, {
            $set: {
                "profile.savings": 0
            }
        });
        /*Savings.update({
            userId: post.userId
        }, {
            $set: {
                amount: 0
            }
        });*/
        Goals.update({
            _id: post.goal._id
        }, {
            $set: {
                active: false,
                done: true,
                doneAt: new Date()
            }
        });
    },
    keepSavings: function(post) {
        // deactive current goal
        Goals.update({
            _id: post.goal._id
        }, {
            $set: {
                active: false
            }
        });
        // make active next one
        // update $qt does not works properly so first
        // i find proper document to update
        var nextGoal = Goals.findOne({
            done: false,
            amount: {
                $gt: post.goal.amount
            }
        }, {
            sort: {
                amount: 1
            }
        });
        Goals.update({
            _id: nextGoal._id
        }, {
            $set: {
                active: true
            }
        });
    }
});
