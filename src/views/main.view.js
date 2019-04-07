import partialTemp from './main.view.partial.html';
angular.module('myApp')
  .config(function($routeProvider){
    $routeProvider.when("/",{
      template: partialTemp,
      controller: mainViewController
    })
  })
  .constant('QUESTIONNAIRE_MODE',{
    READ: 0,
    WRITE: 1
  })
  .controller('mainViewController',mainViewController)

function mainViewController($scope, questionnaireService, QUESTIONNAIRE_MODE){
  $scope.selectedQuestionIndex = 0;
  $scope.mode = QUESTIONNAIRE_MODE.READ;
  $scope.addQuestion = addQuestion;
  $scope.editQuestions = editQuestions;
  $scope.deleteQuestion = deleteQuestion;
  $scope.nextQuestion = nextQuestion;
  $scope.prevQuestion = prevQuestion;
  $scope.changeQuestionIndex = changeQuestionIndex;
  $scope.saveChanges = saveChanges;
  $scope.cancelChanges = cancelChanges;
  $scope.QUESTIONNAIRE_MODE = QUESTIONNAIRE_MODE;

  questionnaireService.getQuesitons().then(function(data){
    $scope.questions = data.data;
  })

  function saveChanges(){
    $scope.selectedQuestionIndex = 0;
    $scope.mode = QUESTIONNAIRE_MODE.READ;
    _.each($scope.questions,function(question){
      question.selectedOption = undefined;
    })
  }
  function addQuestion(){
    $scope.questions.push({
      title:'',
      options:[]
    })
  }
  function editQuestions(){
    $scope.originalQuestions = angular.copy($scope.questions);
    $scope.mode = QUESTIONNAIRE_MODE.WRITE;
  }
  function nextQuestion(){
    if($scope.selectedQuestionIndex<$scope.questions.length-1){
      $scope.selectedQuestionIndex++;
    }
  }
  function prevQuestion(){
    if($scope.selectedQuestionIndex>0){
      $scope.selectedQuestionIndex--;
    }
  }
  function changeQuestionIndex(index){
    $scope.selectedQuestionIndex = index;
  }
  function deleteQuestion(question,index){
    $scope.questions.splice(index,1);
    $scope.selectedQuestionIndex = 0;
  }
  function cancelChanges(){
    $scope.mode = QUESTIONNAIRE_MODE.READ;
    $scope.questions = angular.copy($scope.originalQuestions);
    $scope.selectedQuestionIndex = 0;
  }

}