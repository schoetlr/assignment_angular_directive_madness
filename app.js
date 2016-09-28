var DirectiveMadness = angular.module('DirectiveMadness', [])


DirectiveMadness.controller("ScopesCtrl", ['$scope', '$window', function($scope, $window){
   $scope.twoWay = "CAT IN A HAT and TWO WAY";
   $scope.oneWay = "I AM ONE WAY";

   $scope.sayHello = function(name){

    $window.alert("hello..." + name);
   }
}]);


DirectiveMadness.directive('isolated', function(){
  return {
    templateUrl: "isolated.html",
    restrict: "E",
    scope: {
      twoWay: "=",
      oneWay: "@",
      sayHello: "&"
    },

    link: function(scope){
      scope.twoWay = "altered twoWay";
      scope.oneWay = "altered oneWay";

      var hello = scope.sayHello;
          }
  }
});
// DirectiveMadness.controller('QuotesCtrl', ['$scope', function($scope){
//   $scope.quotes = [];
//   $scope.author = "";
//   $scope.message = "";

//   $scope.createQuote = function(){
    
//     //console.log($scope.author);
//     var quote = {};
//     quote.author = $scope.author;
//     quote.message = $scope.message;

//     $scope.quotes.push(quote);

//     $scope.author = "";
//     $scope.message = "";

//     console.log($scope.quotes);
//   };
// }]);


// DirectiveMadness.directive("quoteForm", function(){

//   return {
//     scope: true,
//     restrict: "E",
//     templateUrl: "quoteform.html"

//   }
// });


// DirectiveMadness.directive("quotesIndex", function(){

//   return {
//     scope: true,
//     restrict: "E",
//     templateUrl: "quotesindex.html"
//   }
// })





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