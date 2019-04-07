import partialTemp from './questionnaire.component.partial.html';
angular.module('myApp')
  .component('questionnaire',{
    template: partialTemp,
    controller: questionnaireController,
    bindings: {
      index: '=',
      question: '=',
      mode: '<',
      deleteQuestion: '&',
      prevQuestion: '&',
      nextQuestion: '&'
    }
  })
  .controller('questionnaireController',questionnaireController)

function questionnaireController($filter,QUESTIONNAIRE_MODE){
  var ctrl = this;
  ctrl.QUESTIONNAIRE_MODE = QUESTIONNAIRE_MODE;
  ctrl.$onInit = $onInit;
  ctrl.addNewOption = addNewOption;
  ctrl.deleteOption = deleteOption;

  function $onInit(){
  }
  function addNewOption(){
    ctrl.question.options.push({title:''})
  }
  function deleteOption(index){
    ctrl.question.options.splice(index,1);
  }
}