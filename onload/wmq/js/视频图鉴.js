$(function () {
    //1.1视频按钮鼠标移入事件
    $('#video-btn').mouseenter(function () {
        $(this).stop(true, false).animate({ left: '49%' }, 300).find('a').stop(true, false).animate({ left: '49%', }, 300).css('display', 'block')
    })

    //1.2视频按钮鼠标移出事件
    $('#video-btn').mouseleave(function () {
        $(this).stop(true, false).animate({ left: '50%' }, 300).find('a').stop(true, false).animate({ left: '50%', }, 300).css('display', 'none')
    })

    //1.3视频按钮点击事件
    $('#video-btn').click(function () {
        // $(this).parent().empty()
        $('.video-opacity').show().animate({ width: '100%', }, 800, function () {
            $(this).siblings('div').hide()
            $('#main-video').fadeIn(800)
            $('#logo-btn').css('left', '24px')
        });
        $(this).parent().empty()
    })





    //2.1图鉴按钮鼠标移入事件
    $('#bg-btn').mouseenter(function () {
        $(this).stop(true, false).animate({ left: '51%' }, 300).find('a').stop(true, false).animate({ left: '51%', }, 300).css('display', 'block').next('.opacity').stop(true, false).fadeIn();
        $('#bg-animal>.opacity').stop(true, false).fadeIn()
    })
    //2.2图鉴按钮鼠标移出事件
    $('#bg-btn').mouseleave(function () {
        $(this).stop(true, false).animate({ left: '50%' }, 300).find('a').stop(true, false).animate({ left: '50%', }, 300).css('display', 'none')

    })
    //2.3图鉴按钮点击
    $('#bg-btn').click(function () {

        $('#video-mask').stop(true, false).animate({ width: 0, display: 'none' }, 500, function () {
            $('#bg-animal').find('.opacity1').show()
            $('#main-bz').fadeIn();
            $('#main-video').hide();
        });
        $('#bz-btn').empty();
    })
    //2.4图鉴背景点击
    $('#bg-animal').click(function () {
        $('#bg-animal').find('.opacity1').show().prev('div').empty();
        // $('#video-mask').stop(true,false).animate({width:0,display:'none'},500);
        // $('#bz-btn').empty();
        $('#bg-btn').click()
    })


    //3.1图鉴背景鼠标移入
    //遮盖罩显示
    $('#bg-animal').mouseenter(function () {
        $(this).find('.opacity').stop(true, false).fadeOut();
    })
    //3.2视频背景鼠标移入
    //遮盖罩隐藏
    $('#video-mask').mouseenter(function () {
        $('#bg-animal').find('.opacity').stop(true, false).fadeIn();
    })
    //3.3视频背景点击切换
    $('#video-mask').click(function () {
        $('#video-btn').click();
    })



    //4.1logo图标区域
    $('#logo-btn').mouseenter(function () {
        $('#bg-animal>.opacity').stop(true, false).fadeIn()
    })
    //4.2列表按钮移入显示ul列表
    $('#list-btn').mouseenter(function () {
        $(this).children('ul').css('display', 'block').prev('a').children('i').css('background-position-x', '-1445px');

    })
    //4.3列表按钮移出隐藏ul列表
    $('#list-btn').mouseleave(function () {
        $(this).find('ul').css('display', 'none').prev('a').children('i').css('background-position-x', '-1410px')
    })


    //5.左侧视频区域
    //5.1tab栏的切换
    //5.2鼠标点击tab栏事件
    $('nav>a').click(function () {
        $(this).addClass('active').siblings('a').removeClass('active');
        var $idx = $(this).index();
        $('.tab>div').eq($idx).fadeIn().siblings('div').hide();
        $('.tab-bz>div').eq($idx).fadeIn().siblings('div').hide();
    })

    //6.右侧图鉴区域
    //6.1图鉴列表
    //6.1.1鼠标移入事件
    // $('#main-bz .g-item').on({
    //     'mouseenter':function(){
    //         $(this).find('.card_border').stop(true,false).fadeIn()
    //     },
    //     'mouseleave':function(){
    //         $(this).find('.card_border').stop(true,false).fadeOut()
    //     }
    // })


    //7.置顶按钮
    $('.top-btn').on('click',function(){
        $('.tab-bz .com').scrollTop(0);
        $('.tab-bz .com').scrollLeft(0);
    })

    $('.top-btn').on('click',function(){
        $('.tab .com').scrollTop(0);
        $('.tab .com').scrollLeft(0);
    })

    //8.视频切换栏点击事件
    $('#main-video .video-page').on('click',function(){
        //视频主体淡出()
        $('#main-video').fadeOut();
        //遮盖罩显示
        $('.opacity1').show();
        //图鉴背景显示
        $('#bg-animal').show();
        $('.video-opacity').animate({width:0},1000,function(){
            $('#main-bz').fadeIn();
            $('#logo-btn').css('left',1810)
        })
    })

    //9.图鉴切换栏点击事件
    $('#main-bz .video-page').on('click',function(){
        $('#main-bz').fadeOut();
        $('.video-opacity').show().animate({ width: '100%', }, 800, function () {
            $('#bg-animal').hide()
            $('#main-video').fadeIn();
            $('#logo-btn').css('left',24);
        });
    })

    

})