
app.controller('recipesListCtrl', ['recipes','$scope', function(recipes, $scope){
  var recipesList = this;
  console.log(recipes);
  $scope.recipesList = recipes;
}]);
