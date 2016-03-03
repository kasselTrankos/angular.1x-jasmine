var AppController = function($scope){
  var vm  = this;
  vm.isCalled = false;
  vm.friends = [
    {name:'John', age:25, gender:'boy'},
    {name:'Jessie', age:30, gender:'girl'},
    {name:'Johanna', age:28, gender:'girl'},
    {name:'Joy', age:15, gender:'girl'},
    {name:'Mary', age:28, gender:'girl'},
    {name:'Peter', age:95, gender:'boy'},
    {name:'Sebastian', age:50, gender:'boy'},
    {name:'Erika', age:27, gender:'girl'},
    {name:'Patrick', age:40, gender:'boy'},
    {name:'Samantha', age:60, gender:'girl'}
  ];
  vm.init= function(){
    vm.soCaller(1);
  }
  vm.soCaller = function(value){
    var t = 140 + +value;
    return t;
  }
  vm.makeTest = function(value){
    var test = 10 + +value;
    return test;
  }
  vm.record = function(obj){
    
    if(obj.name) return obj.name;
    if(obj.year) return obj.year + +222;
    return obj;
  }
}
module.exports = AppController;
