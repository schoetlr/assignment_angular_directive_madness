var DirectiveMadness = angular.module('DirectiveMadness', [])


DirectiveMadness.directive('mainNav', function(){

  return {
    templateUrl: "mainnav.html",
    restrict: "E",
    scope: {}
  }
});