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
			'img': 'http://placehold.it/600x450',
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
			'img': 'http://placehold.it/600x450',
			'url': 'http://www.parqsd.com',
			'type': 'Branding'
		},
		{
			'title': 'Jobs @ ParqSD',
			'img': 'http://placehold.it/600x450',
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
			'img': 'http://placehold.it/600x450',
			'url': 'http://blainebowen.com/',
			'type': 'Branding'
		}
	];

	return function () {
		return works;
	}
}]);

window.app.controller('portfolioCtrl', ['$scope', 'Works', function($scope, Works){
	
	$scope.works = Works();

	$scope.types = typeArr($scope.works);

	function typeArr (works) {
		var arr = [];
		works.forEach(function (work) {
			if (arr.indexOf(work.type) === -1) {arr.push(work.type);}
		});
		return arr;
	};
}]);