angular.module('myApp', ['ui.bootstrap'])
	.controller("countriesCtrl", function($scope, $http){
		var data_f;
		$http.get('/node_modules/countries-list/countries.json').success(function(data) {
		    $scope.continents = data.continents;
		    $scope.countries = data.countries;
		  });


		// $scope.cbChecked = function(continent){
		//     $scope.allSelected = true;
		//     angular.forEach($scope.countries, function(v, k) {
		//       if(!v.checked){
		//         // $scope.allSelected = false;
		//         $scope.toggleAll(continent)
		//       }
		//     });
		//   }

		// $scope.toggleAll = function(continent) {
			
		//     var bool = true;
		//     if ($scope.allSelected) {
		//       bool = false;
		//     }
		//     angular.forEach($scope.countries, function(v, k) {
		// 	    if(v.continent == continent) {
		// 	    	// console.log( continent);
		// 	    	// console.log( k);
		// 		    v.checked = bool;
		// 		    $scope.allSelected = bool;
		// 	    }
		//     });
		//   }

		  //========================================

		$scope.$watch('countries', function(countries, continents){
			var total_selected = 0;

				
			angular.forEach(countries, function(country){
				console.log(countries.length)
				total_selected += country.selected ? 1 : 0

				continent_countries_selected = 0;

				
				angular.forEach(continents, function(val,key){
					// console.log(lo) 

					if(country.continent == key){
						total_selected += country.selected ? 1 : 0
						continent_countries_selected += country.selected ? 1 : 0

						// console.log(continent_countries_selected)
						if (continent_countries_selected == 5) {
				          $scope.continents[key] = true;
				        } else {
				          val.selected = false;
				        }
					}
		// 			total_selected += country.selected ? 1 : 0
		// 			continent.countries_selected += country.selected ? 1 : 0

					// if (continent_countries_selected == continent.countries.length) {
			  //         continent.selected = true;
			  //       } else {
			  //         continent.selected = false;
			  //       }
			    });
			});


	    
		// //     $scope.select_all = function(continent){
		// //       continent.selected = true;
		// //     }
		    
		// //     $scope.total_selected = total_selected;
		}, true);

		$scope.parentChange = function(continent, continent_name) {
			var bool = continent_name;
			angular.forEach($scope.countries, function(v, k) {
			    if(v.continent == continent) {
				    v.selected = bool;
				    $scope.continent_name = bool;
			    }
		    });   
		}
	});
