angular
    .module('kopilka').directive('social', function() {
        return {
            template: "<div></div>",
            controller: 'MainCtrl as main',
            /*scope: {
                goal: '='
            },*/
            link: function($scope, el, iAttrs, controller) {
               // el.html(VK.Share.button('http://localhost:3000/#/tab/main', {type: 'link'}));
               /* iAttrs.$observe('image', function(data) {
                    console.log(data);
                    console.log(iAttrs.name);
                         el.html(
                         VK.Share.button({
                             url: 'http://kopilka.meteor.com',
                             title: iAttrs.name,
                             description: iAttrs.name,
                             image: 'http://kopilka.meteor.com/piggy-bank.png',
                             noparse: true
                         }));
                });*/
            }
        };
    });
