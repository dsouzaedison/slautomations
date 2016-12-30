angular.module('slautomations', [])
.controller('mainCtrl', function ($scope) {
    $scope.active = 0;
    $scope.services = [{
        name : 'SMART HOME SOLUTION',
        icon : 'fa-home'
    },{
        name : 'SECURITY SYSTEMS',
        icon : 'fa-lock'
    },{
        name : 'COMMON AREA LIGHTING CONTROL',
        icon : 'fa-lightbulb-o'
    },{
        name : 'ALARM AND MONITORING',
        icon : 'fa-bell'
    },{
        name : 'BUILDING MANAGEMENT SYSTEM',
        icon : 'fa-building'
    }];

    $scope.formNotValid = function () {
        if($scope.myForm.name.$valid && $scope.myForm.email.$valid && $scope.myForm.subject.$valid && $scope.myForm.message.$valid)
            return false;
        else return true;
    };
});