angular.module('App.lessons-services', []).factory('Lesson', function($resource) {
  return $resource('http://localhost:8081/languages/:languageId/courses/:courseId/lessons/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
});
