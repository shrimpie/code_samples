angular.module('helloWorldApp', [
    'ngRoute'
])
.config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html', // so angular knows to find this file in the template directory, right?
                controller: 'HomeCtrl'
            });
    }
]);