$(function () {
    /* 人物导航栏鼠标移入移出 */
    // console.log($('#ren').children().children());
    
    $('#ren li').mouseenter(function () {
        $(this).addClass('yidong');
    });
    $('#ren li').mouseleave(function () {
        $(this).removeClass('yidong');
    });
    $('#ren li').click(function () {
        var idx = $(this).index();
        // $(this).addClass('xuan');
        // console.log( $(this).index());
        $('.box').eq(idx).stop(true, false).fadeIn(300).siblings('div').stop(true, false).fadeOut(300)
        // $(this).addClass('xuan').siblings("li").removeClass('xuan');
    })


    /* 性别部分鼠标移入移出 */
    // console.log($('#sex-q').children());
    
    $('#sex-q li').mouseenter(function () {
        $(this).addClass('dong');
    });
    $('#sex-q li').mouseleave(function () {
        $(this).removeClass('dong');
    });
    $('#sex-q li').click(function () {
        // console.log($('#sex-q').children());
        // console.log($(this).index());
        var idx = $(this).index();
        $(this).addClass('xuan').siblings("li").removeClass('xuan');
        if ($(this).index() == 1) {
            $('#woman').stop(true, false).fadeIn(500);
            $('#man').stop(true, false).fadeOut(500);
        } else {
            $('#woman').stop(true, false).fadeOut(500);
            $('#man').stop(true, false).fadeIn(500);
        }
    })

    /* 小电视部分 */
    $('.ting').click(function () {
        $('.video').show()
        $('.a').show()
    })

    $('.a').click(function () {
        $('.video').hide()
        $('.a').hide()
        $('.huadong').css('left','0')
        $('.huadong').css('width','60')
        $('.huadong').css('height','60')
    })

    /* 人物前面滑动按钮 */
    $('.huadong').click(function () {
        console.log($('.box').index());
        
        $('.huadong').animate({
            left: 195,
            width:100,
            height:100,
        }, 1500, function name(params) {
            var left = $('.huadong').css('left');
            // console.log(typeof(left));
            if ( left === '195px') {
                // console.log(1);
                $('.video').show()
                $('.a').show()
            }
        })
        // console.log($('.huadong').css('left'));
        // var left = $('.huadong').css('left');
        // console.log(left);

        
    })
    $('.box').click(function () {
        console.log($('.box').index());
        
    })


    /* 分享部分 */

    // console.log($('.weixin1'));
    $('#weixin').eq(0).children().mouseenter(function () {
        // console.log($('.weixin1').index());
        $(this).addClass('huan');
    });
    $('#weixin').children().mouseleave(function () {
        $(this).removeClass('huan');
    });

    $('#weibo').mouseenter(function () {
        $('#weixin').stop(true, false).fadeIn(500);
    });
    $('#weibo').mouseleave(function () {
        $('#weixin').stop(true, false).fadeOut(500);
    });


    // $('.name').stop(true,false).slideDown(500);



    document.onmousemove = function(e){
        // console.log('鼠标移动');
        e = e || window.event;
        //2.获取page坐标点赋值给元素定位即可
        // console.log(e.pageX);
        var jiaodu = e.pageX/150;
        // console.log(jiaodu);
        
        $('.yingx').css('transform','rotateY(' + jiaodu + 'deg)');
        $('.yingx').eq(1).css('transform','rotateY(' + -jiaodu + 'deg)');
        $('.yingx').eq(2).css('transform','rotateY(' + -jiaodu + 'deg)');
        $('.main').eq(1).css('backgroundPositionX', jiaodu + 'px')
        $('.main').eq(2).css('backgroundPositionX',-jiaodu + 'px')
        $('.main').css('backgroundPositionX',-jiaodu + 'px')
        // img.style.left = e.pageX + 'px';
        // img.style.top = e.pageY + 'px';
        
    };

   

})