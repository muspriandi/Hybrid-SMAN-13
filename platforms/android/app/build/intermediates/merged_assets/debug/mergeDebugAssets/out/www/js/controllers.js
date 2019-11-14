angular.module('starter.controllers', [])

.controller('GeneralCtrl', function($scope, $window) {
    $scope.doBack = function() {
        $window.history.back();
    };
})

.controller('NewsCtrl', function($scope, $http, $state, $window) {
    $http.get("https://sman13jkt.sch.id/wp-json/wp/v2/posts")
        .then(function (response) {
            $scope.posts = response.data;
        });

    $scope.doBack = function() {
        $window.history.back();
    };
})

.controller('DetailNewsCtrl', function($scope, $http, $stateParams, $state, $window) {
    $http.get("https://sman13jkt.sch.id/wp-json/wp/v2/posts/"+$stateParams.id)
        .then(function (response) {
            $scope.posts = response.data;
        });

    $scope.doBack = function() {
        $window.history.back();
    };
})

.controller('MapCtrl', function($scope, $ionicLoading , $compile, $state, $window) {
    window.initMap = function ()  {
        var myLatlng = new google.maps.LatLng(-6.119204, 106.895176);
     
        var mapOptions = {
            center: myLatlng,
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById ("map"),
            mapOptions);

        var contentString  = "<div><a ng-click='clickTest()'>SMA Negeri 13 Jakarta <br/>021 – 430 3676</a></div>" ;
        var compiled = $compile(contentString )($scope);
        var infowindow = new google.maps.InfoWindow({
            content: compiled[0]
        });
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'SMA Negeri 13 Jakarta'
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });
         $scope.map = map;
    }

    google.maps.event.addDomListener (window, 'load', initMap);
    initMap();
            
    $scope.doBack = function() {
        $window.history.back();
    };
})