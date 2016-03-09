myapp.controller('orderController',function($scope,$routeParams){
		var customerId = $routeParams.customerId;
		$scope.customers=[
		{name:'jagdev',city:'amritsar',Total:19.9999999,Joined:'2000-12-02'},{name:'sukhman',city:'tarntaran',Total:19.99,Joined:'2000-12-02'},
		{name:'amar',city:'sanJose',Total:19.09,Joined:'2000-12-02'},{name:'hundal',city:'chicago',Joined:'2000-12-02',Total:20.01},
		{name:'satnam',city:'sanfrancisco',Total:24.99,Joined:'2000-12-02'}];
		});
		 