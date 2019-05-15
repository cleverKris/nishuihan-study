
//轮播图模块
$(function(){
    var $lis = $('#lunbo>li')
    var ols=$('.slideol ol li a').length;
    for(var i=0;i<ols;i++){
     $($('.slideol ol li a')[i]).attr('index',i);
    }
    var index = 0;
    $('#prev').click(function(){
        index--;
        if(index < 0){
                index = $lis.length-1;
            };

        $lis.eq(index).fadeIn(800).siblings('li').fadeOut(800);
    });

    $('#next').click(function(){
        index++;
        if(index >($lis.length-1)){
            index = 0;
        };

        $lis.eq(index).fadeIn(800).siblings('li').fadeOut(800);
        
    });
    var timeID=setInterval(function(){
        index++;
        if(index >($lis.length-1)){
            index = 0;
        };
        $lis.eq(index).fadeIn(800).siblings('li').fadeOut(800);
        
    },2000);
    $('#lunbo').mouseenter(function(){
        clearInterval(timeID);
    });
    // $('#lunbo').mouseleave(function(){
    //     timeID=setInterval(function(){
    //         index++;
    //         if(index >($lis.length-1)){
    //             index = 0;
    //         };
    //         $lis.eq(index).fadeIn(200).siblings('li').fadeOut(200);
    // });
    $('#lunbo').mouseleave(function(){
        timeID=setInterval(function(){
            index++;
            if(index >($lis.length-1)){
                index = 0;
            };
            $lis.eq(index).fadeIn(800).siblings('li').fadeOut(800);
        },2000);
    });

  var timeID2=setInterval(function(){
    $($('.slideol ol li a')[index]).css('backgroundColor','red');
    for(var i=0;i<$('.slideol ol li a').length;i++){
        if(i!=index){
            $($('.slideol ol li a')[i]).css('backgroundColor','#ccc');
        }
    }
  },1000);

});


//产品充值模块
$(function(){
    // console.log($('.tab-item'));
    $('.tab-item').click(function(){
        var idx = $(this).index();
        $('.tab').eq(idx).addClass('selected').siblings('div').removeClass('selected');
    })
    $('.remen').click(function(){
        $(this).css('background-position','0px -52px');
        $('.duanyou').css('background-position','-250px 0');
        $('.shouyou').css('background-position','-500px 0');
        $('.qita').css('background-position','-750px 0');
    })
    $('.duanyou').click(function(){
        $(this).css('background-position','-250px -52px');
        $('.remen').css('background-position','0px 0px');
        $('.shouyou').css('background-position','-500px 0');
        $('.qita').css('background-position','-750px 0');

        //<img src="../images/tab2.png" alt="">
       
    })
    $('.shouyou').click(function(){
        $(this).css('background-position','-500px -52px');
        $('.remen').css('background-position','0px 0px');
        $('.duanyou').css('background-position','-250px 0');
        $('.qita').css('background-position','-750px 0');

    })
    $('.qita').click(function(){
        $(this).css('background-position','-725px -52px');
        $('.remen').css('background-position','0px 0px');
        $('.duanyou').css('background-position','-250px 0');
        $('.shouyou').css('background-position','-500px 0');

    })
    // $('.tab>a').click(function(){
    //     var idx = $(this).index();
    //     $('.tab').eq(idx).show().siblings('a').hide();
    // })

})