'use strict';

window.app.controller('mainCtrl', ['$scope', function ($scope) {
	$scope.slides = [
		{
			img: 'http://placehold.it/1920x700',
			animation: 'slideInDown',
			text: 'Ryan Patrick Hansen<hr>Web Developer'
		},
		{
			img: 'http://placehold.it/1920x700',
			animation: 'bounce',
			text: 'Conversion Driven eCommerce <br><a href="#/ecommerce" class="btn btn-primary keyboard">Learn More</a>'
		},
		{
			img: 'http://placehold.it/1920x700',
			animation: 'zoomIn',
			text: 'Dynamic Web Applications <br><a href="#/apps" class="btn btn-primary keyboard">Learn More</a>'
		}
	]
}]);