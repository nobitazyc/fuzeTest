angular.module('myApp')
  .component('myComponent',{
    template: require('./myComponent.partial.html'),
    controller: 'myComponentController',
    bindings: {}
  })
  .controller('myComponentController',myComponentController)

function myComponentController(){
  var ctrl = this;
  ctrl.$onInit = $onInit;

  function $onInit(){
    ctrl.test = 'test';
  }
}
