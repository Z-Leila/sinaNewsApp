var sinaNews = angular.module('sina',['ngAnimate','ngRoute','ngTouch']);
sinaNews.factory('$news',[function(){
  var news = [
    {
      id: 1001,
      image:'image/toutiao1.jpg',
      type: 'toutiao',
      title: '习近平在这些场合都提到了屈原',
      desc: '“诚既勇兮又以武，终刚强兮不可凌。身既死兮神以灵...',
      time: '2016-06-11',
      imgDesc: '习近平文艺工作座谈会上聊家常忆知青岁月'
    },
    {
      id: 1002,
      image:'image/toutiao2.jpg',
      type: 'toutiao',
      title: '泰国老虎庙附近现疑似屠宰场',
      desc: '警方发现疑似屠宰场。',
    },
    {
      id: 1003,
      image:'image/toutiao3.jpg',
      type: 'toutiao',
      title: '美华裔被控向中国走私战绩引擎',
      desc: '可以发射“地狱火”导弹的无人机。',
    },
    {
      id: 1004,
      image:'image/toutiao5.jpg',
      type: 'toutiao',
      title: '爆！詹皇抱摔库里引口水战',
      desc: '针尖对麦芒>',
    },
    {
      id: 1005,
      image:'image/hot1.jpg',
      type: 'hot',
      title: '高考结束了，准备怎么浪',
      desc: '考生说：吃、玩、睡。',
      top: '01',
    },
    {
      id: 1006,
      image:'image/hot2.jpg',
      type: 'hot',
      title: '女子被丈夫强塞后备箱带走',
      desc: '一味忍让只会让家暴愈发猖狂',
      top: '02',
    },
    {
      id: 1007,
      image:'image/hot2.jpg',
      type: 'hot',
      title: '欧洲杯揭幕战法国绝杀赢球',
      desc: '法国队前锋帕那一脚世界波惊艳全场。',
      top: '03',
    },
    {
      id: 1008,
      image:'image/tiyu1.jpg',
      type: 'tiyu',
      title: '欧洲杯兄弟相残，战火后血与泪',
      desc: '扎卡的父亲从战火纷飞的科索沃走出,更因政治问题入狱',
    },
    {
      id: 1009,
      image:'image/tiyu2.jpg',
      type: 'tiyu',
      title: '西媒曝德赫亚性侵门聊天记录',
      desc: '记录中否认了他在案发现场，但带出了他的几名曼联队友',
    },
    {
      id: 1010,
      image:'image/tiyu3.jpg',
      type: 'tiyu',
      title: '上海球员:裁判说宁退役也给牌',
      desc: '裁判最后跟我们说，他宁愿以后再也不吹，也要给我们牌',
    },
    {
      id: 1011,
      image:'image/tiyu4.jpg',
      type: 'tiyu',
      title: '中超拉米雷斯破门苏宁2-1上',
      desc: '拉米破门吉安扳平，若主罚球点球命中',
    },
    {
      id: 1012,
      image:'image/tiyu5.jpg',
      type: 'tiyu',
      title: '图解专栏:吹雪想空手接飞刀？',
      desc: '詹吹雪与库寻欢第四季,骑士为何下半场突然遭遇崩盘？',
    },
    {
      id: 1013,
      image:'image/keji1.jpg',
      type: 'keji',
      title: 'AlphaGo想要在《星际争霸》打赢人类',
      desc: 'AI想要打败《星际争霸》还是需要很长的时间学习和探索',
    },
    {
      id: 1011,
      image:'image/keji2.jpg',
      type: 'keji',
      title: 'AlphaGo想要在《星际争霸》打赢人类',
      desc: 'AI想要打败《星际争霸》还是需要很长的时间学习和探索',
    },
    {
      id: 1012,
      image:'image/keji3.jpg',
      type: 'keji',
      title: 'AlphaGo想要在《星际争霸》打赢人类',
      desc: 'AI想要打败《星际争霸》还是需要很长的时间学习和探索',
    },
    {
      id: 1013,
      image:'image/keji4.jpg',
      type: 'keji',
      title: 'AlphaGo想要在《星际争霸》打赢人类',
      desc: 'AI想要打败《星际争霸》还是需要很长的时间学习和探索',
    },
    {
      id: 1014,
      image:'image/shipin1.jpg',
      type: 'shipin',
      title: '全景真人与CG场景的首次结合',
    },
    {
      id: 1015,
      image:'image/shipin2.jpg',
      type: 'shipin',
      title: '奇幻鸟海岛漂流记',
    },
    {
      id: 1016,
      image:'image/shipin3.jpg',
      type: 'shipin',
      title: '尼泊尔孩子危险的上学之路',
    },
    {
      id: 1017,
      image:'image/shipin4.jpg',
      type: 'shipin',
      title: '新浪全景直击北京车展 360°滑动吸睛',
    },
  ];
  return {
    getNewsByType:function(type){
      var r = news.filter(function(v,i){
        return v.type === type;
      })
      return r;
    }
  }
}])
sinaNews.controller('indexCtrl',['$scope','$news',function($scope,$news){
  $scope.list = $news.getNewsByType('toutiao');
}])

