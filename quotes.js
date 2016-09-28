var Quotes = angular.module('Quotes', [])




Quotes.controller('QuotesCtrl', ['$scope', function($scope){
  $scope.quotes = [];
  $scope.author = "";
  $scope.message = "";

  $scope.createQuote = function(){
    
    //console.log($scope.author);
    var quote = {};
    quote.author = $scope.author;
    quote.message = $scope.message;

    $scope.quotes.push(quote);

    

    $scope.author = "";
    $scope.message = "";
    
    console.log($scope.quotes);
    foo = $scope.quotes
  };

  $scope.deleteQuote = function(index){
    $scope.quotes.splice(index, 1);
  }
}]);


Quotes.directive("quoteForm", function(){

  return {
    scope: false,
    restrict: "E",
    templateUrl: "quoteform.html"

  }
});


Quotes.directive("quotesIndex", function(){

  return {
    scope: false,
    restrict: "E",
    templateUrl: "quotesindex.html"
  }
})
