angular.module('slautomations', [])
.controller('mainCtrl', function ($scope) {
    $scope.active = 0;
    $scope.services = [{
        name : 'SMART HOME SOLUTION'
    },{
        name : 'SECURITY SYSTEMS'
    },{
        name : 'COMMON AREA LIGHTING CONTROL'
    },{
        name : 'ALARM AND MONITORING'
    },{
        name : 'BUILDING MANAGEMENT SYSTEM'
    }];

    $scope.formNotValid = function () {
        if($scope.myForm.name.$valid && $scope.myForm.email.$valid && $scope.myForm.subject.$valid && $scope.myForm.message.$valid)
            return false;
        else return true;
    };
});