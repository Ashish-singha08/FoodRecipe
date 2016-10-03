'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home/home.html'
    })
    .state('recipes', {
      url: '/recipes',
      templateUrl: '/recipes/recipes.html',
      controller: 'RecipesCtrl',
      abstract: true
    })
    .state('recipes.recipesList', {
      url: '/',
      templateUrl: '/recipesList/recipesList.html',
      controller: 'recipesListCtrl'
    })
    .state('recipesParent.recipeDetails', {
      url: '/:id',
      templateUrl: 'app/components/recipeDetails/recipeDetailsView.html',
      controller: 'RecipeDetailsController',
      controllerAs: 'recipesDetCtrl'
    })
    .state('otherwise', {
      url: '/home'
    });
});
app.service('recipes', function Recipes($http) {
  var recipes = this;

  $http.get('/recipesList/recipesListData.json').then(function(response){
    recipes.list = response.data;
  });
});
