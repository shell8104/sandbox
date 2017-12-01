angular.module('App', ['ui.router', 'ngResource', 'base64', 'App.languages-controllers', 'App.languages-services', 'App.courses-controllers', 'App.courses-services', 'App.lessons-controllers', 'App.lessons-services']);

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
    params: {
        languageId: ""
    },
    templateUrl: 'partials/courses.html',
    controller: 'CourseListController'
  }).state('viewCourse', { //state for showing single course
    url: '/courses/:id/view',
    params: {
        id: "",
        languageId: ""
    },
    templateUrl: 'partials/course-view.html',
    controller: 'CourseViewController'
  }).state('newCourse', { //state for adding a new course
    url: '/courses/new',
    params: {
        languageId: ""
    },
    templateUrl: 'partials/course-add.html',
    controller: 'CourseCreateController'
  }).state('editCourse', { //state for updating a course
    url: '/courses/:id/edit',
    params: {
        id: "",
        languageId: ""
    },
    templateUrl: 'partials/course-edit.html',
    controller: 'CourseEditController'
  });
})

.config(function($stateProvider) {
  $stateProvider.state('lessons', { // state for showing all lessons
    url: '/lessons',
    templateUrl: 'partials/lessons.html',
    controller: 'LessonListController'
  }).state('viewLesson', { //state for showing single lesson
    url: '/lessons/:id/view',
    templateUrl: 'partials/lesson-view.html',
    controller: 'LessonViewController'
  }).state('newLesson', { //state for adding a new lesson
    url: '/lessons/new',
    templateUrl: 'partials/lesson-add.html',
    controller: 'LessonCreateController'
  }).state('editLesson', { //state for updating a lesson
    url: '/lessons/:id/edit',
    templateUrl: 'partials/lesson-edit.html',
    controller: 'LessonEditController'
  });
})

.run(function($state) {
  $state.go('languages'); //make a transition to languages state when app starts
});
