/**
 * 
 * 这是nav-tab导航栏的js文件
 */

 $(function(){
     // 给每个按钮注册显示隐藏
     //新闻
     $('#news-down').mouseenter(function(){
         $('.news-down').fadeIn(200).show();
     })
     $('#news-down').mouseleave(function(){
         $('.news-down').hide();
     })
     //宗派
     $('#liupai-down').mouseenter(function(){
        $('.liupai-down').fadeIn(200).show();
    })
    $('#liupai-down').mouseleave(function(){
        $('.liupai-down').hide();
    })
    // 江湖
    $('#jianghu-down').mouseenter(function(){
        $('.jianghu-down').fadeIn(200).show();
    })
    $('#jianghu-down').mouseleave(function(){
        $('.jianghu-down').hide();
    })
    //视频
    $('#shipin-down').mouseenter(function(){
        $('.shipin-down').fadeIn(200).show();
    })
    $('#shipin-down').mouseleave(function(){
        $('.shipin-down').hide();
    })
    //论坛
    $('#bbs-down').mouseenter(function(){
        $('.bbs-down').fadeIn(200).show();
    })
    $('#bbs-down').mouseleave(function(){
        $('.bbs-down').hide();
    })
 });