//入口函数
$(function () {
    var $box1s = $('.box1').children('a');
    console.log($box1s);

    //初入江湖
    $('.box1').on(
        {
            'mouseenter': function () {
                //如果是最后一张图片，就不进行旋转设置，只显示二维码
                if ($(this).index() == $box1s.length - 1) {
                    $('.bg').show();
                    $('.xs4-qrcode').show();
                } else {
                    $(this).children('img').css(
                        {
                            transform: 'rotateY(360deg)',
                            transitionDuration: '2s',
                        }
                    );
                }
                //鼠标移入时，兄弟元素添加蒙层类名
                $(this).removeClass('mc').siblings('a').addClass('mc');
            },
            'mouseleave': function () {
                //如果是最后一张图片，就不进行旋转设置，只隐藏二维码
                if ($(this).index() == $box1s.length - 1) {
                    $('.bg').hide();
                    $('.xs4-qrcode').hide();
                } else {
                    $(this).children('img').css(
                        {
                            transform: 'rotateY(0deg)',
                            transitionDuration: '0s',
                        }
                    );
                }
                //鼠标移出时，兄弟元素移除蒙层类名
                $(this).removeClass('mc').siblings('a').removeClass('mc');
            },
        },
        'a');

    //流派介绍
    //人物名字集合
    var $names = $('.box2_left>div').children('p');
    var index = 0;
    var timeID = null;
    //执行自动轮播
    autoMove(index);
    for (var i = 0; i < $names.length; i++) {
        //添加鼠标移入
        $($names[i]).mouseenter(function () {
            $(this).addClass('active').parent('div').siblings('div').children('p').removeClass('active');
            var idx = $(this).parent().index();
            $('.box2>div').eq(idx).show().siblings('div').hide();
            clearInterval(timeID);
        });
        //鼠标移出后执行自动轮播
        $($names[i]).mouseleave(function () {
            index = $(this).parent().index();
            autoMove(index);
        });
    }
    //自动轮播方法
    function autoMove(index) {
        timeID = setInterval(function () {
            $($names[index]).addClass('active').parent('div').siblings('div').children('p').removeClass('active');
            $('.box2>div').eq(index).show().siblings('div').hide();
            index++;
            if (index == $names.length) {
                index = 0;
            }
        }, 1200);
    }

    //特色玩法的透明盒子集合
    var $divs = $('.box3>ul>li>a').children('div');
    for (var i = 0; i < $divs.length; i++) {
        $($divs[i]).mouseenter(function () {
            $(this).css({
                'transform': 'rotate(45deg)',
                'opacity': '1'
            });

        });
        $($divs[i]).mouseleave(function () {
            $(this).css({
                transform: 'rotate(0deg)',
                opacity: '0'
            });
        });

        //出入江湖 最后一张图片
        // $('.xs4').mouseenter(
        //     function () {
        //         $('.bg').show();
        //         $('.xs4-qrcode').show();
        //     }
        // );
        // $('.xs4').mouseleave(
        //     function () {
        //         $('.bg').hide();
        //         $('.xs4-qrcode').hide();
        //     }
        // );
    }

    //两大势力
    $('.box4').on(
        {
            'mouseenter': function () {
                $(this).siblings('a').children('div').show();
            },
            'mouseleave': function () {
                $(this).siblings('a').children('div').hide();
            },
        }
        , 'a');

    //大美江湖
    // var $lis = $('.box5>ul>li');
    // var index = 0;
    // var timeID2 = null;
    // autoMoveLi(index);
    $('.box5').on(
        {
            //移入的时候添加蒙层类和添加旋转
            'mouseenter': function () {
                $(this).removeClass('box5_mc').siblings('li').addClass('box5_mc');
                $(this).children('img').css(
                    {
                        transform: 'rotateY(360deg)',
                        transitionDuration: '2s',
                    }
                );
                // setInterval(timeID2);
            },
            //移入的时候移除蒙层类
            'mouseleave': function () {
                $(this).removeClass('box5_mc').siblings('li').removeClass('box5_mc');
                $(this).children('img').css(
                    {
                        transform: 'rotateY(0deg)',
                        transitionDuration: '0s',
                    }
                );
                // index = $(this).index();
                // autoMoveLi(index);
            },
        }
        , 'li');


        // function autoMoveLi(index) {
        //      timeID2 = setInterval(function(){
        //         $($lis[index]).removeClass('box5_mc').siblings('li').addClass('box5_mc');
        //         index++;
        //         if (index>=$lis.length) {
        //             index = 0;
        //         }
        //     }
        //     ,1200);
        // }
        
        
});