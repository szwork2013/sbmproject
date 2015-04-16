creatshowmodule
.controller('editpagesCtrl',['$scope','$rootScope','$state','$http','$ionicLoading','$stateParams','SBMJSONP','saveShow',function($scope,$rootScope,$state,$http,$ionicLoading,$stateParams,SBMJSONP,saveShow){


	console.log("editpagesCtrl");

	$scope.saveShow=function(){
		$ionicLoading.show({
			template:"正在保存,请稍等...",
		});
		saveShow($rootScope.editShowData.mainData,
			function(data){
				$ionicLoading.hide();
				console.log("保存成功");
			},
			function(data){
				$ionicLoading.hide();
				alert(data);
			});
	};

	//初始化editShowData
	if(!$rootScope.editShowData){
		console.log(["创建$rootScope.editShowData"]);
		$rootScope.showId="";
		$rootScope.editShowData={
			showId:"",
			currentpage:0,
			mainData:"",
			dddd:""
		};
	}
	var showdata=$rootScope.editShowData;

	//翻页按钮
	$scope.goprev = function() {
		// console.log($rootScope.editShowData.currentpage);
		var pageid=showdata.currentpage-1;
			pageid=pageid>0?pageid:0;
		var params={
			showId:showdata.showId,
			pageId:pageid,
			pageTemp:showdata.mainData.pages[pageid].templatePageId
		};
		$state.go("editpages.editer",params);
	};

	$scope.gonext = function() {
		console.log(showdata.mainData);
		var pageid=showdata.currentpage+1;
			pageid=pageid<(showdata.mainData.pages.length-1)?pageid:(showdata.mainData.pages.length-1);
		var params={
			showId:showdata.showId,
			pageId:pageid,
			pageTemp:showdata.mainData.pages[pageid].templatePageId
		};
		$state.go("editpages.editer",params);
	};


	//小页面宽度
	$scope.pagelistwidth={"width":0};

	//获取宝贝秀数据
	// $rootScope.$watch("editShowData",function() {
	$rootScope.$on("showdatachanged",function(){
		console.log(["showdatachanged",$rootScope.editShowData]);
		//宽度控制
		if(typeof $rootScope.editShowData.mainData.pages !== "undefined"){
			console.log("改变宽度啊！！")
			$scope.pagelistwidth={"width":$rootScope.editShowData.mainData.pages.length*71+"px"};
		}

		if(!$rootScope.editShowData.mainData||$rootScope.editShowData.showId!==$rootScope.editShowData.mainData.detailId){

			console.log("开始更新宝贝秀数据");
			var getshowdata = {
				orgName:$rootScope.orgName,
				detailId:$rootScope.editShowData.showId,
				method :"softbanana.app.detail.search"
			};

			console.log(getshowdata);

			var api = SBMJSONP("searchDetail",getshowdata);
			//获取宝贝秀数据
			$http.jsonp(api.url)
			.success(function(data){
				if(!data.isSuccess){
					alert("获取数据失败");
					return;
				}
				console.log(["更新宝贝秀数据结束",data]);
				$rootScope.editShowData.mainData=data;
				$scope.pagelistwidth={"width":data.pages.length*71+"px"};
				//
				// $rootScope.$broadcast("showdataIsReady");

			})
			.error(function(){
				alert("更新宝贝秀数据失败");
			});
		}
	});




}])
.controller('addpagesCtrl', ['$scope','$rootScope','$http','$stateParams','$state', function($scope,$rootScope,$http,$stateParams,$state){
	
	$http.get('testdata/pagetemplate.json')
	.success(function(data){
		console.log(["模板数据",data])
		$scope.tempdata=data;
	})
	.error(function(){
		console.log("网络有问题,没有获取模板数据");
		alert("网络有问题,没有获取模板数据");
	});


	$scope.addpage=function(index){
		console.log($rootScope.editShowData.mainData.pages)
		var pages=$rootScope.editShowData.mainData.pages;
		var addpage=$scope.tempdata.pages[index].pagedata;
		console.log($stateParams.pageId)
		pages.splice($stateParams.pageId,0,addpage);
		
		console.log($rootScope.editShowData.mainData.pages);

		$state.go("editpages.editer",{
					showId:$rootScope.editShowData.showId,
					pageId:index+1,
					pageTemp:$rootScope.editShowData.mainData.pages[index-1].templatePageId
				});
	};

}])


.controller('editerCtrl', ['$scope','$rootScope','$http','$ionicLoading','$stateParams','changepagesize',function($scope,$rootScope,$http,$ionicLoading,$stateParams,changepagesize){

	changepagesize();

	$rootScope.editShowData.ddd="cccc";

	console.log("editerCtrl");
	// console.log(["bb",$rootScope.editShowData]);

	$rootScope.editShowData.showId=$stateParams.showId;
	$rootScope.editShowData.currentpage=parseInt($stateParams.pageId);
	$rootScope.$emit("showdatachanged");

	// console.log(["cc",$rootScope.editShowData]);
	// console.log($rootScope.editShowData.currentpage);

}])


