(function () {
    'use strict';

    var dependencies = [
        'ui.router',
        'root.controllers',
        'ngAnimate'
    ];

    var app = angular.module('root', dependencies);

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/err');
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: '/root/core/home/home.html',
                controller: '_home'
            })
            .state('login', {
                url: '/login',
                templateUrl: '/root/core/login/login.html',
                controller: '_login'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: '/root/core/contactUs/contact.html'
            })

    })
})();