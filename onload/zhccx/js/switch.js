/**
 * 
 * switch切换双层轮播图js文件
 */

$(function () {
    // 第一层轮播图
    $('.gf .switch-ctrl>span').mouseenter(function () {
        var index = $(this).index();
        $('.gf .switch-pic>a').eq(index).fadeIn(500).show().siblings('a').hide();
    });
    // 第二层轮播图
    $('.hz .switch-ctrl>span').mouseenter(function () {
        var index = $(this).index();
        $('.hz .switch-pic>a').eq(index).fadeIn(500).show().siblings('a').hide();
    });
    // 点击切换hz
    $('#hz').click(function () {
        $('.hz').fadeIn(100).show().siblings('div').hide();
        $('#hz').css({'backgroundColor':'#a28a4c','color':'#fff'}).siblings('a').css({'backgroundColor':'#fff','color':'#666'});
    });
    // 点击切换gf
    $('#gf').click(function () {
        $('.gf').fadeIn(100).show().siblings('div').hide();
        $('#gf').css({'backgroundColor':'#a28a4c','color':'#fff'}).siblings('a').css({'backgroundColor':'#fff','color':'#666'});
    });

    //自动轮播


    $(function () {
        var index = 0;
        function autoSlide() {
            //让对应index值的索引的图片淡入,让它的兄弟图片淡出
            $('.gf .switch-pic>a').eq(index).fadeIn(500).show().siblings('a').hide();
            index++;
            if (index > $('.gf .switch-pic>a').length - 1) { //index的值始终保持的范围在 0-3(图片的索引)
                index = 0;
            }
        }
        autoSlide();//先调用一次
        setInterval(autoSlide, 2000);
    })
    $(function () {
        var index = 0;
        function autoSlide() {
            //让对应index值的索引的图片淡入,让它的兄弟图片淡出
            $('.hz .switch-pic>a').eq(index).fadeIn(500).show().siblings('a').hide();
            index++;
            if (index > $('.hz .switch-pic>a').length - 1) { //index的值始终保持的范围在 0-3(图片的索引)
                index = 0;
            }
        }
        autoSlide();//先调用一次
        setInterval(autoSlide, 2000);
    })

})