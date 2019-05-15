/**
 *  cx 2019-4-21
 */

/* 教你遨游部分 */
$(function () {
    // 教你遨游新闻部分
    $('.luntan-tab a').mouseenter(function () {
        var index = $(this).index();
        $('.luntan-news .news').eq(index).show().siblings('ul').hide();
        // $(this).css('background','url(../images/tab4_3eef64b.png) no-repeat')

    });


    /* 大师打拳鼠标经过与轮播 */
    $(function () {
        //鼠标进入小方块
        $('.switch>i').mouseenter(function () {
            //当前进入的小方块 应用类样式
            $(this).addClass('active').siblings('i').removeClass('active');
            //获取每个小方块的索引
            var idx = $(this).index();
            //对应索引的图片 也应用类样式
            $('.da-tabs>div').eq(idx).addClass('active').siblings('div').removeClass('active');

            //每次移入 把定时器的index修改为idx的值 方便定时器再执行的时候 是可以从当前索引开始++的
            index = idx;
        });

        var index = 0;//声明一个变量 对应的是该显示图片的索引
        //自动轮播的函数
        function autoSlide() {
            //此时index为0,要显示对应0下标的图片
            $('.da-tabs>div').eq(index).addClass('active').siblings('div').removeClass('active');
            $('.switch>i').eq(index).addClass('active').siblings('i').removeClass('active');
            index++;//每执行一次定时器 index+1
            if (index > 3) { //index的值始终保持的范围在 0-3(图片的索引)
                index = 0;
            }
        };
        autoSlide();
        //定时器
        setInterval(autoSlide, 2500);
    });

    // 教你遨游图片部分
    $(function () {
        // 点击切换
        $('#aoyouindex>span').click(function () {
            var idx = $(this).index();
            $('.swiper-wrapper>div').eq(idx).fadeIn(200).show().siblings('div').hide();
            //$(this).css('background', 'url(../images/pagination_c2bd69c.png) no-repeat').siblings('span').css('background', 'url(../images/pagination2_a62d101.png) no-repeat')
            $(this).eq(idx).addClass('active').siblings('span').removeClass('active');
            index = idx;
        });
        // 轮播
        var index = 0;
        function autoSlide() {
            //让对应index值的索引的图片淡入,让它的兄弟图片淡出
            $('.swiper-wrapper>div').eq(index).fadeIn(200).show().siblings('div').hide();
            //并且让对应的导航轮播的li应用类样式
            $('#aoyouindex>span').eq(index).addClass('active').siblings('span').removeClass('active');
            index++;
            if (index > 1) {
                index = 0;
            }
        };
        autoSlide();//先调用一次
        setInterval(autoSlide, 2000);
    })

    $(function () {

        $(window.document).scroll(function () {
            var scrolltop = $(document).scrollTop();
            var flag = true;
            if (scrolltop > 2600) {
                $('.show').show();
                flag = false;
            }
            if(flag == false){
                setTimeout(function(){
                    $('.caidan').fadeIn(200).show()
                },1700)
            }
        });

    })


});
