Accounts.onCreateUser(function(options, user) {
    //on user creation add profile.money attribute
    user.profile = {
        savings: Number(0)
    };
    /* console.log('userId is');
     console.log(user._id);
     console.log('inserting new document on user creation');*/
    var x = Savings.insert({
        userId: user._id,
        amount: Number(0)
    });
    /*console.log('inserted?');
    console.log(x);*/

    /* not sure what lines below do. So i left it as is */

    // We still want the default hook's 'profile' behavior.
    if (options.profile) {
        user.profile = options.profile;
    }
    return user;

});
