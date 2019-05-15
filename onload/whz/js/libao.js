//这里是所有礼包页面的js代码


$(function () {
    //#app默认隐藏
    $('.wrap>.content>#app').hide();


    /*** 移入盒子会出现左右盒子同时消失active的bug,未能解决 */
    // // 鼠标移入nav-right盒子,将active给nav-right盒子,将伪元素换成另外一张图片
    if ($('#left1').hasClass('active')) {
        $('#right1').mouseenter(function () {
            $(this).addClass('active');
            $(this).removeClass('nav-right').addClass('nav-right2');
        });
        $('#right1').mouseleave(function () {
            $(this).removeClass('active');
            $(this).removeClass('nav-right2').addClass('nav-right');
        });
    }

    // 点击nav-left盒子,将标题替换,内容替换
    $("#left1").click(function () {
        $(this).addClass('active');
        $(this).removeClass('nav-left2').addClass('nav-left');
        if ($('#right1').hasClass('active')) {
            $('#right1').removeClass('active');
            $('#right1').removeClass('nav-right2').addClass('nav-right');
        }
        //如果nav-left盒子有active就给nav-right加上mouseleave事件
        if ($(this).hasClass('active')) {
            $('#right1').mouseleave(function () {
                $(this).removeClass('active');
                $(this).removeClass('nav-right2').addClass('nav-right');
            });
        }
        //点击nav-left盒子后,mouseleave事件不实行
        if ($(this).hasClass('active')) {
            $(this).unbind('mouseleave');
        }

        //title图片变化
        $('.wrap>.content>.title3').removeClass('title3').addClass('title');

        $('.wrap>.content>.content-wrap').show();

        $('.wrap>.content>#app').hide();
    });


    // 点击 nav-right盒子,将标题替换,内容替换
    $("#right1").click(function () {
        $(this).addClass('active');
        $(this).removeClass('nav-right').addClass('nav-right2');
        $('#left1').removeClass('active');
        $('#left1').removeClass('nav-left').addClass('nav-left2');

        //点击nav-right盒子后,mouseleave事件不实行
        if ($(this).hasClass('active')) {
            $(this).unbind('mouseleave');
        }

        //如果nav-right盒子有active就给nav-left加上mouseleave事件
        if ($(this).hasClass('active')) {
            $('#left1').mouseleave(function () {
                $(this).removeClass('active');
                $(this).removeClass('nav-left').addClass('nav-left2');
            });
        }

        // // 如果此时nav-right有类active,鼠标移入nav-left盒子,将active给nav-left盒子,将伪元素换成另外一张图片
        $('#left1').mouseenter(function () {
            $(this).addClass('active');
            $(this).removeClass('nav-left2').addClass('nav-left');
        });
        $('#left1').mouseleave(function () {
            $(this).removeClass('active');
            $(this).removeClass('nav-left').addClass('nav-left2');
        });

        //title图片变化
        $('.wrap>.content>.title').removeClass('title').addClass('title3');

        $('.wrap>.content>.content-wrap').hide();

        $('.wrap>.content>#app').show();
    });
});