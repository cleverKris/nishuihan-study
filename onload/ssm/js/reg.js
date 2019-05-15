$(function () {
    $('.list a').mouseenter(function () {
        $(this).css('backgroundPositionY', ' -135px')
    })
    $('.list a').mouseleave(function () {
        $(this).css('backgroundPositionY', ' -95px')
    })

    $('.xiazai').eq(0).mouseenter(function () {
        $(this).css('backgroundPositionY', '  -108px')
        $(this).css('backgroundPositionX', '  -578px')
    })
    $('.xiazai').eq(0).mouseleave(function () {
        $(this).css('backgroundPosition', ' -345px -108px')
    })
    $('.xiazai').eq(1).mouseenter(function () {
        console.log($(this).index());
        $(this).css('backgroundPositionY', '  -258px')
        $(this).css('backgroundPositionX', '  0px')
    })
    $('.xiazai').eq(1).mouseleave(function () {
        $(this).css('backgroundPosition', ' -54px -136px')
    })
})