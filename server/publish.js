Meteor.publish('data', function() {
    return [Goals.find({
        userId: this.userId
    }), Pays.find({
        userId: this.userId
    }), Savings.find({
        userId: this.userId
    }), Tasks.find({
        userId: this.userId
    })];
});
