(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

$stateProvider
.state('home',{

            url:'/',
            templateUrl:"src/templates/home.html",


                })

.state('categories',{

            url:'/categories',
            templateUrl:"src/templates/cat.html",
            controller:"categoriesComponentController as ctrl1",
            resolve : {
               list :['MenuDataService',function (MenuDataService) {return MenuDataService.getAllCategories();}]
                       }


                })

.state('items',{

            url:'/item-detail/{category}',
            templateUrl:"src/templates/items.html",
            controller:'itemsComponentController as  ctrl2',
            resolve: {
              item : ['$stateParams','MenuDataService', function ($stateParams,MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.category);




              }],
            }


                })
}


})();
