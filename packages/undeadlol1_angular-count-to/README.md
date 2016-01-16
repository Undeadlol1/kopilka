This is a fork of poetic:materialize-scss.
Only thing i did is removed materialize js files.
Why to use it? If you use angular-meteor the javascript files of poetic:materialize-scss do not act properly even when using custom directives to make them work. You might need 
undeadlol1:materialize-scss-no-js + charcolios:angular-materialize combo to make
 materialize javascript work properly.


# CHANGE LOG

- 2015-10-01 update package for METEOR@1.2 (*Breaking*)
  - fourseven:scss is updated to 3.3.3_1
  - scss.json is not used anymore.
  - index.scss is not autoupdated anymore, you need to manullay update index.scss.

- 2015-06-26 upgrade to [0.97.0](https://github.com/Dogfalo/materialize/tree/v0.97.0#changelog)
  -  Icon Change (*Breaking*):

    ```<i class="mdi-content-add"></i>``` is still supported.

    However you should use ```<i class="material-icons">add</i>``` instead as
    metioned in the materialize [doc](http://materializecss.com/icons.html).

# INSTALL
```
$ meteor add fourseven:scss
$ meteor add undeadlol1:materialize-scss-no-js
$ meteor remove materialize:materialize # if you have materialize installed
```

# SASS
Add the following line to your last-loaded scss file (E.G. main.scss):
```
// If you want to override materialize sass variables you can uncomment the following:
@import "{undeadlol1:materialize-scss-no-js}/bower_components/materialize/sass/components/_color.scss";
//$primary-color: color("blue", "lighten-2");

// import main scss file
@import "{undeadlol1:materialize-scss-no-js}/bower_components/materialize/sass/materialize.scss";
```

# ICONS
Icons are automatically imported from this package.

You do NOT have to add an additional head element mentioned at http://materializecss.com/icons.html.

Read more about the MaterialIcons at https://google.github.io/material-design-icons/

# JAVASCRIPT
Javascript is automatically imported from this package.

# VERSIONS
- 1.1.x -> materialize version: 0.96.x
- 1.2.x -> materialize version: 0.97.x
- 1.3.x -> materialize version: 0.97.x, meteor version: 1.2.x
