var app = angular.module('WWKPhotography', ['ngRoute']);

app.controller('indexCtrl',function($scope,$location){

	$scope.isActive = function(viewLocation){
		return $location.path().includes(viewLocation);
	};
});

app.config(function($routeProvider,$locationProvider){
	$locationProvider.html5Mode(true);
	$routeProvider
	.when("/home",{
		templateUrl: "../html/home.html",
		controller: "HomeCtrl"
	})

	//*** Engagements ***
	.when("/Engagements/coleSam",{
		templateUrl: "../html/Engagements/coleSam.html"
	})
	.when("/Engagements/alexSarah",{
		templateUrl: "../html/Engagements/alexSarah.html"
	})
	.when("/Engagements/kindraJordan",{
		templateUrl: "../html/Engagements/kindraJordan.html"
	})	

	//*** Weddings ***
	.when("/Weddings/coleSam",{
		templateUrl: "../html/Weddings/coleSam.html"
	})
	.when("/Weddings/alexSarah",{
		templateUrl: "../html/Weddings/alexSarah.html"
	})

	//*** Families ***
	.when("/Families/Dawes",{
		templateUrl: "../html/Families/dawes.html"
	})
	.when("/Families/Burkholders",{
		templateUrl: "../html/Families/burkholders.html"
	})

	//*** Senior Photos ***
	.when("/SeniorPhotos/Weston",{
		templateUrl: "../html/SeniorPhotos/weston.html"
	})
	.when("/SeniorPhotos/Jenny",{
		templateUrl: "../html/SeniorPhotos/jenny.html"
	})		


	//*** Travel ***
	.when("/Travel/The-West",{
		templateUrl: "../html/Travel/theWest.html",
	})
	.when("/Travel/The-Midwest",{
		templateUrl: "../html/Travel/theMidwest.html",
	})
	.when("/Travel/Europe",{
		templateUrl: "../html/Travel/europe.html",
	})
	.when("/Travel/Africa",{
		templateUrl: "../html/Travel/africa.html",
	})
	.when("/Travel/Australia",{
		templateUrl: "../html/Travel/australia.html",
	})
	.when("/Travel/National-Parks",{
		templateUrl: "../html/Travel/nationalParks.html",
	})	

	//*** Book Me! ***
	.when("/BookMe/Pricing",{
		templateUrl: "../html/BookMe/pricing.html",
	})	
	.when("/BookMe/Book-Now",{
		templateUrl: "../html/BookMe/bookNow.html",
	})
	.when("/BookMe/Contact",{
		templateUrl: "../html/BookMe/contact.html",
	})
	
	//*** About Me ***
	.when("/About-Me",{
		templateUrl: "../html/AboutMe/aboutMe.html",
	})
	.otherwise({
		redirectTo:"/home"
	});
});