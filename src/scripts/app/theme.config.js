'use strict';

angular.module('mApp')
.config(ConfigTheme);

ConfigTheme.$inject= ['$mdThemingProvider'];

function ConfigTheme($mdThemingProvider) {
		$mdThemingProvider.definePalette('amazingPaletteName', {
		'50': '03a9f4',
		'100': '03a9f4',
		'200': '03a9f4',
		'300': '03a9f4',
		'400': '03a9f4',
		'500': '03a9f4',
		'600': '03a9f4',
		'700': '03a9f4',
		'800': '03a9f4',
		'900': '03a9f4',
		'A100': '03a9f4',
		'A200': '03a9f4',
		'A400': '03a9f4',
		'A700': '03a9f4',
		'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
		                                    // on this palette should be dark or light

		'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
		 '200', '300', '400', 'A100'],
		'contrastLightColors': undefined    // could also specify this if default was 'dark'
	});

	$mdThemingProvider.theme('default')
	.primaryPalette('amazingPaletteName')
}