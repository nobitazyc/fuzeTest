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

function mainViewController($scope,QUESTIONNAIRE_MODE){
  $scope.questions = [
    {
      title: 'What is your favourite programming language?',
      order: '0',
      options: [
        {title:'C++',order:0},
        {title:'Java',order:1},
        {title:'Javascript',order:2},
        {title:'Python',order:3}
      ]
    },
    {
      title: 'What is your favourite front-end library?',
      order: '1',
      options: [
        {title:'Angular',order:0},
        {title:'jQuery',order:1},
        {title:'React',order:2},
        {title:'Vue',order:3}
      ]
    }
  ];
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
      order:$scope.questions.length,
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