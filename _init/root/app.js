(function () {
    'use strict';

    var dependencies = [
        'ui.router',
        'root.controllers',
    ];

    var app = angular.module('root', dependencies);

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/root/core/home/home.html',
                controller:'_home'
            })

    })
})();