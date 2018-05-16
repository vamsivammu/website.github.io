var x=angular.module("formvalidate",["ngRoute"])


x.config(function($routeProvider){


$routeProvider
.when('/success',{

	templateUrl : 'successmsg.html',
	controller : 'success'	

})
.when('/',{

	templateUrl:'formvalidation.html',
	controller : 'formcontroller'

})



})

x.controller('formcontroller',function($scope,$location,$window){

$scope.eventpattern=/^(Event )[1234]$/;
$scope.mobilenumber=/^[0-9]{10,12}$/;
$scope.fullname=/^[a-zA-Z ]{1,}$/;
$scope.dateofbirth=/^(0[1-9]|[12][0-9]|3[01])[-](0[1-9]|1[012])[-](19|20)[0-9][0-9]$/;
$scope.electronicmail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/


$scope.submit=function(x){
$scope.buttonpressed=true;

if(x){

$scope.finalerror=false;

$scope.correct=true;

$window.location.href='#!success'
}
else{


$scope.finalerror=true;

$scope.correct=false;

}


}

})



x.controller('success',function($scope){


 $scope.msg="Form Submitted Successfully"


 })

