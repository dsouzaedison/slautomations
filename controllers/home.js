/**
 * Created by dsouz on 31-12-2016.
 */
angular.module('slautomations')
    .controller('homeCtrl', function ($scope, $http, $window) {
        $window.scrollTo(0,0);

        $scope.formNotValid = function () {
            if($scope.myForm.name.$valid && $scope.myForm.email.$valid && $scope.myForm.subject.$valid && $scope.myForm.message.$valid)
                return false;
            else return true;
        };

        $scope.products = ['havells.png', 'cabtree.gif', '1024px-Somfy_logo.svg.png', 'hikvision.png', 'YaleLogo.jpg'];

        $scope.submitForm = function () {
            console.log('Control Recieved');
            $http({
                method: 'POST',
                url: 'contactussubmit.php',
                data: {
                    name : $scope.name,
                    email : $scope.email,
                    subject : $scope.subject,
                    message : $scope.message
                }
            }).then(function(){
                window.location.href = 'http://www.slautomations.com';
            }, function(){
                // alert('Sorry! Something went wrong. You can reach us at : 08258 - 239424');
            });
        };
    });
