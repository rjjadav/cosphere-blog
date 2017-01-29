'use strict';

var mCtrls = require('./_mCtrls');

mCtrls.controller('RootController', RootController);

RootController.$inject = ['$mdSidenav','$mdDialog'];

function RootController($mdSidenav, $mdDialog){
	var vm = this;
	vm.showLoginDialog = showLoginDialog;

	function showLoginDialog(event){
		$mdDialog.show({
			controller: LoginDialogController,
			controllerAs: 'login',
			templateUrl: 'tpls/partials/login/login.html',
			parent: angular.element(document.body),
			targetEvent: event,
			clickOutsideToClose:true,
		});

		function LoginDialogController($mdDialog){
			var login = this;
			login.dialog = 'main';
		}
	}
}