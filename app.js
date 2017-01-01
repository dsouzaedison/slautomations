angular.module('slautomations', ['route'])
    .controller('mainCtrl', function ($scope, $location) {
        $scope.active = 0;
        $scope.productIndex = 0;
        $scope.showMenu = false;
        $scope.services = [{
            name: 'SMART HOME SOLUTION',
            icon: 'fa-home',
            background: 'smarthome1',
            desc: 'Home Automation solution for connected smart homes and offices have found increasing popularity in recent years due to much higher affordability and convenience through SMART PHONE and TABLET connectivity. The concept of “Internet of things” has tied in closely with the increasing proliferation of home automation solutions.Smart home and building automation team has the expertise in designing and developing home automation solutions like home automation gateways.',
            sub: [
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
        }, {
            name: 'SECURITY SYSTEMS',
            icon: 'fa-lock',
            background: 'security',
            desc: 'A smart home security system connects to your home Wi-Fi network so you can monitor and control your security devices using your smartphone and an app. Entry -level systems typically include a couple of door and window sensors, a motion detector, and a hub that communicates with these devices using one or more wireless protocols such as Wi-Fi, Z-Wave, Zigbee, or a proprietary mesh network.',
            sub: [
                'INTERCOM',
                'SECURITY LOCKS',
                'CCTV/IP CAMERAS',
                'ACCESS CONTROL SYSTEM',
                'DOOR OPEN/CLOSE STATUS',
                'WINDOW OPEN/CLOSE STATUS',
                'MAIN GATE OPEN/CLOSE STATUS'
            ]
        }, {
            name: 'COMMON AREA LIGHTING CONTROL',
            icon: 'fa-lightbulb-o',
            background: 'lighting',
            desc: 'Lighting controls are sensors or devices that operate lights. These controls may be manual, time based or responds to movement, occupancy and light from other sources. Traditionally these controls are hard-wired to control individual or fixed groups of lights independently and either switch the lights off or on or dim them. Common areas are defined as all access areas of a building that are typically not sold or leased.',
            sub: [
                'SHOWROOM LIGHTING CONTROL',
                'LUX BASED LIGHTING CONTROL',
                'LANDSCAPE LIGHTING CONTROL',
                'BUILDING COMMON AREA LIGHTING',
                'HOSPITAL COMMON AREA LIGHTING',
                'TIME SCHEDULE BASED LIGHTING CONTROL',
                'MOTION SENSOR BASED LIGHTING CONTROL',
                'MALL COMMON AREA LIGHTING',
                'STREET LIGHTING CONTROL',
                'COLLEGES & UNIVERSITY COMMON AREA LIGHTING'
            ]
        }, {
            name: 'ALARM AND MONITORING',
            icon: 'fa-bell',
            background: 'alarm',
            desc: 'Alarm monitoring is quick and detailed communication between your home security system and the central station of your security provider. Your control panel registers an emergency event and sends a signal to the central monitoring station, where the appropriate authorities are notified and sent to your home.',
            sub: [
                'SMOKE DETECTOR',
                'LPG GAS DETECTOR',
                'WATER LEAKAGE DETECTION',
                'CO-SENSOR FOR CAR PARKING',
                'ELECTRICAL ENERGY MONITORING'
            ]
        }, {
            name: 'BUILDING MANAGEMENT SYSTEM',
            icon: 'fa-building',
            background: 'building',
            desc: 'Building management systems are most commonly implemented in large projects with extensive mechanical, HVAC, electrical systems. Systems linked to a BMS typically represent 40% of a building\'s energy usage if lighting is included, this number approaches to 70 % . BMS systems are a critical component to managing energy demand.',
            sub: [
                'HVAC CONTROL',
                'SCADA GRAPHICS',
                'CAR PARK JET FANS CONTROL',
                'GAS AND WATER METERING SYSTEM',
                'BUILDING ELECTRICAL AND MECHANICAL SYSTEM MONITORING'
            ]
        }];

        $scope.routeTo = function (route, index) {
            if (!index)
                index = 0;
            $scope.productIndex = index;
            $location.path(route);
        };
    });