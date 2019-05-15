/**
 * 
 * 这是新闻tab切换的js文件
 */

$(function () {
    // 获取新闻标题 注册鼠标事件
    $('#news-tab li').mouseenter(function () {
        var index = $(this).index();
        $('.news').eq(index).show().siblings('ul').hide();
    });
});