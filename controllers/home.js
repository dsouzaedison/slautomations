/**
 * Created by dsouz on 31-12-2016.
 */
angular.module('slautomations')
    .controller('homeCtrl', function ($scope) {
        $scope.formNotValid = function () {
            if($scope.myForm.name.$valid && $scope.myForm.email.$valid && $scope.myForm.subject.$valid && $scope.myForm.message.$valid)
                return false;
            else return true;
        };
    });
