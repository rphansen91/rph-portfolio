'use strict';

window.app.factory('Works', [function(){
		
	var works = [
		{
			'title': 'Richard Sherman',
			'img': 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/Ryans%20Images/richard_zpsbd22e1e6.jpg~original',
			'url': 'http://www.richardsherman25.com',
			'type': 'Athletes'
		},
		{
			'title': 'Mahaska',
			'img': 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/Ryans%20Images/mahaska_zps2f202c0d.jpg~original',
			'url': 'http://www.mahaska.com',
			'type': 'Branding'
		},
		{
			'title': 'Reggie Bush',
			'img': 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/Ryans%20Images/reggie_zps166d22ca.jpg~original',
			'url': 'http://www.reggiebush.com/',
			'type': 'Athletes'
		},
		{
			'title': 'Giovani Bernard',
			'img': 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/Ryans%20Images/gio_zps47237c43.jpg~original',
			'url': 'http://www.giobernard.com/',
			'type': 'Athletes'
		},
		{
			'title': 'Parq Restaurant & Nightclub',
			'img': '../../images/portfolio/parq.jpg',
			'url': 'http://www.parqsd.com',
			'type': 'Branding'
		},
		{
			'title': 'Jobs @ ParqSD',
			'img': '../../images/portfolio/jobs.jpg',
			'url': 'http://jobs.parqsd.com',
			'type': 'Web Application'
		},
		{
			'title': 'Barry Sanders',
			'img': 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/Ryans%20Images/barry_zpsa39044f4.jpg~original',
			'url': 'http://www.barrysanders.com/',
			'type': 'Athletes'
		},
		{
			'title': 'Shannon Sharpe',
			'img': 'http://i1370.photobucket.com/albums/ag251/anthroisphoto/Ryans%20Images/shannon_zps02c2e31a.jpg~original',
			'url': 'http://www.shannonsharpe.com/',
			'type': 'Athletes'
		},
		{
			'title': 'Blaine Bowen Jewelry',
			'img': '../../images/portfolio/blaine.png',
			'url': 'http://blainebowen.com/',
			'type': 'Branding'
		}
	];

	return function () {
		return works;
	}
}]);

window.app.controller('portfolioCtrl', ['$scope', '$filter', '$timeout', 'Works', function($scope, $filter, $timeout, Works){
	
	var all = Works();
	$scope.works = all;
	$scope.types = typeArr($scope.works);

	$scope.choose = function(type) {
		$scope.works = (type)?$filter('filter')(all, type, true):all;
		$scope.chosen = type;
	}

	function typeArr (works) {
		var arr = [];
		works.forEach(function (work) {
			if (arr.indexOf(work.type) === -1) {arr.push(work.type);}
		});
		return arr;
	};
}]);