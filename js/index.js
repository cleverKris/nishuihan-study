//拔剑弹出首页
$(function () {
    //获取span
    var span = $('.progress>span')[0];//jQuery对象转DOM对象
    aniMations(span, 100);
    var flag = false;//当前拔剑的动画还未执行完

    function aniMations(ele, target) {
        clearInterval(ele.timeId);
        ele.timeId = setInterval(function () {
            //获取元素当前位置
            var current = parseInt(ele.innerText);
            if (current == 99) {
                var res = confirm('Ladies and gentlemen,i will driving,Are you OK?');
                if (!res) {
                    ele.innerText = '$#!@*&';
                    clearInterval(ele.timeId);
                    return;
                } else {
                    //res==true
                    //太快了看不到而已 实际变了
                    ele.innerText = 100;
                    //console.log(ele.innerText);
                    $('#loading').remove();
                    $('#loading-in').fadeIn(500);
                    $('body').css('height', 3500);
                    flag = true;
                    if (flag) {
                        setTimeout(function () {
                            $('#loading-in').remove();
                            $('.boss').fadeIn(1000);

                            setTimeout(function () {
                                console.log('我出现了');
                            }, 2000);

                        }, 2000);

                    }
                }
            }
            //计算本次移动距离
            var step = (target - current) / 10;
            //取整
            step = Math.ceil(step);
            //开始移动
            current += step;
            //修改元素当前位置
            ele.innerText = current;
            //终点检测
            if (current == target) {
                clearInterval(ele.timeId);
            }


            //console.log('目标位置是:' + target + ',当前位置是:' + current + ',每次移动的步数是:' + step);
        }, 100);
    }

});

// 轮播图1
$(function () {
    //1.获取每个导航的li
    var $navList = $('#slideNav>ul>li');
    var index = 0;//声明一个变量 表示当前图片的索引

    //2.自动轮播:自动淡入淡出效果 并且鼠标移入不清空定时器
    function autoSlide() {
        //让对应index值的索引的图片淡入,让它的兄弟图片淡出
        $('#slideShow>li').eq(index).stop(true, false).fadeIn(500).siblings('li').stop(true, false).fadeOut(500);
        //并且让对应的导航轮播的li应用类样式
        $navList.eq(index).addClass('active').siblings('li').removeClass('active');
        index++;//每执行一次定时器,index值++
        if (index > $('#slideShow>li').length - 1) { //index的值始终保持的范围在 0-3(图片的索引)
            index = 0;
        }
    }

    autoSlide();//先调用一次

    setInterval(autoSlide, 2000);

    //3.为导航的li注册鼠标移入事件
    $navList.mouseenter(function () {
        //TODO:让当前移入的导航栏li,显示它对应的背景position值
        $(this).addClass('active').siblings('li').removeClass('active');
        var idxNav = $(this).index();//轮播导航的索引
        //鼠标移入当前索引的轮播导航的时候,让对应的轮播图淡入,它的兄弟轮播图淡出
        //这就形成了一个动画队列,每次移入新的一个的时候,应该清空队列,并且上一次不到达最终效果
        $('#slideShow>li').eq(idxNav).stop(true, false).fadeIn(500).siblings('li').stop(true, false).fadeOut(500);
        //****因为当鼠标移入再移出后会图片并不是根据当前的index继续做轮播, 而是回到了定时器的index, 显得特别的不协调
        //解决:就是当鼠标移入的时候,下一次做自动轮播 应该是 根据当前的idxNav去做自动轮播
        index = idxNav;
    });
});
// 轮播图2
$(function () {
    //获取所有导航栏a,为它们注册点击事件
    $('.dynamicNav>a').click(function () {
        $(this).addClass('active').siblings('a').removeClass('active');
        //当前点击的a的索引
        var idx = $(this).index();
        $($('.dynamic-body>section')).eq(idx).stop(true, false).fadeIn(500).siblings('section').stop(true, false).fadeOut(500);
        index = idx;
    });

    var index = 0;//声明一个变量 表示当前section的索引
    function autoSlide() {
        //当前index为0
        $('.dynamic-body>section').eq(index).fadeIn(500).siblings('section').fadeOut(500);
        $('.dynamicNav>a').eq(index).addClass('active').siblings('a').removeClass('active');
        index++;
        if (index > 2) {
            index = 0;
        }
    }

    autoSlide();
    setInterval(autoSlide, 3000);
});

