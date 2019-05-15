
$(function () {
   //分享模块按钮
   //鼠标移入
   $('.share-g-wrap').mouseenter(function () {
      $('.shareWay').show();
   });
   //鼠标移出
   $('.share-g-wrap').mouseleave(function () {
      $('.shareWay').hide();
   })
   //人物移入
   $('.page1-wrap .people').animate({
      left: '68px'
   }, 1000);

   //小技巧--让人物简绍随着人物的移入,逐渐显示
   $('.page1-wrap .people-name').animate({
      opacity: 1
   }, 500, function () {
      $('.page1-wrap .introduce').animate({
         opacity: 1
      }, 1000);
   });

   //让下一页的箭头一直动下去： 递归思想
   var timeID1 = setInterval(function () {
      //箭头事件
      $('.arrow').animate({
         top: -66
      }, 300, function () {
         $('.arrow').animate({
            top: -76
         }, 300)
      });

   }, 600);
   //点击按钮滚动

   $('.arrow-wrap').click(function () {
      $('.arrow-wrap').stop(true, false).attr('index', $('.arrow-wrap').attr('index') - 2 + 3);
      var index = ($('.arrow-wrap').attr('index') - 1 + 1);
      if (index == 0) {
         $("html,body").animate({ scrollTop: $(".page1-wrap").offset().top }, 2000);
      }
      if (index == 1) {
         var dances = ($(".page2-wrap").offset().top);
         $("html,body").animate({ scrollTop: dances }, 1000);
      } else if (index == 2) {
         var dances2 = ($(".page3-wrap").offset().top);
         $("html,body").stop(true, false).animate({ scrollTop: dances2 }, 1000);
         $('.arrow-wrap').attr('index', -1);
      }
      logX();
   });

//  $("html,body").animate({ scrollTop: $(".page2-wrap").offset().top }, 2000);

   //监听滚动条事件
   var tag = null;
   var isBack = 'begin';
   $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      console.log(scrollTop);
      //问题: 多次执行的问题，解决多次执行的问题
      if (scrollTop <= 20) {
         $('.side-nav .nav-btn1').css('background-position', '-498px -236px');
         $('.side-nav .nav-btn2').css('background-position', '-478px -144px');
         $('.side-nav .nav-btn3').css('background-position', ' -478px -104px');
        // $("html,body").animate({ scrollTop: $(".page2-wrap").offset().top }, 2000);
         //显示按钮
         $('.arrow-wrap').show();
         $('.arrow-wrap').attr('index', 0)
         isBack = 'back';
         //第一屏幕人物显示
         $('.page1-wrap .people').animate({
            left: '68px'
         }, 2000);
         $('.page1-wrap .people-name').animate({
            opacity: 1
         }, 1000, function () {
            $('.page1-wrap .introduce').animate({
               opacity: 1
            }, 1000);
         });
         // //第二屏幕人物隐藏
         // $('.page2-wrap .people').css({
         //    right: -800
         // });
         // $('.page2-wrap .people-name').css({
         //    opacity: 0
         // });
         // $('.page2-wrap .introduce').css({
         //    opacity: 0
         // });

         // $('.arrow-wrap').click();




      } else if (scrollTop > 20 && scrollTop < 1200) {
         $('.side-nav .nav-btn2').css('background-position', '-498px -144px');
         $('.side-nav .nav-btn1').css('background-position', '-478px -236px');
         $('.side-nav .nav-btn3').css('background-position', '-478px -104px');
         $('.arrow-wrap').attr('index', 1)
         isBack = 'back';
         //显示按钮
         $('.arrow-wrap').show();

         //第二屏幕人物显示
         $('.page2-wrap .people').animate({
            right: 0,
         }, 2000);
         $('.page2-wrap .people-name').animate({
            opacity: 1
         }, 500, function () {
            $('.page2-wrap .introduce').animate({
               opacity: 1
            }, 1000);
         });


      } else {
         $('.side-nav .nav-btn1').css('background-position', '-478px -236px');
         $('.side-nav .nav-btn2').css('background-position', '-478px -144px');
         $('.side-nav .nav-btn3').css('background-position', ' -478px -196px');
         $('.arrow-wrap').attr('index', 2)
         // if(scrollTop>2100&&screenTop<3000){
         //    $("html,body").animate({ scrollTop: $(".page3-wrap").offset().top }, 2000);
         // }
         // //第二屏幕人物隐藏
         // $('.page2-wrap .people').css({
         //    right: -800
         // });
         // $('.page2-wrap .people-name').css({
         //    opacity: 0
         // });
         // $('.page2-wrap .introduce').css({
         //    opacity: 0
         // });
         //隐藏按钮
         $('.arrow-wrap').hide();
         $('.page3-wrap .people').animate({
            right: 0,
            backgroundImage: 'url(../images/people-yl_83df242.png) no-repeat)'
         }, 1000)
      }

   });
   //第三屏幕人物切换
   // var timeID3 = setInterval(function () {
   //    // $('.page3-wrap .people').css('background','url(../images/people-yl_83df242.png) no-repeat');
   //    $('.page3-wrap .people').animate({
   //       right: 0,
   //       backgroundImage: 'url(../images/people-yl_83df242.png) no-repeat)'
   //    }, 1000)
   //    // console.log('动画');
   // }, 3000);

 //点击播放按钮
 
