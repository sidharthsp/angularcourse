(function () {

  angular.module("public")
  .controller('infocontroller',infocontroller);

infocontroller.$inject=['signUpService'];
  function infocontroller(signUpService) {

    this.user = signUpService.db;
    this.status = signUpService.status;
  }

})();
