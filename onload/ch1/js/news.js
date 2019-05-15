$(function () {
    /* 顶部导航栏移入 */
    $('#nav-box>li').mouseenter(function () {
        $(this).addClass('yidong');
        $(this).children('ul').stop(true, false).fadeIn(500);
    })
    /* 顶部导航栏移出 */
    $('#nav-box>li').mouseleave(function () {
        $(this).removeClass('yidong');
        $('.dier').stop(true, false).fadeOut(500);
    })
    /* 顶部导航栏点击事件 */
    $('#nav-box>li').click(function () {
        $(this).addClass('xuan').siblings("li").removeClass('xuan');
    })

    /* 顶部导航栏 */
    /* 鼠标悬停背景左移 */
    $('.dier>li').mouseenter(function () {
        $(this).children('a').css('backgroundPositionX',' 85px');
    })
    /* 鼠标离开背景右移 */
    $('.dier>li').mouseleave(function () {
        $(this).children('a').css('backgroundPositionX',' 0');
    })

    


    /* 新闻资讯切换事件 */
    $('.top-nav>li').click(function () {
        var idx = $(this).index();
        var bgp = idx * -200;
        $('.news-list').eq(idx).show().siblings(".news-list").hide();
        $(this).addClass('bgp').siblings("li").removeClass('bgp');

    })
    /* 鼠标移入 */
    $('.top-nav>li').mouseenter(function () {
        $(this).addClass('xiangshang');

    })
    /* 鼠标移出 */
    $('.top-nav>li').mouseleave(function () {
        $(this).removeClass('xiangshang');
    })

    $('#liu').mouseenter(function () {
        $(this).addClass('yidong');
        $(this).children('ul').stop(true, false).fadeIn(500);
        $('#liuguang').css('borderColor','#d3c278')
    });
    $('#liu').mouseleave(function () {
        $(this).removeClass('yidong');
        $('.dier').stop(true, false).fadeOut(500);
        $('#liuguang').css('borderColor','#3e4759')
    });

    // var liuguang = document.getElementById('liuguang');
    // setInterval(function () {
    //     liuguang.style.borderTop = 'none';
    // },1000)

});