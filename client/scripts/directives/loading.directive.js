angular
    .module('kopilka')
    .directive('loading', function() {
        return {
            link: function($scope, el, iAttrs, controller) {
                iAttrs.$observe('loading', function(data) {
                    var loading = iAttrs.loading;
                    /*var spinner = angular.element('<div class="spinner">' +
                        '<div class="bounce1"></div>' +
                        '<div class="bounce2"></div>' +
                        '<div class="bounce3"></div>' +
                        '</div>');*/
                    var spinner = angular.element('<div class="sk-cube-grid">' +
                        '<div class="sk-cube sk-cube1"></div>' +
                        '<div class="sk-cube sk-cube2"></div>' +
                        '<div class="sk-cube sk-cube3"></div>' +
                        '<div class="sk-cube sk-cube4"></div>' +
                        '<div class="sk-cube sk-cube5"></div>' +
                        '<div class="sk-cube sk-cube6"></div>' +
                        '<div class="sk-cube sk-cube7"></div>' +
                        '<div class="sk-cube sk-cube8"></div>' +
                        '<div class="sk-cube sk-cube9"></div>' +
                        '</div>');
                    if (loading === 'true') {
                        el.hide().after(spinner);
                    } else {
                        //angular.element(document.querySelector('.spinner')).remove();
                        angular.element(document.querySelector('.sk-cube-grid')).remove();
                        el.show();
                    }
                }, true);
            }
        };
    });
