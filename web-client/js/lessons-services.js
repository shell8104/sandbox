angular.module('App.lessons-services', []).factory('Lesson', function($resource) {
  return $resource('http://localhost:8081/lessons/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
});
