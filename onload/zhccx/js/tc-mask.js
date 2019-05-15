/**
 * 
 * 这是弹窗遮盖层的js文件
 */

//给个一次性定时 页面打开马上弹出mask 和 tc
$(function () {
    setTimeout(function () {
        $('#mask').fadeIn(500).show();
        $('#tc').show();
    }, 1000)
})



$(function () {
    // 给关闭按钮注册事件
    $('#close-btn').click(function () {
        $('#tc').hide();
        $('#mask').hide();
        setTimeout(function(){
            $('.topBar-main>img').fadeIn(2500).show();
        },1500)
    })
})