(function(){

angular.module('public')
.controller('FormController' , FormController);



FormController.$inject=['signUpService'];
function FormController(signUpService){

var formCtrl = this;


formCtrl.msg="";

formCtrl.signup = function(){
signUpService.db = {};
var promise = signUpService.signup(formCtrl.user.choice);

promise.then(function (result) {
  formCtrl.user.val = result.data;
  console.log(formCtrl.user.val);
console.log(formCtrl.user);

signUpService.db = formCtrl.user;
signUpService.status = true;
formCtrl.status=true;
console.log(signUpService.db);


})
.catch(function (error) {
  signUpService.status = false;
  formCtrl.status=false;
  formCtrl.error = "No Such item exists!!"


})


};




}





  })();
