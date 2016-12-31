angular.module('slautomations', ['route'])
.controller('mainCtrl', function ($scope, $location) {
    $scope.active = 0;
    $scope.productIndex = 0;
    $scope.services = [{
        name : 'SMART HOME SOLUTION',
        icon : 'fa-home',
        sub : [
            'LIGHTING CONTROL',
            'DIMMING CONTROL',
            'CURTAIN CONTROL',
            'AIR CONDITIONING CONTROL',
            'ZONE MUSIC SYSTEM',
            'LANDSCAPE LIGHTING',
            'WATER HEATER ON/OFF CONTROL',
            'GEYSER/FRIDGE ON/OFF CONTROL',
            'ELECTRICAL APPLIANCES CONTROL',
            'PUMPS CONTROL & SPRINKLER SYSTEM'
        ]
    },{
        name : 'SECURITY SYSTEMS',
        icon : 'fa-lock',
        sub : [
            'DOOR OPEN/CLOSE STATUS',
            'WINDOW OPEN/CLOSE STATUS',
            'MAIN GATE OPEN/CLOSE STATUS',
            'CCTV/IP CAMERAS',
            'SECURITY LOCKS',
            'INTERCOM',
            'ACCESS CONTROL SYSTEM'
        ]
    },{
        name : 'COMMON AREA LIGHTING CONTROL',
        icon : 'fa-lightbulb-o',
        sub : [
            'STREET LIGHTING CONTROL',
            'SHOWROOM LIGHTING CONTROL',
            'MALL COMMON AREA LIGHTING',
            'LUX BASED LIGHTING CONTROL',
            'LANDSCAPE LIGHTING CONTROL',
            'BUILDING COMMON AREA LIGHTING',
            'HOSPITAL COMMON AREA LIGHTING',
            'TIME SCHEDULE BASED LIGHTING CONTROL',
            'MOTION SENSOR BASED LIGHTING CONTROL',
            'COLLEGES & UNIVERSITY COMMON AREA LIGHTING'
        ]
    },{
        name : 'ALARM AND MONITORING',
        icon : 'fa-bell',
        sub : [
            'SMOKE DETECTOR',
            'LPG GAS DETECTOR',
            'WATER LEAKAGE DETECTION',
            'CO-SENSOR FOR CAR PARKING',
            'ELECTRICAL ENERGY MONITORING'
        ]
    },{
        name : 'BUILDING MANAGEMENT SYSTEM',
        icon : 'fa-building',
        sub : [
            'HVAC CONTROL',
            'SCADA GRAPHICS',
            'CAR PARK JET FANS CONTROL',
            'GAS AND WATER METERING SYSTEM',
            'BUILDING ELECTRICAL AND MECHANICAL SYSTEM MONITORING'
        ]
    }];

    $scope.routeTo = function (route, index) {
        if(!index)
            index = 0;
        $scope.productIndex = index;
        $location.path(route);
    };
});