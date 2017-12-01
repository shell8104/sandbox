angular.module('App.lessons-controllers', []).controller('LessonListController', function($scope, $state, $stateParams, popupService, $window, Lesson) {
  $scope.langId = $stateParams.languageId;
  $scope.cId = $stateParams.courseId;
  $scope.lessons = Lesson.query({
    languageId: $stateParams.languageId,
    courseId: $stateParams.courseId
  }); //fetch all lessons. Issues a GET to /lessons

  $scope.deleteLesson = function(lesson) { // Delete a lesson. Issues a DELETE to /lessons/:id
    if (popupService.showPopup('Really delete this?')) {
      Lesson.delete({
        languageId: $stateParams.languageId,
        courseId: $stateParams.courseId,
        id: lesson.id
      }, function() {
        $window.location.href = ''; //redirect to home
      });
    }
  };
}).controller('LessonViewController', function($scope, $stateParams, Lesson) {
  $scope.langId = $stateParams.languageId;
  $scope.cId = $stateParams.courseId;
  $scope.lesson = Lesson.get({
    languageId: $stateParams.languageId,
    courseId: $stateParams.courseId,
    id: $stateParams.id
  }); //Get a single lesson. Issues a GET to /lessons/:id
}).controller('LessonCreateController', function($scope, $state, $stateParams, Lesson) {
  $scope.langId = $stateParams.languageId;
  $scope.cId = $stateParams.courseId;
  $scope.lesson = new Lesson(); //create new lesson instance. Properties will be set via ng-model on UI

  $scope.addLesson = function() { //create a new lesson. Issues a POST to /lessons
    Lesson.save({
      languageId: $stateParams.languageId,
      courseId: $stateParams.courseId,
      id: ''
    }, $scope.lesson, function() {
      $state.go('lessons', {languageId: $stateParams.languageId, courseId: $stateParams.courseId}); // on success go back to home i.e. lessons state.
    });
  };
}).controller('LessonEditController', function($scope, $state, $stateParams, Lesson) {
  $scope.langId = $stateParams.languageId;
  $scope.cId = $stateParams.courseId;
  $scope.updateLesson = function() { //Update the edited lesson. Issues a PUT to /lessons/:id
    Lesson.update({
      languageId: $stateParams.languageId,
      courseId: $stateParams.courseId,
      id: $scope.lesson.id
    }, $scope.lesson, function() {
      $state.go('lessons', {languageId: $stateParams.languageId, courseId: $stateParams.courseId}); // on success go back to home i.e. lessons state.
    });
  };

  $scope.loadLesson = function() { //Issues a GET request to /lessons/:id to get a lesson to update
    $scope.lesson = Lesson.get({
      languageId: $stateParams.languageId,
      courseId: $stateParams.courseId,
      id: $stateParams.id
    });
  };

  $scope.loadLesson(); // Load a lesson which can be edited on UI
});
