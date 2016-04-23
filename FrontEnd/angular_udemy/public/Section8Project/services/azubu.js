(function (window, angular, undefined) {
	'use strict';

	angular
		.module('app.services')
		.factory('apiSvc', ['_', '$q', '$http', 'pathSvc', 'onlineSvc', 'notifySvc', 'URLS',
      function (_, $q, $http, pathSvc, onlineSvc, notifySvc, URLS) {

				// NOT USING THIS HEADER - Reserved
				return {
					get: get,
					post: post,
					postURL: postURL
				};

				function get(apiCall, params) {
					var url; //, compiled;

					url = buildPath(apiCall, params);
					console.log('apiSvc.get(), url, params:', url, params);
					return $q(function (resolve, reject) {
						//if(! checkOnline()) return reject();
						$http.get(url)
							.success(function (data) {
								resolve(data);
							})
							.error(function (data) {
								reject(data);
							});
					});
				}

				// post data to the HTTP Body for saves
				function post(apiCall, params, data) {
					var url; // compiled, url;

					url = buildPath(apiCall, params);
					if (data) {
						//data = angular.toJson(data);
						console.log('apiSvc.post(), url, data', url, data);
					} else {
						console.log('apiSvc.post(), url, data', url, 'no data sent');
					}
					//console.log('Calling GFL Pulic API, PUT:', url);
					return $q(function (resolve, reject) {
						//if(! checkOnline()) return reject();

						$http.post(url, data)
							.success(function (data) {
								resolve(data);
							})
							.error(function (data) {
								reject(data);
							});
					});
				}

				// doesn't post to HTTP body but uses URL instead
				function postURL(apiCall, params) {
					var url; // compiled, url;

					// if(! checkOnline()) return $q.reject('offline');

					url = buildPath(apiCall, params);
					console.log('apiSvc.postUrl(), url, data', url);
					//console.log('Calling GFL Pulic API, PUT:', url);
					return $q(function (resolve, reject) {

						$http.post(url)
							.success(function (data) {
								resolve(data);
							})
							.error(function (data) {
								reject(data);
							});
					});
				}

				function checkOnline() {
					console.log('gdm: apiSvc.checkOnline(), onlineSvc.status()', onlineSvc.status());
					if (onlineSvc.status() === 'online') {
						return true;
					} else {
						onlineSvc.sendMessage();
						return false;
					}
				}

				function buildPath(apiCall, params) {
					//console.log('apiSvc.buildPath(), path, params', apiCall, params);

					if (apiCall.indexOf('//') > -1)
						return pathSvc.build(apiCall, params);

					// no http:// - add GFL PUBLIC API PATH
					return URLS.GFL_PUBLIC_API_BASE + pathSvc.build(apiCall, params);
				}

      }]);

})(window, window.angular);
(function (window, angular, undefined) {
	'use strict';

	angular
		.module('app.services')
		.service('onlineSvc', ['$rootScope', '$window', '$timeout', 'notifySvc',
      function ($rootScope, $window, $timeout, notifySvc) {
				var self = this;
				var ONLINE = 'online';
				var OFFLINE = 'offline';
				var MESSAGE_SEND_DELAY = '10000';
				var messageSent = false;

				self.isOnline = function () {
					return $rootScope.online === ONLINE;
				};

				self.status = function () {
					return $rootScope.online;
				};

				self.sendMessage = function () {
					if (!messageSent) {
						notifySvc.error('Sorry, you are not online. Check you Internet connection.');
						messageSent = true;
						$timeout(function () {
							messageSent = false;
						}, MESSAGE_SEND_DELAY);
					}
				};

				self.initialize = function () {
					initialize();
					return $rootScope.online;
				};

				function initialize() {

					$rootScope.online = $window.navigator.onLine ? ONLINE : OFFLINE;
					$rootScope.$apply();

					if ($window.addEventListener) {

						$window.addEventListener("online", function () {
							$rootScope.online = ONLINE;
							$rootScope.$apply();
						}, true);

						$window.addEventListener("offline", function () {
							$rootScope.online = OFFLINE;
							$rootScope.$apply();
						}, true);

					} else {

						$window.document.body.ononline = function () {
							$rootScope.online = ONLINE;
							$rootScope.$apply();
						};

						$window.document.body.onoffline = function () {
							$rootScope.online = OFFLINE;
							$rootScope.$apply();
						};
					}

				}

    }]);


})(window, window.angular);