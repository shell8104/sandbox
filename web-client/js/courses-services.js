angular.module('App.courses-services', []).factory('Course', function($resource) {
  return $resource('http://localhost:8081/courses/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
});
