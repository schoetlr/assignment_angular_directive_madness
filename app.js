var DirectiveMadness = angular.module('DirectiveMadness', [])


DirectiveMadness.directive('mainNav', function(){

  return {
    templateUrl: "mainnav.html",
    restrict: "E",
    scope: {}
  }
});


DirectiveMadness.directive("mainHeader", function(){

  return {
    templateUrl: "mainheader.html",
    restrict: "E",
    transclude: true,
    scope: {}
  }
});


DirectiveMadness.directive("copyright", function(){

  return {
    template: "<p style='text-align: center'><ng-transclude></ng-transclude></p>",
    restrict: "E",
    transclude: true,
    link: function(scope, element, attrs){
      element.text("Copyrighted Company 2016");
      //this is taking away the text-align center css
      //and the following isn't fixing it either
      element.css("text-align", "center");
    }
  }
});


DirectiveMadness.directive("colorize", function(){

  return {
    restrict: "A",
    scope: {
      color: "@",
      background: "@"
    },
    link: function(scope, element, attributes){
      element.css("color", attributes.color);
      element.css("background-color", attributes.background);
    }
  }
})