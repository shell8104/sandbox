angular.module('App.courses-controllers', []).controller('CourseListController', function($scope, $state, popupService, $window, Course) {
  $scope.courses = Course.query(); //fetch all courses. Issues a GET to /courses

  $scope.deleteCourse = function(course) { // Delete a course. Issues a DELETE to /courses/:id
    if (popupService.showPopup('Really delete this?')) {
      Course.delete({ id: course.id }, function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}).controller('CourseViewController', function($scope, $stateParams, Course) {
  $scope.course = Course.get({ id: $stateParams.id }); //Get a single course. Issues a GET to /courses/:id
}).controller('CourseCreateController', function($scope, $state, $stateParams, Course) {
  $scope.course = new Course();  //create new course instance. Properties will be set via ng-model on UI

  $scope.addCourse = function() { //create a new course. Issues a POST to /courses
    Course.save({ id: '' }, $scope.course, function() {
      $state.go('courses'); // on success go back to home i.e. courses state.
    });
  };
}).controller('CourseEditController', function($scope, $state, $stateParams, Course) {
  $scope.updateCourse = function() { //Update the edited course. Issues a PUT to /courses/:id
    Course.update({ id: $scope.course.id }, $scope.course, function() {
      $state.go('courses'); // on success go back to home i.e. courses state.
    });
  };

  $scope.loadCourse = function() { //Issues a GET request to /courses/:id to get a course to update
    $scope.course = Course.get({ id: $stateParams.id });
  };

  $scope.loadCourse(); // Load a course which can be edited on UI
});
