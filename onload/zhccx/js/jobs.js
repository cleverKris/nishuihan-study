/**
 * 
 * 人物轮播图js文件
 */
$(function () {
    // 获取人物轮播导航索引
    $('#job-nav a').click(function () {
        var index = $(this).index();
        $('#jobs>div').eq(index).animate({
            left: 0,
            opacity: 1
        }, 500).siblings('div').animate({
            left: 80,
            opacity: 0
        });
    });

   

    // 自动轮播
    $(function () {
        var index = 0;
        function autoSlide() {
            //让对应index值的索引的图片淡入,让它的兄弟图片淡出
            $('#jobs>div').eq(index).animate({
                left: 0,
                opacity: 1
            }, 500).siblings('div').animate({
                left: 80,
                opacity: 0
            });
            index++;
            if (index > $('#job-nav a').length - 1) { //index的值始终保持的范围在 0-3(图片的索引)
                index = 0;
            }
        }
        autoSlide();//先调用一次
        var timeID = setInterval(autoSlide, 2500);

        $('#job-nav').mouseenter(function () {
            clearInterval(timeID);
        })
        $('#job-nav').mouseleave(function () {
            timeID = setInterval(autoSlide, 2500);
        })
    })


})


