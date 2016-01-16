Meteor.users.allow({
    insert: function(userId, doc) {
        return false;
    },

    update: function(userId, doc, fieldNames, modifier) {
        return true;
    },

    remove: function(userId, doc) {
        return false;
    }
});
