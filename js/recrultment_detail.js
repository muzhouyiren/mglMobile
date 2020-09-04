$(document).on('click', '.result-list .lis', function () {
    var _this = $(this).parent();
    if (_this.hasClass('cur')) {
        _this.removeClass('cur');
        _this.find('.lis_child').stop().slideUp("slow")
        // _this.find('.lis_child').stop().slideUp("slow", function () {
        //     console.log("展开")
        //     $("html,body").animate({
        //         // scrollTop: 540
        //     });
        // });
    } else {
        _this.addClass('cur');
        _this.find('.lis_child').stop().slideDown();
        _this.siblings().removeClass('cur');
        // _this.siblings().find('.lis_child').stop().slideUp("slow", function () {
        //     console.log("收缩")
        //     $("html,body").animate({
        //         // scrollTop: 540
        //     });
        // });
    }
});
// ul li 条件下拉框点击时候
$('.selectType .input_in').on('click', function () {
    if ($(this).next('.city').is('.hide')) {
        $('.city').addClass('hide');
        $('.selectType img').css("transform", "rotate(0deg)");
        $('input').css('border', '1px solid rgba(221,221,221,1)');
        $(this).next('.city').removeClass('hide');
        $(this).find('img').css("transform", "rotate(180deg)");
        $(this).find('input').css('border', '1px solid rgba(51,51,51,1)');
    } else {
        $(this).next('.city').addClass('hide');
        $(this).find('img').css("transform", "rotate(0deg)");
        $(this).find('input').css('border', '1px solid rgba(221,221,221,1)');
    }
})

// 校园宣讲会tab切换
$(document).on("click",".nav li",function(){
    $(this).addClass("active").siblings().removeClass("active")
})