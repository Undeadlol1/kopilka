// package metadata file for Meteor.js
//var packageName = 'driftyco:ionic'; // https://atmospherejs.com/driftyco/ionic
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
//var version = '1.2.4';
var packageName = 'undeadlol1:angular-socialshare';
var version = '1.0.0';


Package.describe({
    name: packageName,
    version: version,
    /*   summary: 'Ionic Framework official Meteor package',
       git: 'git@github.com:driftyco/ionic.git'*/
    summary: 'Angular-social Meteor package',
    git: ''
});

Package.onUse(function(api) {
    //api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
    api.versionsFrom(['1.2']);

    // scss preproccesor
    //api.use('fourseven:scss@3.3.3', where);

    api.use('angular:angular@1.4.3', where);
    api.addFiles('dist/angular-socialshare.min.js', 'client');
});
