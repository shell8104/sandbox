angular.module('App.languages-controllers', []).controller('LanguageListController', function($scope, $state, popupService, $window, Language) {
  $scope.languages = Language.query(); //fetch all languages. Issues a GET to /languages

  $scope.deleteLanguage = function(language) { // Delete a language. Issues a DELETE to /languages/:id
    if (popupService.showPopup('Really delete this?')) {
      Language.delete({ id: language.id }, function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}).controller('LanguageViewController', function($scope, $stateParams, Language) {
  $scope.language = Language.get({ id: $stateParams.id }); //Get a single language. Issues a GET to /languages/:id
}).controller('LanguageCreateController', function($scope, $state, $stateParams, Language) {
  $scope.language = new Language();  //create new language instance. Properties will be set via ng-model on UI

  $scope.addLanguage = function() { //create a new language. Issues a POST to /languages
    Language.save({ id: '' }, $scope.language, function() {
      $state.go('languages'); // on success go back to home i.e. languages state.
    });
  };
}).controller('LanguageEditController', function($scope, $state, $stateParams, Language) {
  $scope.updateLanguage = function() { //Update the edited language. Issues a PUT to /languages/:id
    Language.update({ id: $scope.language.id }, $scope.language, function() {
      $state.go('languages'); // on success go back to home i.e. languages state.
    });
  };

  $scope.loadLanguage = function() { //Issues a GET request to /languages/:id to get a language to update
    $scope.language = Language.get({ id: $stateParams.id });
  };

  $scope.loadLanguage(); // Load a language which can be edited on UI
});
