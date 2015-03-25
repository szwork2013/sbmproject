/**
* starter Module
*
* Description
*/
angular.module('starter', 
	['ionic',
	'loginmodule',
	'productsmodule',
	'starter.controllers', 
	'starter.services',
	'starter.directives'])
.run(['$ionicPlatform','$rootScope','loginCheck', function($ionicPlatform,$rootScope,loginCheck){
	$rootScope.viewanimate="gogogo";
  	$ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])
.config(['$stateProvider','$urlRouterProvider','$ionicConfigProvider',function($stateProvider,$urlRouterProvider,$ionicConfigProvider) {
	// $ionicConfigProvider.backButton.text("返回");
	$ionicConfigProvider.views.maxCache(0);
	$ionicConfigProvider.views.forwardCache(false);
	$ionicConfigProvider.templates.maxPrefetch(0);

	$stateProvider
	.state('login',{
		url:'/login',
		templateUrl:'templates/index/login/login.html',
		controller:'LoginCtrl'
	})
	.state('sign_up', {
		url: "/sign_up",
		templateUrl: "templates/index/login/sign_up.html",
		controller:'sign_upCtrl'
	})
	.state('home', {
		url: "/home",
		templateUrl: "templates/index/home.html",
		controller:'indexCtrl'
	})
	.state('shops', {
		url: "/shops",
		templateUrl: "templates/index/shops.html"
	})
	.state('details', {
		url: "/details",
		templateUrl: "templates/index/details.html"
	})


	//我的宝贝
	.state('products', {
		url: "/products",
		templateUrl: "templates/index/products/products.html",
		controller:'productsCtrl'
	})





	//我的订单
	.state('orders', {
		url: "/orders",
		templateUrl: "templates/index/orders/orders.html",
		controller:"ordersCtrl"
	})
	.state('orderdetail', {
		url: "/orderdetail",
		templateUrl: "templates/index/orders/orderdetail.html",
		controller:"orderdetailCtrl"
	})

	//设置
	.state('setting', {
		url: "/setting",
		templateUrl: "templates/index/setting.html"
	})
	.state('set-shopmanage', {
		url: "/set-shopmanage",
		templateUrl: "templates/index/setting/set-shopmanage.html"
	})
	.state('set-remind', {
		url: "/set-remind",
		templateUrl: "templates/index/setting/set-remind.html"
	})
	.state('set-feedback', {
		url: "/set-feedback",
		templateUrl: "templates/index/setting/set-feedback.html"
	})
	.state('set-aboutus', {
		url: "/set-aboutus",
		templateUrl: "templates/index/setting/set-aboutus.html"
	})

	//新建宝贝详情
	.state('checkproduct', {
		url: "/checkproduct",
		templateUrl: "templates/index/creatdetails/checkproduct.html",
		controller:'productsCtrl'
	})
	.state('checktemplate', {
		url: "/checktemplate",
		templateUrl: "templates/index/creatdetails/checktemplate.html",
		controller:'productsCtrl'
	})
	.state('editpages', {
		url: "/editpages",
		templateUrl: "templates/index/creatdetails/editpages.html",
		controller:'editpagesCtrl'
	})

	.state('editpages.editer', {
		url: "/editer/:pageId/:pageTemp",
		templateUrl:function(params){
			return "templates/index/pages/page"+params.pageTemp+".html";
		}
	})


	//sidebar测试  正式上线删除
	.state('sidebartest',{
		url:"/sidebartest",
		templateUrl:"templates/index/sidebartest.html"
	});

	$urlRouterProvider.otherwise('/home');
	// $urlRouterProvider.otherwise('/login');
//http://codepen.io/ahsx/pen/mDcEd
}]);