.directive('onFinishRenderFilters',["$timeout", function ($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function() {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    };
}])

.directive('pageEditor',['$rootScope','$state','$animate',function($rootScope,$state,$animate){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'templates/index/creatshows/pageeditor.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			console.log($rootScope);
			// console.log(["aa",$rootScope.editShowData]);
			$scope.editpages=0;
			// var pagelistboxhold=ionic.onGesture("hold",function(){
			// 	console.log("pagelistboxhold");
			// 	$scope.editpages=1;
			// 	$scope.$apply();
			// },$('.pagelistbox')[0])
			

			var holdtouchlist=[];
			//小页页面DOME渲染完成够出发
			$rootScope.$on("ngRepeatFinished",function() {
				var pages=$rootScope.editShowData.mainData.pages;
				console.log("小页页面DOME渲染完成");
				$('.pageitem').each(function(){
					holdtouchlist.push(
						ionic.onGesture("hold",function(){
							console.log("pagelistboxhold");
							$scope.editpages=1;
							$scope.$apply();
						},this));
				});
			})

			$scope.pageitemclick=function(index){
				if($scope.editpages){
					$scope.editpages=0;
					return;
				}
				$state.go("editpages.editer",{
					showId:$rootScope.editShowData.showId,
					pageId:index,
					pageTemp:$rootScope.editShowData.mainData.pages[index].templatePageId
				});
			};

			//删除页面
			$scope.deletethispage=function(index){
				var pages=$rootScope.editShowData.mainData.pages;
				console.log($animate);
				$(".pageitem").eq(index).on("webkitTransitionEnd", function() {
					$(".pageitem").eq(index).off("webkitTransitionEnd");
					$rootScope.$emit("showdatachanged");
				})

				pages.splice(index,1);
			};

			//小页面位置控制
			$scope.pageitemposition=function(index){
				return {"left":index*71+"px"}
			};


			//添加页面测试
			// setTimeout(function(){
			// 	var pages=$rootScope.editShowData.mainData.pages;
			// 	console.log(pages);
			// 	console.log(pages[0]);

			// 	// var cc= cloneobj(pages[0]);

			// 	pages.splice(0,0,{
			// 		"detailPageIndex":"6",
			// 		"templatePageId": 6,
			// 		"detailPageImage": [
			// 			{"img":"img/pic7.jpg"}
			// 		],
			// 		"detailPageText": [
			// 			{"txt":"流量入口,一建到店成交"},
			// 			{"txt":"买家只需点击宝贝秀中的购买即可立即打开宝贝页面，即看即买！"}
			// 		]
			// 	})

			// 	console.log(pages);
			// 	$rootScope.$apply();
			// 	$rootScope.$emit("showdatachanged");

			// },5000)

		}
	};
}])

.directive('normalEditPage', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: 'templates/index/creatshows/pages/normaleditpage.html',
		replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	};
})


.controller('pagetempht1Ctrl',['$scope','$rootScope','$state',"$http","setShowImg",function($scope,$rootScope,$state,$http,setShowImg){
	// console.log($state.current);
	console.log("pagetempht1Ctrl");
	// console.log("editerCtrl");


	// $scope.checkimg=function(){
	// 	document.getElementById('fileImg').click();
	// };

	// document.getElementById('fileImg').addEventListener('change', handleFileSelect, false);

	// function handleFileSelect (evt) {
	// 	var file = evt.target.files[0];
	// 	if (!file.type.match('image.*')) {
	// 		return;
	// 	}

	// 	var reader = new FileReader();

	// 	reader.readAsDataURL(file);

	// 	reader.onload=function(e){
	// 		console.log(e.target.result);
	// 		var img=new Image();
	// 		img.src=e.target.result;

	// 		console.log(compress(img,50));

	// 		var api=SBMJSONP("uploadImage/uploadFile",{
	// 			orgName:$rootScope.orgName,
	// 			method:"softbanana.app.image.upload",
	// 			imageData:compress(img,50)
	// 		});

	// 		$http.jsonp(api.url)
	// 		.success(function(data){
	// 			console.log(["图片上传成功",data]);
	// 		})
	// 		.error(function(data){
	// 			console.log(["图片上传失败",data]);
	// 		});
	// 	};

	// }

	$scope.ccc="ccc";
	var editShowData=$rootScope.editShowData;
	$scope.setimg=function(index){
		console.log(index);
		setShowImg([320,504],function(imgurl){
			// model=imgurl;
			console.log(imgurl);
			editShowData.mainData.pages[editShowData.currentpage].detailPageImage[index].img=imgurl;
		});
	};


}])



.controller('pagetemp1Ctrl',['$scope','$state',function($scope,$state){
	// console.log($state.current);
	console.log("pagetemp1");
	// console.log("editerCtrl");

}])


.controller('pagetemp2Ctrl',['$scope','$state',function($scope,$state){
	// console.log($state);
	console.log("pagetemp2");
	// console.log("editerCtrl");
}]);
