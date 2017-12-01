angular.module('App.courses-controllers', []).controller('CourseListController', function($scope, $state, $stateParams, popupService, $window, Course) {
  $scope.langId = $stateParams.languageId;

  $scope.courses = Course.query({
    languageId: $stateParams.languageId
  }); //fetch all courses. Issues a GET to /courses

  $scope.deleteCourse = function(course) { // Delete a course. Issues a DELETE to /courses/:id
    if (popupService.showPopup('Really delete this?')) {
      Course.delete({
        languageId: $stateParams.languageId,
        id: course.id
      }, function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}).controller('CourseViewController', function($scope, $stateParams, Course) {
  $scope.langId = $stateParams.languageId;
  $scope.course = Course.get({
    languageId: $stateParams.languageId,
    id: $stateParams.id
  }); //Get a single course. Issues a GET to /courses/:id
}).controller('CourseCreateController', function($scope, $state, $stateParams, Course) {
  $scope.langId = $stateParams.languageId;
  $scope.course = new Course(); //create new course instance. Properties will be set via ng-model on UI
  $scope.addCourse = function() { //create a new course. Issues a POST to /courses
    Course.save({
      languageId: $stateParams.languageId,
      id: ''
    }, $scope.course, function() {
      $state.go('courses', {languageId: $stateParams.languageId}); // on success go back to home i.e. courses state.
    });
  };
}).controller('CourseEditController', function($scope, $state, $stateParams, Course) {
  $scope.langId = $stateParams.languageId;
  $scope.updateCourse = function() { //Update the edited course. Issues a PUT to /courses/:id
    Course.update({
      languageId: $stateParams.languageId,
      id: $scope.course.id
    }, $scope.course, function() {
      $state.go('courses', {languageId: $stateParams.languageId}); // on success go back to home i.e. courses state.
    });
  };

  $scope.loadCourse = function() { //Issues a GET request to /courses/:id to get a course to update
    $scope.course = Course.get({
      languageId: $stateParams.languageId,
      id: $stateParams.id
    });
  };

  $scope.loadCourse(); // Load a course which can be edited on UI
});
