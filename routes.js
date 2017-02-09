(function() {
    'use strict';

    angular.module('divineIntervention').config(function($urlRouterProvider, $stateProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('dashboard', {
                url: '/',
                controller: 'DashboardCtrl',
                templateUrl: 'views/dashboard.html'
            })
            .state('rules', {
                url: '/rules',
                controller: 'DashboardCtrl',
                templateUrl: 'views/rules.html'
            })
            // .state('cultures', {
            //     url: '/cultures',
            //     controller: 'DashboardCtrl',
            //     templateUrl: 'views/cultures.html'
            // })
            .state('events', {
                url: '/events',
                controller: 'DashboardCtrl',
                templateUrl: 'views/events.html'
            })
    });
})();
