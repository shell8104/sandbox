angular.module('App.lessons-controllers', []).controller('LessonListController', function($scope, $state, popupService, $window, Lesson) {
  $scope.lessons = Lesson.query(); //fetch all lessons. Issues a GET to /lessons

  $scope.deleteLesson = function(lesson) { // Delete a lesson. Issues a DELETE to /lessons/:id
    if (popupService.showPopup('Really delete this?')) {
      Lesson.delete({ id: lesson.id }, function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}).controller('LessonViewController', function($scope, $stateParams, Lesson) {
  $scope.lesson = Lesson.get({ id: $stateParams.id }); //Get a single lesson. Issues a GET to /lessons/:id
}).controller('LessonCreateController', function($scope, $state, $stateParams, Lesson) {
  $scope.lesson = new Lesson();  //create new lesson instance. Properties will be set via ng-model on UI

  $scope.addLesson = function() { //create a new lesson. Issues a POST to /lessons
    Lesson.save({ id: '' }, $scope.lesson, function() {
      $state.go('lessons'); // on success go back to home i.e. lessons state.
    });
  };
}).controller('LessonEditController', function($scope, $state, $stateParams, Lesson) {
  $scope.updateLesson = function() { //Update the edited lesson. Issues a PUT to /lessons/:id
    Lesson.update({ id: $scope.lesson.id }, $scope.lesson, function() {
      $state.go('lessons'); // on success go back to home i.e. lessons state.
    });
  };

  $scope.loadLesson = function() { //Issues a GET request to /lessons/:id to get a lesson to update
    $scope.lesson = Lesson.get({ id: $stateParams.id });
  };

  $scope.loadLesson(); // Load a lesson which can be edited on UI
});
