angular.module('slautomations', ['route'])
.controller('mainCtrl', function ($scope, $location) {
    $scope.active = 0;
    $scope.productIndex = 0;
    $scope.showMenu = false;
    $scope.services = [{
        name : 'SMART HOME SOLUTION',
        icon : 'fa-home',
        background : 'smarthome1',
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
        background : 'security',
        sub : [
            'INTERCOM',
            'SECURITY LOCKS',
            'CCTV/IP CAMERAS',
            'ACCESS CONTROL SYSTEM',
            'DOOR OPEN/CLOSE STATUS',
            'WINDOW OPEN/CLOSE STATUS',
            'MAIN GATE OPEN/CLOSE STATUS'
        ]
    },{
        name : 'COMMON AREA LIGHTING CONTROL',
        icon : 'fa-lightbulb-o',
        background : 'lighting',
        sub : [
            'STREET LIGHTING CONTROL',
            'MALL COMMON AREA LIGHTING',
            'SHOWROOM LIGHTING CONTROL',
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
        background : 'alarm',
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
        background : 'building',
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