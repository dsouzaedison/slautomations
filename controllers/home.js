/**
 * Created by dsouz on 31-12-2016.
 */
angular.module('slautomations')
    .controller('homeCtrl', function ($scope, $http, $window) {
        $window.scrollTo(0, 0);

        $scope.displayImages = [];
        $scope.displayIndex = 0;
        $scope.imagePath = '';

        $scope.setDisplayImages = function (path, property) {
            $scope.displayIndex = 0;
            $scope.displayImages = $scope.galleryImages[property];
            $scope.imagePath = path;
        };

        $scope.nextImage = function () {
            if($scope.displayIndex < $scope.displayImages.length-1) {
                $scope.displayIndex++;
            }
        };

        $scope.previousImage = function () {
            if($scope.displayIndex > 0) {
                $scope.displayIndex--;
            }
        };

        $scope.formNotValid = function () {
            if ($scope.myForm.name.$valid && $scope.myForm.email.$valid && $scope.myForm.subject.$valid && $scope.myForm.message.$valid)
                return false;
            else return true;
        };

        $scope.products = ['havells.png', 'cabtree.gif', 'hikvision.png', 'YaleLogo.jpg', '1024px-Somfy_logo.svg.png', 'tannoy.jpg',
            'TAGA HARMONY Z R.jpg', 'denon.jpg', 'marantz.jpg', 'Hegel.jpg', 'JBL.png', 'BenQ.svg.png', 'VIVITEK.png'];

        $scope.gallery = [
            {name: 'Smart switches', path: 'images/gallery/smart_switches/', property: 'smartSwitches'},
            {name: 'Sensors', path: 'images/gallery/sensors/', property: 'sensors'},
            {name: 'Smart locks', path: 'images/gallery/smart_locks/', property: 'smartLocks'},
            {name: 'Video door phones', path: 'images/gallery/video_intercom_door_phone/', property: 'videoDoorPhones'},
            {name: 'Home theater and audio solutions', path: 'images/gallery/home_theater/', property: 'homeTheater'},
            {name: 'Projectors', path: 'images/gallery/projectors/', property: 'projectors'},
            {name: 'CCTV Surveillance', path: 'images/gallery/cctv/', property: 'cctv'}
        ];

        $scope.galleryImages = {
            smartSwitches: ['enviropanel.jpg', 'dlp_touch.jpg', 'dlp_button.jpg', 'i_touch.jpg', 'i_sense.jpg', 'i_flex.jpg', 'i_alluminium.jpg', 'cat-image-sw.jpg', 'music_box.jpg'],
            sensors: ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg'],
            smartLocks: ['one.jpg', 'two.jpg', 'three.jpg', 'four.jpg', 'five.jpg', 'six.jpg', 'seven.jpg', 'eight.jpg'],
            videoDoorPhones: ['one.jpg', 'two.jpg'],
            homeTheater: ['sound1.jpg', 'sound2.jpg', 'sound3.jpg', 'sound4.jpg', 'sound5.jpg', 'sound6.jpg'],
            projectors: ['one.jpg', 'two.jpg', 'three.jpeg', 'four.jpg', 'five.jpg', 'six.jpg'],
            cctv: ['bullet1.jpg', 'bullet2.jpg', 'dome1.jpg', 'dome2.jpg', 'fisheye.jpg', 'hikvision.jpg', 'ptz.jpg', 'ptz2.jpg', 'ptz3.jpg']
        };

        $scope.submitForm = function () {
            console.log('Control Recieved');
            $http({
                method: 'POST',
                url: 'contactussubmit.php',
                data: {
                    name: $scope.name,
                    email: $scope.email,
                    subject: $scope.subject,
                    message: $scope.message
                }
            }).then(function () {
                window.location.href = 'http://www.slautomations.com';
            }, function () {
                // alert('Sorry! Something went wrong. You can reach us at : 08258 - 239424');
            });
        };
    });
