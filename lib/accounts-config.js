// Options
AccountsTemplates.configure({
    // defaultLayout: 'emptyLayout',
    // showForgotPasswordLink: true,
    // overrideLoginErrors: true,
    // enablePasswordChange: true,

    // sendVerificationEmail: true,
    // enforceEmailVerification: true,
    confirmPassword: true,
    //continuousValidation: false,
    //displayFormLabels: true,
    //forbidClientAccountCreation: true,
    //formValidationFeedback: true,
    //homeRoutePath: '/',
    //showAddRemoveServices: false,
    //showPlaceholders: true,

    negativeValidation: true,
    positiveValidation: true,
    negativeFeedback: true,
    positiveFeedback: true,
    onLogoutHook: function() {
        window.location = "/";
    }

    // Privacy Policy and Terms of Use
    //privacyUrl: 'privacy',
    //termsUrl: 'terms-of-use',
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([{
        _id: "username",
        type: "text",
        displayName: "username",
        required: true,
        minLength: 5,
    },
    pwd
]);
