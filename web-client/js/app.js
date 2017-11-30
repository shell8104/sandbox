angular.module('App', ['ui.router', 'ngResource', 'base64', 'App.languages-controllers', 'App.languages-services', 'App.courses-controllers', 'App.courses-services']);

angular.module('App')

.config(function($httpProvider, $base64) {
  var auth = $base64.encode("user1:user1Pass");
  $httpProvider.defaults.headers.common['Authorization'] = 'Basic ' + auth;
})

.config(function($stateProvider) {
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
})

.config(function($stateProvider) {
  $stateProvider.state('courses', { // state for showing all courses
    url: '/courses',
    templateUrl: 'partials/courses.html',
    controller: 'CourseListController'
  }).state('viewCourse', { //state for showing single course
    url: '/courses/:id/view',
    templateUrl: 'partials/course-view.html',
    controller: 'CourseViewController'
  }).state('newCourse', { //state for adding a new course
    url: '/courses/new',
    templateUrl: 'partials/course-add.html',
    controller: 'CourseCreateController'
  }).state('editCourse', { //state for updating a course
    url: '/courses/:id/edit',
    templateUrl: 'partials/course-edit.html',
    controller: 'CourseEditController'
  });
})

.run(function($state) {
  $state.go('languages'); //make a transition to languages state when app starts
});
