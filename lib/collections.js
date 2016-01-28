Goals = new Mongo.Collection('Goals');
Pays = new Mongo.Collection('pays');
Savings = new Mongo.Collection('savings');
Tasks = new Mongo.Collection('tasks');


// the user must be logged in, and the document must be owned by the user
// (userId && doc.userId === userId);

// check if array have certain field
var isInArray = function(value, array) {
    return array.indexOf(value) > -1;
};

Goals.allow({
    insert: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    update: function(userId, doc, fields, modifier) {
        return (userId && doc.userId === userId);
    },
    remove: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    fetch: ['userId']
});
Goals.deny({
    update: function(userId, doc, fields, modifier) {
        // can't change owners
        return isInArray('userId', fields);
    },
    fetch: ['userId'] // no need to fetch 'owner'
});
Pays.allow({
    insert: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    update: function(userId, doc, fields, modifier) {
        return (userId && doc.userId === userId);
    },
    remove: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    fetch: ['userId']
});
Pays.deny({
    update: function(userId, doc, fields, modifier) {
        // can't change owners
        return isInArray('userId', fields);
    },
    fetch: ['userId'] // no need to fetch 'owner'
});
Savings.allow({
    insert: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    update: function(userId, doc, fields, modifier) {
        return (userId && doc.userId === userId);
    },
    remove: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    fetch: ['userId']
});
Savings.deny({
    update: function(userId, doc, fields, modifier) {
        // can't change owners
        return isInArray('userId', fields);
    },
    fetch: ['userId'] // no need to fetch 'owner'
});
Tasks.allow({
    insert: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    update: function(userId, doc, fields, modifier) {
        return (userId && doc.userId === userId);
    },
    remove: function(userId, doc) {
        return (userId && doc.userId === userId);
    },
    fetch: ['userId']
});
Tasks.deny({
    update: function(userId, doc, fields, modifier) {
        // can't change owners
        return isInArray('userId', fields);
    },
    fetch: ['userId'] // no need to fetch 'owner'
});
