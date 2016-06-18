//
//onclick of discover button movement to search section
//on
//onclick of search get info from api and display in html template
//onclick of one trail show details weather map
//functionality of get directions button
//functionality of favorite button
//functionality of back button
//trailapi call
//googlemap api call
//openweather api call



//global variables



angular.module('myApp', ['ngGeolocation', 'uiGmapgoogle-maps'])
    .config(function (uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyD7buZcMEjcjwpMa8qztndpYmCxxP-Te2A',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    })


.controller('getTrailController', function ($scope, $http) {
    //trail api call
    $scope.trails = [];
    $http({
        method: 'GET',
        url: 'https://trailapi-trailapi.p.mashape.com/',
        headers: {
            'X-Mashape-Key': 'R44TeE1ickmshwISQYttjGg2Cfxjp1apauhjsnrGgp4cZGjvhS',
            'Accept': 'text/plain'
        }
    }).then(function successCallback(response) {
            $scope.trails = response.data.places;
            console.log(response);
            // angular.forEach(trails, function (value, key) {
            //    console.log(trails.activities);
            //});
        },
        function errorCallback(response) {
            console.log('error')
        });

    //underground weather api call
    /*var outputUrl = 'http://api.wunderground.com/api/06092c5a9a67fc24/';
    $http({
        method: 'GET',
        url: outputUrl
    }).then(function successCallback(response) {
        console.log(response);
        // this callback will be called asynchronously
        // when the response is available
    }, function errorCallback(response) {
        console.log("error");
        // called asynchronously if an error occurs
        // or server returns response with an error status.
    });*/
})


// providing current location of user
.controller('geolocCtrl', ['$geolocation', '$scope', function ($geolocation, $scope) {
    $geolocation.watchPosition({
        timeout: 60000
    }).then(function (position) {
        $scope.myPosition = position;
        console.log(position);
    });
    }])




//angular google map
.controller('mapCtrl', function ($scope, uiGmapGoogleMapApi) {


    uiGmapGoogleMapApi.then(function (maps) {
        $scope.map = {
            center: {
                latitude: 45,
                longitude: -73
            },
            zoom: 8
        };
    });
})
