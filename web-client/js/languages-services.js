angular.module('App.languages-services', []).factory('Language', function($resource) {
  return $resource('http://localhost:8081/languages/:id', {}, {
    update: {
      method: 'PUT'
    }
  });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
