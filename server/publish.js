var returnData = function(_id) {
    return [
        Goals.find({
            userId: _id
        }), Tasks.find({
            userId: _id
        }), Thoughts.find({
            userId: _id
        }), Labels.find({
            userId: _id
        }), Desires.find({
            userId: _id
        }), Phases.find({
            userId: _id
        }), Things.find({
            userId: _id
        }), Steps.find({
            userId: _id
        }), Skills.find({
            userId: _id
        })
    ];
};

// data for /:userName
Meteor.publish('userProfile', function(userName) {
    var requestedUser = Meteor.users.findOne({
        username: userName
    });

    // check for acces rights
    if (requestedUser.profile.public === "true") {
        returnData(requestedUser._id);
    } else {
        return [];
    }

});

// data for guide page where consumer === logged in user

Meteor.publish('currentProfile', function(userId) {
    // check for acces rights
    if (this.userId === userId) {
        returnData(userId);
    } else {
        return [];
    }

});

//Meteor.users.remove(PCLmorzNzvBLCm8sP);

/*Meteor.publish('tasks', function() {
    return Tasks.find({
        userId: this.userId
    });
});

Meteor.publish('goals', function() {
    return Goals.find({
        userId: this.userId
    });
});

Meteor.publish('subgoals', function() {
    return Subgoals.find({
        userId: this.userId
    });
});

Meteor.publish('labels', function() {
    return Labels.find({
        userId: this.userId
    });
});
Meteor.publish('bars', function() {
    return Bars.find({
        userId: this.userId
    });
});

Meteor.publish('resources', function() {
    return Resources.find({
        userId: this.userId
    });
});

Meteor.publish('lists', function() {
    return Lists.find({
        userId: this.userId
    });
});
Meteor.publish('listItems', function() {
    return ListItems.find({
        userId: this.userId
    });
});
Meteor.publish('desires', function() {
    return Desires.find({
        userId: this.userId
    });
});
Meteor.publish('phases', function() {
    return Phases.find({
        userId: this.userId
    });
});
Meteor.publish('things', function() {
    return Things.find({
        userId: this.userId
    });
});


Meteor.publish('thoughts', function() {
    return Thoughts.find({
        userId: this.userId
    });
});
*/
