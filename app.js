var mainApp = angular.module('app', ['ngRoute']);

mainApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
$locationProvider.html5Mode(false);

$routeProvider
.when('/home', {
templateUrl: 'home.html'
})
.when('/about', {
templateUrl: 'about.html'
})
.when('/portfolio', {
templateUrl: 'portfolio.html'
})
.otherwise({
redirectTo: '/home'
})
}]);

mainApp.controller('MainCtrl', ['$scope', '$http', '$location', function($scope, $http, $location){

$scope.home = function(){
$location.path('/home')
}

$scope.about = function(){
$location.path('/about')
}

$scope.portfolio = function(){
$location.path('/portfolio')
}

$scope.showSocial = false
$scope.tooglePhoneIcon = true
$scope.toogleSocial = function(){
$scope.showSocial = !$scope.showSocial
$scope.tooglePhoneIcon = false
}
$scope.hideSocial = function(){
$scope.showSocial = false
$scope.tooglePhoneIcon = true
}

$scope.goTo = function(){
window.location.href = 'https://youtu.be/BvGU2Vc7ifw?si=j9Tr5yFhtwixQYUA'
}

}]);