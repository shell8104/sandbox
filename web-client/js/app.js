angular.module('App', ['ui.router', 'ngResource', 'App.languages-controllers', 'App.languages-services']);

angular.module('App').config(function($stateProvider) {
  $stateProvider.state('languages', { // state for showing all languages
    url: '/languages',
    templateUrl: 'partials/languages.html',
    controller: 'LanguageListController'
}).state('viewLanguage', { //state for showing single language
    url: '/languages/:id/view',
    templateUrl: 'partials/language-view.html',
    controller: 'LanguageViewController'
}).state('newLanguage', { //state for adding a new language
    url: '/languages/new',
    templateUrl: 'partials/language-add.html',
    controller: 'LanguageCreateController'
}).state('editLanguage', { //state for updating a language
    url: '/languages/:id/edit',
    templateUrl: 'partials/language-edit.html',
    controller: 'LanguageEditController'
  });
}).run(function($state) {
  $state.go('languages'); //make a transition to languages state when app starts
});
