angular.module('myApp', ['ui.bootstrap'])
	.controller("countriesCtrl", function($scope, $http){
		$http.get('/node_modules/countries-list/countries.json').success(function(data) {
		    $scope.continents = data.continents;
		    $scope.countries = data.countries;
		  });

		  // $scope.q = []

	$scope.selectCountries = function(country, continent, continent_name){
		angular.forEach($scope.continents, function(val,key){

			var total_selected = 0;
			var total_countries = 0;
			angular.forEach($scope.countries, function(country){
				if(country.continent == key){
					total_countries += 1;
					total_selected += country.selected ? 1 : 0
				}
			});
			if(country.continent == key){
				if(total_selected == total_countries) {
					$('#' + continent_name).prop('checked', true);
					$scope.val = true;
				} else {
					$('#' + continent_name).prop('checked', false);
				}
			}
		});
	}

	$scope.checkedAll = function(continent, continent_name) {
		var bool = continent_name;
		var i = 0;
		var j = 0;
		angular.forEach($scope.countries, function(v, k) {
		    if(v.continent == continent) {
		    	i+=1;
		    	if(v.selected) {
		    		j+=1;
		    	}
		    }
	    }); 
	    if(i != j) {
    		bool = true
    	}else {
    		bool = false
    	}

	    angular.forEach($scope.countries, function(v, k) {
	    	if(v.continent == continent) {
			    v.selected = bool;
		    }
	    });
	}
});

