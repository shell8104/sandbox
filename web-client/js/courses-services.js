angular.module('App.courses-services', []).factory('Course', function($resource) {
  return $resource('http://localhost:8081/languages/:languageId/courses/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
});
