(function () {

	angular.module('app', []);

	angular.module('app').config(function ($provide) {
		//Name of the provider function is 'books'.
		$provide.provider('books', function () {
			this.$get = function () {
				var appName = 'Books Logger';
				var appDesc = 'Track which books you read';

				return {
					appName: appName,
					appDesc: appDesc
				};
			};
		});
	});
}());