$('#page3 .player').click(function(){
   $('#page3 .player').css({
      'background-position':'-686px -171px',
      'top':18
    });
    $('#page3 #audio').attr('autoplay','autoplay');
});
   //log特效
   function logX() {
      //做个特效
      //LOG
      $('.logo').animate({
         top: -100
      }, 200, function () {
         $('.logo').animate({ top: 25 }, 200);
      });
      //nav
      $('.side-nav').animate({
         top: 330
      }, 200, function () {
         $('.side-nav').animate({ top: 430 }, 200);
      });
   }

   $('.video-play-wrap').click(function () {
      // $(window).scrollTop(0);
      $('.video-box').css('display', 'block');
   });
   $('.close').click(function () {
      $('.video-box').css('display', 'none');
   });


   //第三屏幕操作
   //点击lyj
   $('.tab-btn1').click(function () {
      //文字替换
      var content = "<div class='text'><span class='icon'></span>古风音乐大师</div>";
      content += "<div class='text'><span class='icon'></span>代表作：《仙剑奇侠传》系列、《古剑奇谭》系列、《海角七号》</div>";
      content += "<div class='text'><span class='icon'></span>逆水寒游戏音乐制作人</div>";
      $('#page3 .introduce').html(content);
      //人物图片
      $('#page3 .people').css('background', 'url(../images/people3_cf705a4.png)')
      //按钮背景
      $(this).css('background-position', '-51px 0px');
      $('.tab-btn2').css('background-position', ' -133px 0px');
      $('.tab-btn3').css({
         'background': 'url(../images/btn-peo3_d100f47.png)',
         'background-position': '0px 0px'
      });
      //人物名称
      $('#page3 .people-name').css('background-position', ' -524px -380px');
      //mp3播放条
      $('.audio-play-wrap').css('background-position', ' -297px -104px');

   });
   //点击pdj
   $('.tab-btn2').click(function () {
      //文字替换
      var content = "<div class='text'><span class='icon'></span>香港音乐人，流行歌曲及电影配乐创作者</div>";
      content += "<div class='text'><span class='icon'></span>代表作：《星愿》、《忘不了》、《如果·爱》、《七月与安生》</div>";
      content += "<div class='text'><span class='icon'></span>八次获得香港电影金像奖最佳原创电影音乐奖</div>";
      $('#page3 .introduce').html(content);
      //人物图片
      $('#page3 .people').css('background', 'url(../images/people-jpd_f34cbc9.png)')
      //按钮背景
      $(this).css('background-position', '-133px -122px');
      $('.tab-btn1').css('background-position', '-51px -123px');
      //人物名称
      $('#page3 .people-name').css('background-position', '-524px -242px');
     //mp3播放条
      $('.audio-play-wrap').css('background-position', '  -297px -196px');
   });
   //点击yl
   $('.tab-btn3').click(function () {
      //文字替换
      var content = "<div class='text'><span class='icon'></span>知名原创音乐人</div>";
      content += "<div class='text'><span class='icon'></span>代表作品：《锦鲤抄》、《牵丝戏》、《腐草为萤》、《棠梨煎雪》等</div>";
      content += "<div class='text'><span class='icon'></span>《逆水寒之鸣玉集》音乐制作人</div>";
      $('#page3 .introduce').html(content);
      //人物图片
      $('#page3 .people').css('background', 'url(../images/people-yl_83df242.png)');
      //按钮背景
      $(this).css({
         'background': 'url(../images/index_z_0074274.png)',
         'background-position': '-215px 0px'
      });
      $('.tab-btn1').css('background-position', '-51px -123px');
      $('.tab-btn2').css('background-position', ' -133px 0px');
       //人物名称
       $('#page3 .people-name').css('background-position', '0px -452px');
        //mp3播放条
      $('.audio-play-wrap').css('background-position', '  -524px 0px');
   });
   //模拟自动轮播
   var timeIDEnd1=setInterval(function(){
      $('.tab-btn1').click();
   },2000);
   var timeIDEnd2=setInterval(function(){
      $('.tab-btn2').click();
   },4000);
   var timeIDEnd3=setInterval(function(){
      $('.tab-btn3').click();
   },6000);
  
});