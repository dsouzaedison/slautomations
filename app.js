angular.module('slautomations', ['route'])
    .controller('mainCtrl', function ($scope, $location, $anchorScroll, $http) {
        $scope.active = 0;
        $scope.productIndex = 0;
        $scope.showMenu = false;
        $scope.services = [{
            name: 'SMART HOME SOLUTION',
            icon: 'fa-home',
            background: 'smarthome1',
            desc: 'Home Automation solution for connected smart homes and offices have found increasing popularity in recent years due to much higher affordability and convenience through SMART PHONE and TABLET connectivity. The concept of “Internet of things” has tied in closely with the increasing proliferation of home automation solutions.Smart home and building automation team has the expertise in designing and developing home automation solutions like home automation gateways.',
            productDesc: 'Smart home and building automation team has the expertise in designing and developing home automation solutions like home automation gateways and home automation sensor integration that allow every point of a smart home to be connected and controlled via a central and/or a remote location. This may include centralized control for lighting, HVAC (heating, ventilation and airconditioning), curtain control, and electrical connected appliances to provide improved convenience, comfort, energy efficacy and savings. While the entire house is connected to an external network for remote monitoring and control, simultaneously the object inside the house are also connected to offer smart interoperability features.',
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
            desc: 'A smart home security system connects to your home Wi-Fi network so you can monitor and control your security devices using your smartphone and an app. Entry-level systems typically include a couple of door and window sensors, a motion detector, and a hub that communicates with these devices using one or more wireless protocols such as Wi-Fi, Z-Wave, Zigbee, or a proprietary mesh network.',
            productDesc: 'A smart home security system connects to your home Wi-Fi network so you can monitor and control your security devices using your smartphone and an app. Entry-level systems typically include a couple of door and window sensors, a motion detector, and a hub that communicates with these devices using one or more wireless protocols such as Wi-Fi, Z-Wave, Zigbee, or a proprietary mesh network. You can add extra door, motion, and window sensors to provide coverage for your entire house and build a comprehensive system that includes door locks, garage door openers, indoor and outdoor surveillance cameras, lights, sirens, smoke/CO detectors, water sensors, and more.',
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
            productDesc: 'Lighting controls are sensors or devices that operate lights. These controls may be manual, time based or responds to movement, occupancy and light from other sources. Traditionally these controls are hard-wired to control individual or fixed groups of lights independently and either switch the lights off or on or dim them. Common areas are defined as all access areas of a building that are typically not sold or leased. These include fire stairs, car parks, lifts, foyers, lobbies and corridors. Historically back of house areas have not been seen as an opportunity for controls and have been left to operate 24/7. This presentation discusses the options for controls in these areas and the associated opportunities for financial and energy savings at attractive return on investment (ROI).',
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
            productDesc: 'The technical specifics may be slightly different for each security provider, but the basics of alarm monitoring are similar in any home security system. Your system control panel is the center of a network of sensors, which may include window or door sensors, motion detectors, tamper sensors on the telephone box, or specialized temperature, flood, and smoke detectors. When your system is armed and any of these sensors are triggered, a signal is sent to the monitoring station-typically via your telephone line.',
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
            productDesc: 'Building management systems are most commonly implemented in large projects with extensive mechanical, HVAC, electrical systems. Systems linked to a BMS typically represent 40% of a building\'s energy usage; if lighting is included, this number approaches to 70 % . BMS systems are a critical component to managing energy demand.In addition to controlling the building\'s internal environment, BMS systems are sometimes linked to access control (turnstiles and access doors controlling who is allowed access and egress to the building) or other security systems such as closed-circuit television (CCTV) and motion detectors. Fire alarm systems and elevators are also sometimes linked to a BMS, for monitoring. In case a fire is detected then only the fire alarm panel could shut off dampers in the ventilation system to stop smoke spreading and send all the elevators to the ground floor and park them to prevent people from using them.',
            sub: [
                'HVAC CONTROL',
                'PLC AND SCADA GRAPHICS',
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
        
        $scope.scrollTo = function (reference) {
            $location.hash(reference);
            $anchorScroll();
        };

        $scope.submitForm = function () {
            var req = {
                method: 'POST',
                url: 'contactussubmit.php',
                data: {
                    name : $scope.name,
                    email : $scope.email,
                    subject : $scope.subject,
                    message : $scope.message
                }
            };

            $http(req).then(function(){
                window.location.href = 'http://build.slautomations.com';
            }, function(){
                alert('Sorry! Something went wrong. You can reach us at : 08258 - 239424');
            });
        };
    });