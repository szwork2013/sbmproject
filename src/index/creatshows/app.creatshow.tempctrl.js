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
				console.log(["保存失败",data]);
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
			console.log("改变宽度啊！！");
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



.controller('pagetempht1Ctrl',['$scope','$rootScope','$state',"$http","setShowImg",function($scope,$rootScope,$state,$http,setShowImg){

	console.log("pagetempht1Ctrl");


	$scope.setimg=function(index){

		checkimg([234,138]);

	};

	function checkimg(size){
		var position={
			startpoint:[0,0],
			point:[10,0],
			scale:[1,1],
			rotation:[0,0],
			img:""
		};

		document.getElementById('fileImg').click();
		var cvs=document.getElementById('imgcanvas');
		var ctx=cvs.getContext("2d");
		cvs.width=size[0];
		cvs.height=size[1];



		function drawimg(imgobj){
			ctx.clearRect(0,0,cvs.width,cvs.height);
			ctx.save();
			ctx.scale(position.scale[0]*1.2,position.scale[1]*1.2);
			ctx.translate(position.point[0]/position.scale[0],position.point[1]/position.scale[1]);
			// ctx.rotate(position.rotation[0]);
			ctx.drawImage(imgobj,position.point[0],position.point[1]);
			ctx.restore();

		}

		document.getElementById('fileImg').addEventListener('change', handleFileSelect, false);
		function handleFileSelect (evt) {
			var file = evt.target.files[0];
			if (!file.type.match('image.*')){
				return;
			}

			var reader = new FileReader();

			reader.readAsDataURL(file);

			reader.onload=function(e){
				console.log(e.target.result);
				var img=new Image();
				img.src=e.target.result;
				position.img=img;
				position.scale=givemescale(img.width,img.height,cvs.width,cvs.height);
				drawimg(position.img);
			};
		}

		function givemescale(imgw,imgh,cw,ch){
			if(imgw/imgh>=cw/ch){
				return [cw/imgw,cw/imgw];
			}else{
				return [ch/imgh,ch/imgh];
			}
		}
	}
	// $scope.ccc="ccc";
	// var editShowData=$rootScope.editShowData;
	// $scope.setimg=function(index){
	// 	console.log(index);
	// 	setShowImg([320,504],function(imgurl){
	// 		// model=imgurl;
	// 		console.log(imgurl);
	// 		editShowData.mainData.pages[editShowData.currentpage].detailPageImage[index].img=imgurl;
	// 	});
	// };


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
