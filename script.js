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
				//======================================

		  // $scope.$watch('countries', function(countries, continents){
		  //   var total_selected = 0;

		  //   angular.forEach(continents, function(val,key){
		    
		  //     continent.countries_selected = 0;
		    
		  //     angular.forEach(continent.countries, function(country){
		      
		  //       total_selected += country.selected ? 1 : 0
		        
		  //       continent.countries_selected += country.selected ? 1 : 0
		        
		  //       if (continent.countries_selected == continent.countries.length) {
		  //         continent.selected = true;
		  //       } else {
		  //         continent.selected = false;
		  //       }
		        
		  //     });
		      
		  //   });
		    
		  //   $scope.select_all = function(continent){
		  //     continent.selected = true;
		  //   }
		    
		  //   $scope.total_selected = total_selected;
		    
		  // }, true);

		  //========================================

		//   //========================================

// 		$scope.$watch('countries', function(countries, continents){
// 			console.log(continents)
// 			var total_selected = 0;
// 			var total_countries;
// 			var c = 0;
				
// 			angular.forEach(continents, function(val,key){
				
// 				var continent_countries_selected = 0;
// 				total_countries = 0;
// 				c+=1;
// 				angular.forEach(countries, function(country){
					

// 					if(country.continent == key){
// 						total_countries += 1;
// 						total_selected += country.selected ? 1 : 0
// 						// total_selected += country.selected ? 1 : 0
// 						continent_countries_selected += country.selected ? 1 : 0

// 						// console.log(total_countries)
// 						// console.log(continent_countries_selected)
// 						// if (continent_countries_selected == total_countries) {
// 				  //         console.log(total_countries)
// 				  //       } else {
// 				  //         val.selected = false;
// 				  //       }
// 					}
// 			// 		continent_countries_selected = 0;


					
// 			// 		angular.forEach(continents, function(val,key){
// 			// 			if(country.continent == key && countrie.select){
// 			// // 			// console.log(lo) 

// 			// // 			if(country.continent == key && countrie.select){
// 			// // 				total_selected += country.selected ? 1 : 0
// 			// // 				continent_countries_selected += country.selected ? 1 : 0

// 			// // 				// console.log(continent_countries_selected)
// 			// // 				if (continent_countries_selected == 5) {
// 			// // 		          $scope.continents[key] = true;
// 			// // 		        } else {
// 			// // 		          val.selected = false;
// 			// // 		        }
// 			// // 			}
// 			// // // 			total_selected += country.selected ? 1 : 0
// 			// // // 			continent.countries_selected += country.selected ? 1 : 0

// 			// // 			// if (continent_countries_selected == continent.countries.length) {
// 			// // 	  //         continent.selected = true;
// 			// // 	  //       } else {
// 			// // 	  //         continent.selected = false;
// 			// // 	  //       }
// 				    });
// 				// console.log(c)
// 				});

// console.log(c)
	    
// 		// // //     $scope.select_all = function(continent){
// 		// // //       continent.selected = true;
// 		// // //     }
		    
// 		// // //     $scope.total_selected = total_selected;
// 		}, true);

		$scope.c = function(country, continent, continent_name){
			// console.log($scope.continent_name = true);
			// var bool = continent_name;

			angular.forEach($scope.continents, function(val,key){
				// console.log(val);

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
								console.log(true)
								country.selected = true;
								// $scope.continent_name = true;
					}
				}
				// console.log(total_selected)
			});
		}

		$scope.parentChange = function(continent, continent_name) {
			var bool = continent_name;
			angular.forEach($scope.countries, function(v, k) {
			    if(v.continent == continent) {
				    v.selected = bool;
				    // $scope.continent_name = bool;
			    }
		    });   
		}
	});
