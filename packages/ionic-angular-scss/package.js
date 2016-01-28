// package metadata file for Meteor.js
//var packageName = 'driftyco:ionic'; // https://atmospherejs.com/driftyco/ionic
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.
//var version = '1.2.4';
var packageName = 'undeadlol1:ionic-angular-scss';
var version = '1.0.0';


Package.describe({
    name: packageName,
    version: version,
    /*   summary: 'Ionic Framework official Meteor package',
       git: 'git@github.com:driftyco/ionic.git'*/
    summary: 'Ionic Framework Meteor package with scss',
    git: ''
});

Package.onUse(function(api) {
    //api.versionsFrom(['METEOR@0.9.0', 'METEOR@1.0']);
    api.versionsFrom(['1.2']);

    // scss preproccesor
    //api.use('fourseven:scss@3.3.3', where);
    api.use("fourseven:scss@3.4.0-beta1", ["client"]);
    api.imply("fourseven:scss", ["client"]);

    api.use('angular:angular@1.4.3', where);
    api.use('angular:angular-animate@1.4.3', where);
    api.use('angular:angular-sanitize@1.4.3', where);
    api.use('angularui:angular-ui-router@0.2.13_3', where);

    // In case the Meteor project has the `fastclick` package,
    // Load it first and cancel it (to use Ionic's one)
    api.use('urigo:cancel-fastclick@0.0.2', where);

    var files = [
        // default css commented out on purpose
        //'release/css/ionic.css',

        // scss
        'scss/_mixins.scss',
        'scss/_variables.scss',
        'scss/_reset.scss',
        'scss/_scaffolding.scss',
        'scss/_type.scss',
        'scss/_action-sheet.scss',
        'scss/_backdrop.scss',
        'scss/_bar.scss',
        'scss/_tabs.scss',
        'scss/_menu.scss',
        'scss/_modal.scss',
        'scss/_popover.scss',
        'scss/_popup.scss',
        'scss/_loading.scss',
        'scss/_items.scss',
        'scss/_list.scss',
        'scss/_badge.scss',
        'scss/_slide-box.scss',
        'scss/_slides.scss',
        'scss/_refresher.scss',
        'scss/_spinner.scss',
        'scss/_form.scss',
        'scss/_checkbox.scss',
        'scss/_toggle.scss',
        'scss/_radio.scss',
        'scss/_range.scss',
        'scss/_select.scss',
        'scss/_progress.scss',
        'scss/_button.scss',
        'scss/_button-bar.scss',
        'scss/_grid.scss',
        'scss/_util.scss',
        'scss/_platform.scss',
        'scss/_animations.scss',
        'scss/_transitions.scss',
        'scss/ionic.scss',
        'scss/ionicons/ionicons.scss',
        'scss/ionicons/_ionicons-font.scss',
        'scss/ionicons/_ionicons-icons.scss',
        'scss/ionicons/_ionicons-variables.scss',

        // fonts
        /*'release/fonts/ionicons.eot',
        'release/fonts/ionicons.svg',
        'release/fonts/ionicons.ttf',
        'release/fonts/ionicons.woff',*/


        // scripts
        'release/js/ionic.js',
        'release/js/ionic-angular.js'
    ];
    api.addFiles(files, where, {
        isImport: true
    });
    // fonts
    var assets = ['release/fonts/ionicons.eot',
        'release/fonts/ionicons.svg',
        'release/fonts/ionicons.ttf',
        'release/fonts/ionicons.woff'
    ];
    /* api.addAssets(assets, 'client');*/
    function addAssets(api, assets) {
        if (api.addAssets) {
            api.addAssets(assets, 'client');
        } else {
            api.addFiles(assets, 'client', {
                isAsset: true
            });
        }
    }

});
