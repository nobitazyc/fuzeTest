angular.module('myApp')
  .service('questionnaireService',questionnaireService)

function questionnaireService($q,$http){
  var service = {
    getQuesitons: getQuesitons
  }
  function getQuesitons(){
    return $http.get('./questions.json')
  }
  return service;
}