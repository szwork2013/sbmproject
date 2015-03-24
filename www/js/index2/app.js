angular.module("starter",["ionic","starter.controllers","starter.services"]).run(["$ionicPlatform",function(t){t.ready(function(){window.cordova&&window.cordova.plugins.Keyboard&&cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0),window.StatusBar&&StatusBar.styleDefault()})}]).config(["$stateProvider","$urlRouterProvider",function(t,a){t.state("tab",{url:"/tab","abstract":!0,templateUrl:"templates/index2/tabs.html"}).state("tab.dash",{url:"/dash",views:{"tab-dash":{templateUrl:"templates/index2/tab-dash.html",controller:"DashCtrl"}}}).state("tab.chats",{url:"/chats",views:{"tab-chats":{templateUrl:"templates/index2/tab-chats.html",controller:"ChatsCtrl"}}}).state("tab.chat-detail",{url:"/chats/:chatId",views:{"tab-chats":{templateUrl:"templates/index2/chat-detail.html",controller:"ChatDetailCtrl"}}}).state("tab.account",{url:"/account",views:{"tab-account":{templateUrl:"templates/index2/tab-account.html",controller:"AccountCtrl"}}}),a.otherwise("/tab/dash")}]);
angular.module("starter.controllers",[]).controller("DashCtrl",["$scope",function(){}]).controller("ChatsCtrl",["$scope","Chats",function(t,o){t.chats=o.all(),t.remove=function(t){o.remove(t)}}]).controller("ChatDetailCtrl",["$scope","$stateParams","Chats",function(t,o,e){console.log(t),console.log(o),t.chat=e.get(o.chatId)}]).controller("AccountCtrl",["$scope",function(t){t.settings={enableFriends:!0}}]);
angular.module("starter.services",[]).factory("Chats",function(){var e=[{id:0,name:"Ben Sparrow",lastText:"You on your way?",face:"https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png"},{id:1,name:"Max Lynx",lastText:"Hey, it's me",face:"https://avatars3.githubusercontent.com/u/11214?v=3&s=460"},{id:2,name:"Andrew Jostlin",lastText:"Did you get the ice cream?",face:"https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg"},{id:3,name:"Adam Bradleyson",lastText:"I should buy a boat",face:"https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg"},{id:4,name:"Perry Governor",lastText:"Look at my mukluks!",face:"https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg"}];return{all:function(){return e},remove:function(t){e.splice(e.indexOf(t),1)},get:function(t){for(var a=0;a<e.length;a++)if(e[a].id===parseInt(t))return e[a];return null}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyIsImNvbnRyb2xsZXJzLmpzIiwic2VydmljZXMuanMiXSwibmFtZXMiOlsiYW5ndWxhciIsIm1vZHVsZSIsInJ1biIsIiRpb25pY1BsYXRmb3JtIiwicmVhZHkiLCJ3aW5kb3ciLCJjb3Jkb3ZhIiwicGx1Z2lucyIsIktleWJvYXJkIiwiaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyIiwiU3RhdHVzQmFyIiwic3R5bGVEZWZhdWx0IiwiY29uZmlnIiwiJHN0YXRlUHJvdmlkZXIiLCIkdXJsUm91dGVyUHJvdmlkZXIiLCJzdGF0ZSIsInVybCIsImFic3RyYWN0IiwidGVtcGxhdGVVcmwiLCJ2aWV3cyIsInRhYi1kYXNoIiwiY29udHJvbGxlciIsInRhYi1jaGF0cyIsInRhYi1hY2NvdW50Iiwib3RoZXJ3aXNlIiwiJHNjb3BlIiwiQ2hhdHMiLCJjaGF0cyIsImFsbCIsInJlbW92ZSIsImNoYXQiLCIkc3RhdGVQYXJhbXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwiY2hhdElkIiwic2V0dGluZ3MiLCJlbmFibGVGcmllbmRzIiwiZmFjdG9yeSIsImlkIiwibmFtZSIsImxhc3RUZXh0IiwiZmFjZSIsInNwbGljZSIsImluZGV4T2YiLCJpIiwibGVuZ3RoIiwicGFyc2VJbnQiXSwibWFwcGluZ3MiOiJBQU9BQSxRQUFRQyxPQUFPLFdBQVksUUFBUyxzQkFBdUIscUJBRTFEQyxLQUFLLGlCQUFrQixTQUFTQyxHQUMvQkEsRUFBZUMsTUFBTSxXQUdmQyxPQUFPQyxTQUFXRCxPQUFPQyxRQUFRQyxRQUFRQyxVQUMzQ0YsUUFBUUMsUUFBUUMsU0FBU0MsMEJBQXlCLEdBRWhESixPQUFPSyxXQUVUQSxVQUFVQyxvQkFLZkMsUUFBUSxpQkFBa0IscUJBQXNCLFNBQVNDLEVBQWdCQyxHQU14RUQsRUFHR0UsTUFBTSxPQUNQQyxJQUFLLE9BQ0xDLFlBQVUsRUFDVkMsWUFBYSwrQkFLZEgsTUFBTSxZQUNMQyxJQUFLLFFBQ0xHLE9BQ0VDLFlBQ0VGLFlBQWEsaUNBQ2JHLFdBQVksZUFLakJOLE1BQU0sYUFDTEMsSUFBSyxTQUNMRyxPQUNFRyxhQUNFSixZQUFhLGtDQUNiRyxXQUFZLGdCQUtqQk4sTUFBTSxtQkFDTEMsSUFBSyxpQkFDTEcsT0FDRUcsYUFDRUosWUFBYSxvQ0FDYkcsV0FBWSxxQkFLakJOLE1BQU0sZUFDTEMsSUFBSyxXQUNMRyxPQUNFSSxlQUNFTCxZQUFhLG9DQUNiRyxXQUFZLGtCQU1sQlAsRUFBbUJVLFVBQVU7QUNqRi9CeEIsUUFBUUMsT0FBTywwQkFFZG9CLFdBQVcsWUFBYSxTQUFTLGVBRWpDQSxXQUFXLGFBQWMsU0FBVSxRQUFRLFNBQVNJLEVBQVFDLEdBQzNERCxFQUFPRSxNQUFRRCxFQUFNRSxNQUNyQkgsRUFBT0ksT0FBUyxTQUFTQyxHQUN2QkosRUFBTUcsT0FBT0MsT0FJaEJULFdBQVcsa0JBQW1CLFNBQVUsZUFBZ0IsUUFBUSxTQUFTSSxFQUFRTSxFQUFjTCxHQUMvRk0sUUFBUUMsSUFBSVIsR0FFWk8sUUFBUUMsSUFBSUYsR0FDWE4sRUFBT0ssS0FBT0osRUFBTVEsSUFBSUgsRUFBYUksV0FHdENkLFdBQVcsZUFBZ0IsU0FBUyxTQUFTSSxHQUM1Q0EsRUFBT1csVUFDTEMsZUFBZTtBQ3BCbkJyQyxRQUFRQyxPQUFPLHVCQUVkcUMsUUFBUSxRQUFTLFdBSWhCLEdBQUlYLEtBQ0ZZLEdBQUksRUFDSkMsS0FBTSxjQUNOQyxTQUFVLG1CQUNWQyxLQUFNLHlFQUVOSCxHQUFJLEVBQ0pDLEtBQU0sV0FDTkMsU0FBVSxlQUNWQyxLQUFNLDZEQUVOSCxHQUFJLEVBQ0pDLEtBQU0saUJBQ05DLFNBQVUsNkJBQ1ZDLEtBQU0sMEVBRU5ILEdBQUksRUFDSkMsS0FBTSxrQkFDTkMsU0FBVSxzQkFDVkMsS0FBTSwwRUFFTkgsR0FBSSxFQUNKQyxLQUFNLGlCQUNOQyxTQUFVLHNCQUNWQyxLQUFNLHlFQUdSLFFBQ0VkLElBQUssV0FDSCxNQUFPRCxJQUVURSxPQUFRLFNBQVNDLEdBQ2ZILEVBQU1nQixPQUFPaEIsRUFBTWlCLFFBQVFkLEdBQU8sSUFFcENJLElBQUssU0FBU0MsR0FDWixJQUFLLEdBQUlVLEdBQUksRUFBR0EsRUFBSWxCLEVBQU1tQixPQUFRRCxJQUNoQyxHQUFJbEIsRUFBTWtCLEdBQUdOLEtBQU9RLFNBQVNaLEdBQzNCLE1BQU9SLEdBQU1rQixFQUdqQixPQUFPIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFN0YXJ0ZXIgQXBwXHJcblxyXG4vLyBhbmd1bGFyLm1vZHVsZSBpcyBhIGdsb2JhbCBwbGFjZSBmb3IgY3JlYXRpbmcsIHJlZ2lzdGVyaW5nIGFuZCByZXRyaWV2aW5nIEFuZ3VsYXIgbW9kdWxlc1xyXG4vLyAnc3RhcnRlcicgaXMgdGhlIG5hbWUgb2YgdGhpcyBhbmd1bGFyIG1vZHVsZSBleGFtcGxlIChhbHNvIHNldCBpbiBhIDxib2R5PiBhdHRyaWJ1dGUgaW4gaW5kZXguaHRtbClcclxuLy8gdGhlIDJuZCBwYXJhbWV0ZXIgaXMgYW4gYXJyYXkgb2YgJ3JlcXVpcmVzJ1xyXG4vLyAnc3RhcnRlci5zZXJ2aWNlcycgaXMgZm91bmQgaW4gc2VydmljZXMuanNcclxuLy8gJ3N0YXJ0ZXIuY29udHJvbGxlcnMnIGlzIGZvdW5kIGluIGNvbnRyb2xsZXJzLmpzXHJcbmFuZ3VsYXIubW9kdWxlKCdzdGFydGVyJywgWydpb25pYycsICdzdGFydGVyLmNvbnRyb2xsZXJzJywgJ3N0YXJ0ZXIuc2VydmljZXMnXSlcclxuXHJcbi5ydW4oW1wiJGlvbmljUGxhdGZvcm1cIiwgZnVuY3Rpb24oJGlvbmljUGxhdGZvcm0pIHtcclxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIC8vIEhpZGUgdGhlIGFjY2Vzc29yeSBiYXIgYnkgZGVmYXVsdCAocmVtb3ZlIHRoaXMgdG8gc2hvdyB0aGUgYWNjZXNzb3J5IGJhciBhYm92ZSB0aGUga2V5Ym9hcmRcclxuICAgIC8vIGZvciBmb3JtIGlucHV0cylcclxuICAgIGlmICh3aW5kb3cuY29yZG92YSAmJiB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkKSB7XHJcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIodHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93LlN0YXR1c0Jhcikge1xyXG4gICAgICAvLyBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyIHJlcXVpcmVkXHJcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKTtcclxuICAgIH1cclxuICB9KTtcclxufV0pXHJcblxyXG4uY29uZmlnKFtcIiRzdGF0ZVByb3ZpZGVyXCIsIFwiJHVybFJvdXRlclByb3ZpZGVyXCIsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcclxuXHJcbiAgLy8gSW9uaWMgdXNlcyBBbmd1bGFyVUkgUm91dGVyIHdoaWNoIHVzZXMgdGhlIGNvbmNlcHQgb2Ygc3RhdGVzXHJcbiAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci11aS91aS1yb3V0ZXJcclxuICAvLyBTZXQgdXAgdGhlIHZhcmlvdXMgc3RhdGVzIHdoaWNoIHRoZSBhcHAgY2FuIGJlIGluLlxyXG4gIC8vIEVhY2ggc3RhdGUncyBjb250cm9sbGVyIGNhbiBiZSBmb3VuZCBpbiBjb250cm9sbGVycy5qc1xyXG4gICRzdGF0ZVByb3ZpZGVyXHJcblxyXG4gIC8vIHNldHVwIGFuIGFic3RyYWN0IHN0YXRlIGZvciB0aGUgdGFicyBkaXJlY3RpdmVcclxuICAgIC5zdGF0ZSgndGFiJywge1xyXG4gICAgdXJsOiBcIi90YWJcIixcclxuICAgIGFic3RyYWN0OiB0cnVlLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL2luZGV4Mi90YWJzLmh0bWxcIlxyXG4gIH0pXHJcblxyXG4gIC8vIEVhY2ggdGFiIGhhcyBpdHMgb3duIG5hdiBoaXN0b3J5IHN0YWNrOlxyXG5cclxuICAuc3RhdGUoJ3RhYi5kYXNoJywge1xyXG4gICAgdXJsOiAnL2Rhc2gnLFxyXG4gICAgdmlld3M6IHtcclxuICAgICAgJ3RhYi1kYXNoJzoge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2luZGV4Mi90YWItZGFzaC5odG1sJyxcclxuICAgICAgICBjb250cm9sbGVyOiAnRGFzaEN0cmwnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICAuc3RhdGUoJ3RhYi5jaGF0cycsIHtcclxuICAgIHVybDogJy9jaGF0cycsXHJcbiAgICB2aWV3czoge1xyXG4gICAgICAndGFiLWNoYXRzJzoge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiAndGVtcGxhdGVzL2luZGV4Mi90YWItY2hhdHMuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0NoYXRzQ3RybCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIC5zdGF0ZSgndGFiLmNoYXQtZGV0YWlsJywge1xyXG4gICAgdXJsOiAnL2NoYXRzLzpjaGF0SWQnLFxyXG4gICAgdmlld3M6IHtcclxuICAgICAgJ3RhYi1jaGF0cyc6IHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pbmRleDIvY2hhdC1kZXRhaWwuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0NoYXREZXRhaWxDdHJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgLnN0YXRlKCd0YWIuYWNjb3VudCcsIHtcclxuICAgIHVybDogJy9hY2NvdW50JyxcclxuICAgIHZpZXdzOiB7XHJcbiAgICAgICd0YWItYWNjb3VudCc6IHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogJ3RlbXBsYXRlcy9pbmRleDIvdGFiLWFjY291bnQuaHRtbCcsXHJcbiAgICAgICAgY29udHJvbGxlcjogJ0FjY291bnRDdHJsJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8vIGlmIG5vbmUgb2YgdGhlIGFib3ZlIHN0YXRlcyBhcmUgbWF0Y2hlZCwgdXNlIHRoaXMgYXMgdGhlIGZhbGxiYWNrXHJcbiAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnL3RhYi9kYXNoJyk7XHJcblxyXG59XSk7IiwiYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXIuY29udHJvbGxlcnMnLCBbXSlcclxuXHJcbi5jb250cm9sbGVyKCdEYXNoQ3RybCcsIFtcIiRzY29wZVwiLGZ1bmN0aW9uKCRzY29wZSkge31dKVxyXG5cclxuLmNvbnRyb2xsZXIoJ0NoYXRzQ3RybCcsIFtcIiRzY29wZVwiLCBcIkNoYXRzXCIsZnVuY3Rpb24oJHNjb3BlLCBDaGF0cykge1xyXG4gICRzY29wZS5jaGF0cyA9IENoYXRzLmFsbCgpO1xyXG4gICRzY29wZS5yZW1vdmUgPSBmdW5jdGlvbihjaGF0KSB7XHJcbiAgICBDaGF0cy5yZW1vdmUoY2hhdCk7XHJcbiAgfTtcclxufV0pXHJcblxyXG4uY29udHJvbGxlcignQ2hhdERldGFpbEN0cmwnLCBbXCIkc2NvcGVcIiwgXCIkc3RhdGVQYXJhbXNcIiwgXCJDaGF0c1wiLGZ1bmN0aW9uKCRzY29wZSwgJHN0YXRlUGFyYW1zLCBDaGF0cykge1xyXG5cdGNvbnNvbGUubG9nKCRzY29wZSk7XHJcblxyXG5cdGNvbnNvbGUubG9nKCRzdGF0ZVBhcmFtcyk7XHJcbiAgJHNjb3BlLmNoYXQgPSBDaGF0cy5nZXQoJHN0YXRlUGFyYW1zLmNoYXRJZCk7XHJcbn1dKVxyXG5cclxuLmNvbnRyb2xsZXIoJ0FjY291bnRDdHJsJywgW1wiJHNjb3BlXCIsZnVuY3Rpb24oJHNjb3BlKSB7XHJcbiAgJHNjb3BlLnNldHRpbmdzID0ge1xyXG4gICAgZW5hYmxlRnJpZW5kczogdHJ1ZVxyXG4gIH07XHJcbn1dKTtcclxuIiwiYW5ndWxhci5tb2R1bGUoJ3N0YXJ0ZXIuc2VydmljZXMnLCBbXSlcclxuXHJcbi5mYWN0b3J5KCdDaGF0cycsIGZ1bmN0aW9uKCkge1xyXG4gIC8vIE1pZ2h0IHVzZSBhIHJlc291cmNlIGhlcmUgdGhhdCByZXR1cm5zIGEgSlNPTiBhcnJheVxyXG5cclxuICAvLyBTb21lIGZha2UgdGVzdGluZyBkYXRhXHJcbiAgdmFyIGNoYXRzID0gW3tcclxuICAgIGlkOiAwLFxyXG4gICAgbmFtZTogJ0JlbiBTcGFycm93JyxcclxuICAgIGxhc3RUZXh0OiAnWW91IG9uIHlvdXIgd2F5PycsXHJcbiAgICBmYWNlOiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzUxNDU0OTgxMTc2NTIxMTEzNi85U2dBdUhlWS5wbmcnXHJcbiAgfSwge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBuYW1lOiAnTWF4IEx5bngnLFxyXG4gICAgbGFzdFRleHQ6ICdIZXksIGl0XFwncyBtZScsXHJcbiAgICBmYWNlOiAnaHR0cHM6Ly9hdmF0YXJzMy5naXRodWJ1c2VyY29udGVudC5jb20vdS8xMTIxND92PTMmcz00NjAnXHJcbiAgfSwge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBuYW1lOiAnQW5kcmV3IEpvc3RsaW4nLFxyXG4gICAgbGFzdFRleHQ6ICdEaWQgeW91IGdldCB0aGUgaWNlIGNyZWFtPycsXHJcbiAgICBmYWNlOiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzQ5MTI3NDM3ODE4MTQ4ODY0MC9UdGkwZkZWSi5qcGVnJ1xyXG4gIH0sIHtcclxuICAgIGlkOiAzLFxyXG4gICAgbmFtZTogJ0FkYW0gQnJhZGxleXNvbicsXHJcbiAgICBsYXN0VGV4dDogJ0kgc2hvdWxkIGJ1eSBhIGJvYXQnLFxyXG4gICAgZmFjZTogJ2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy80NzkwOTA3OTQwNTgzNzkyNjQvODRUS2pfcWEuanBlZydcclxuICB9LCB7XHJcbiAgICBpZDogNCxcclxuICAgIG5hbWU6ICdQZXJyeSBHb3Zlcm5vcicsXHJcbiAgICBsYXN0VGV4dDogJ0xvb2sgYXQgbXkgbXVrbHVrcyEnLFxyXG4gICAgZmFjZTogJ2h0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy80OTE5OTUzOTgxMzU3NjcwNDAvaWUyWl9WNmUuanBlZydcclxuICB9XTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGFsbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiBjaGF0cztcclxuICAgIH0sXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uKGNoYXQpIHtcclxuICAgICAgY2hhdHMuc3BsaWNlKGNoYXRzLmluZGV4T2YoY2hhdCksIDEpO1xyXG4gICAgfSxcclxuICAgIGdldDogZnVuY3Rpb24oY2hhdElkKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhdHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoY2hhdHNbaV0uaWQgPT09IHBhcnNlSW50KGNoYXRJZCkpIHtcclxuICAgICAgICAgIHJldHVybiBjaGF0c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgfTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==