sinaNews.controller('indexContentCtrl',['$scope','$news','$routeParams',function($scope,$news,$routeParams){
  var id = $routeParams.id;
  var listtoutiao = $news.getNewsByType('toutiao');
  $scope.image = listtoutiao[id].image;
  $scope.title = listtoutiao[id].title;
  $scope.desc = listtoutiao[id].desc;
  $scope.imageDesc = listtoutiao[id].imageDesc;
  $scope.time = listtoutiao[id].time;
}])

sinaNews.controller('hotCtrl',['$scope','$news',function($scope,$news){
  $scope.list = $news.getNewsByType('hot');
}])

sinaNews.controller('findCtrl',['$scope',function($scope){

}])

sinaNews.controller('myCtrl',['$scope',function($scope){

}])
sinaNews.controller('tiyuCtrl',['$scope','$news',function($scope,$news){
  $scope.listTiyu = $news.getNewsByType('tiyu');
}])

sinaNews.controller('tiyuContentCtrl',['$scope','$news','$routeParams',function($scope,$news,$routeParams){
  var id = $routeParams.id;
  var listTiyu = $news.getNewsByType('tiyu');
  $scope.image = listTiyu[id].image;
  $scope.title = listTiyu[id].title;
  $scope.desc = listTiyu[id].desc;
  $scope.imageDesc = listTiyu[id].imageDesc;
  $scope.time = listTiyu[id].time;
}])

sinaNews.controller('kejiCtrl',['$scope','$news',function($scope,$news){
  $scope.listKeji = $news.getNewsByType('keji');
}])

sinaNews.controller('kejiContentCtrl',['$scope','$news','$routeParams',function($scope,$news,$routeParams){
  var id = $routeParams.id;
  var listKeji = $news.getNewsByType('keji');
  $scope.image = listKeji[id].image;
  $scope.title = listKeji[id].title;
  $scope.desc = listKeji[id].desc;
  $scope.imageDesc = listKeji[id].imageDesc;
  $scope.time = listKeji[id].time;
}])

sinaNews.controller('kejiContentCtrl',['$scope','$news','$routeParams',function($scope,$news,$routeParams){
  var id = $routeParams.id;
  var listKeji = $news.getNewsByType('keji');
  $scope.image = listKeji[id].image;
}])


sinaNews.controller('shipinCtrl',['$scope','$news',function($scope,$news){
  $scope.listShipin = $news.getNewsByType('shipin');
}])





// sinaNews.directive('uqYindao',[function(){
//   return {
//     replace: true,
//     restrict: 'E',
//     templateUrl:'views/sina-yindao.html'
//   }
// }])


sinaNews.directive('uqSinaHeader',[function(){
  return {
    replace: true,
    restrict: 'EAC',
    templateUrl:'views/sina-header.html'
  }
}])
sinaNews.directive('uqSinaFooter',[function(){
  return {
    replace: true,
    restrict: 'EAC',
    templateUrl:'views/sina-footer.html'
  }
}])

sinaNews.directive('uqType',[function(){
  return {
    replace: true,
    restrict: 'EAC',
    templateUrl:'views/sina-type.html'
  }
}])




sinaNews.config(['$routeProvider',function($routeProvider){
  $routeProvider.when('/',{
    controller:'indexCtrl',
    templateUrl:'views/sina-index.html'
  }).when('/index',{
    controller:'indexCtrl',
    templateUrl:'views/sina-index.html'
  }).when('/tiyu',{
    controller:'tiyuCtrl',
    templateUrl:'views/sina-tiyu.html'
  }).when('/keji',{
    controller:'kejiCtrl',
    templateUrl:'views/sina-keji.html'
  }).when('/shipin',{
    controller:'shipinCtrl',
    templateUrl:'views/sina-shipin.html'
  }).when('/shipinContent:id',{
    controller:'shipinContentCtrl',
    templateUrl:'views/index-content.html'
  }).when('/indexContent:id',{
    controller:'indexContentCtrl',
    templateUrl:'views/index-content.html'
  }).when('/tiyuContent:id',{
    controller:'tiyuContentCtrl',
    templateUrl:'views/tiyu-content.html'
  }).when('/kejiContent:id',{
    controller:'kejiContentCtrl',
    templateUrl:'views/keji-content.html'
  }).when('/hot',{
    controller:'hotCtrl',
    templateUrl:'views/sina-hot.html'
  }).when('/find',{
    controller:'findCtrl',
    templateUrl:'views/sina-find.html'
  }).when('/my',{
    controller:'myCtrl',
    templateUrl:'views/sina-my.html'
  }).otherwise({
    redirectTo:'/'
  });
}])
