angular.module('mApp')
.config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
	'ngInject';

	$stateProvider
		.state('app',{
			abstract: true,
			views : {
				'main' : {
					templateUrl: 'tpls/views/main.html',
					controller: 'MainController',
					controllerAs: 'main'
				},
				'toolbar@app': {
					templateUrl: 'tpls/partials/toolbar.html',
					controller: 'ToolbarController',
					controllerAs: 'toolbar' 
				},
				'quickPanel@app':{
					templateUrl: 'tpls/partials/quickPanel.html',
					controller: 'QuickPanelController',
					controllerAs: 'qp'		
				}
			}
		})
		.state('app.home', {
			url: '/',
			views: {
				'content@app':{
					templateUrl: 'tpls/views/home/home.html',
					controller: 'HomeController',
					controllerAs : 'home',

				}
			},
			resolve:{
				HomepageData : function(api,config){
					return api.get(config.getHomePageData, null, true);
				}
			},
			toolbarClass : ''
		})
		.state('app.blog',{
			// url: '/blog/:year/:month/:date/:blogId/:blogTitle',
			url: '/blog/:blogId',
			views:{
				'content@app':{
					templateUrl: 'tpls/views/blog/blog.html',
					controller: 'BlogController',
					controllerAs: 'blog'
				}
			}
		});
		
	$urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(false);
});