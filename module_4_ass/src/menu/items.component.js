
(function () {

angular.module('MenuApp').
component('items',{
    templateUrl:"src/templates/items.template.html",

    bindings :{

                val: '<',
                  // action: '&',
              },



    });



})();
