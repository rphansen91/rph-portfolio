'use strict'

window.app.directive('owl',function(){

	var linker = function(scope,element,attr){

		var loadCarousel = function(){
			element.owlCarousel({
				autoPlay: 5000,
				items : 5, //10 items above 1000px browser width
				pagination: true,
				itemsDesktop : [1000,5], //5 items between 1000px and 901px
				itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
				itemsTablet: [600,2] //2 items between 600 and 0;
			});
		}
		scope.$watch('tools', function(value) {
			loadCarousel(element);
		})
	}

	return{
		restrict : 'A',
		link: linker
	}

});