//onscroll hero image and header to decrease in size
//onclick of discover button movement to search section
//onclick of search get info from api and display in html template
//onclick of one trail show details and get map info/photo info/weater info
//functionality of get directions button
//functionality of favorite button
//functionality of back button
//trailapi call
//googlemap api call
//google photo api call
//openweather api call




'use strict';

angular.module('bikeApp', [])
    .controller('getTrailController', function ($scope, $http) {
        return {
            //trail api call
            getTrail: function () {
                $http({
                    method: 'GET',
                    url: 'https://trailapi-trailapi.p.mashape.com/',
                    headers: {
                        'X-Mashape-Key': 'R44TeE1ickmshwISQYttjGg2Cfxjp1apauhjsnrGgp4cZGjvhS',
                        'Accept': 'text/plain'
                    }
                }).then(function successCallback(response) {
                    //console.log(response.data);
                    angular.forEach(response, function (value, key) {
                        console.log(response.data.places.name);
                    })
                }, function errorCallback(response) {
                    console.log('error')
                });
            },
            //googlemap api call
            getMap: function () {



            },


        }




    })
