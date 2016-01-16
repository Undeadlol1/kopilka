Package.describe({
    name: 'undeadlol1:angular-count-to',
    version: '1.0.0',
    // Brief, one-line summary of the package.
    summary: 'Angular directive to animate counting to a number (by sparkalow)',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/Undeadlol1/meteor-materialize-sass.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.2');
    api.use([
        'meteor',
        'angular'
    ]);
    api.export('countTo', 'client');

    // js files

    //api.addFiles('bower_components/angular-filter-count-to/dist/angular-filter-count-to.min.js', 'client');
});
