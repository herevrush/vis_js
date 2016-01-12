'use strict';

angular.module('myApp.syd_travel', ['ngRoute','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/syd_travel', {
    templateUrl: 'syd_travel/syd_travel.html',
    controller: 'mapController'
  });
}])

.controller('mapController', ['$scope','$http',function(scope,http) {
        //alert("i am here");
        //scope.firstName = 'John';
        //scope.names = ['Larry', 'Curly', 'Moe'];
        var myLatlng = new google.maps.LatLng(-33.914437, 151.241641);
        var mapOptions = {
            zoom: 10,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        scope.map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        //http.get()
        scope.countries = [
            {"name": "China", "population": 1359821000},
            {"name": "India", "population": 1205625000},
            {"name": "United States of America","population": 312247000}
        ];
        //scope.lastName = 'Smith';
        //$scope.$apply();
        //scope.watch("lastName",function(newValue, oldValue){
        //    console.log('new value is ' + newValue);
        //});
        //setTimeout(function(){
        //    scope.lastName = 'Smith';
        //    scope.$apply();
        //}, 1000);
        //
        //scope.addName = function(){
        //    scope.names.push(scope.enteredName);
        //    //scope.enteredName ='';
        //};

        //scope.removeName = function(name){
        //    var i = scope.names.indexOf(name);
        //    scope.names.splice(i,1);
        //}


}]);