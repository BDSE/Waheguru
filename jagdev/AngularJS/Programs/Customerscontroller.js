		jagdevb.controller("Customerscontroller",function ($scope){
				$scope.sortBy = 'name';
				$scope.reverse = false;
				$scope.customers = [{name:'jagdev',city:'dubai',order:9.99995, joined :'2000-12-02'},{name:'sukhman',city:'paris',order:12.0002020,joined:'2015-17-17'},
					{name:'kiran',city:'patti',order:12.4,joined:'2014-12-12'},{name:'inder',city:'amritsar',order:15.3456, joined :'2004-12-22'},
					{name:'mandeep',city:'vancouver',order:19.299995, joined :'2013-12-02'},{name:'avinder',city:'toronto',order:29.99995, joined :'2010-12-02'},
					{name:'gurbir',city:'tarantaran',order:39.99995, joined :'2010-22-02'}];
				$scope.doSort = function(propName){
					$scope.sortBy = propName;
					$scope.reverse = !$scope.reverse;
				};	
			
			});