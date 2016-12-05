var weatherApp = angular.module('weatherApp', ['ngroute', 'ngResourse']);

weatherApp.config(function($routeProvider) {

  $routeProvider

    .when ('/', {
      templateUrl:'project_htm/landing.htm',
      controller :'landingController'
      })

    .when ('/', {
      templateUrl:'project_htm/landing.htm',
      controller :'resultController'
    })

});



weatherApp.controller('landingController', ['$scope', function($scope) {

}]);

weatherApp.controller('resultController', ['$scope', function($scope) {

}]);
