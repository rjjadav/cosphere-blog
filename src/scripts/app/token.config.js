'use strict';

angular.module('mApp')
.run(TokenConfig);

TokenConfig.$inject = ['$rootScope','$state'];

function TokenConfig($rootScope, $state){
	initFB();
	function initFB(){
		if (document.getElementById('facebook-jssdk')) {return;}
		var firstScriptElement = document.getElementsByTagName('script')[0];
		var facebookJS = document.createElement('script'); 
		facebookJS.id = 'facebook-jssdk';
		facebookJS.src = '//connect.facebook.net/en_US/sdk.js';
		firstScriptElement.parentNode.insertBefore(facebookJS, firstScriptElement);
	}
}
