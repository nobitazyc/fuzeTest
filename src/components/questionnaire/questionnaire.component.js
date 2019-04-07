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
    ctrl.question.options.push({title:'',order:ctrl.question.options.length})
  }
  function deleteOption(option){
    ctrl.question.options = _.reject(ctrl.question.options,{order:option.order});
    _.each(ctrl.question.options,function(option,index){
      option.order = index;
    })
  }
}