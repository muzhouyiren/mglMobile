$(function () {
    // menu菜单下拉
    $(document).on('click', '.results-list .first-list', function () {
        var _this = $(this).parent();
        if (_this.hasClass('cur')) {
            _this.removeClass('cur');
            _this.find('.sec-list').stop().slideUp();
            // _this.find('.sec-list').stop().slideUp("slow",function(){
            //     console.log("展开")
            //     $("html,body").animate({
            //             scrollTop: 540
            //         });
            // });
        } else {
            _this.addClass('cur');
            _this.find('.sec-list').stop().slideDown();
            // _this.siblings().removeClass('cur');
            // _this.siblings().find('.sec-list').stop().slideUp("slow",function(){
            //     console.log("收缩")
            //     $("html,body").animate({
            //             scrollTop: 540
            //         });
            // });
        }
    });

    var blockSwiper = new Swiper('.section-block .swiper-container', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.section-block .swiper-pagination',
            clickable: true,
        },
    });
    // 电池单体支撑基础技术研究
    var ssection2Swiper = new Swiper('.section2-swiper .swiper-container', {
        loop: true,
        autoplay: {
            delay: 4000,//1秒切换一次
        },
        pagination: {
            el: '.section2-swiper .swiper-pagination',
            clickable: true,
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    // 可靠性
    var li3Swiper = new Swiper('.swiper-container-li3', {
        loop: true,
        autoplay: true,
        pagination: {
            el: '.swiper-container-li3 .swiper-pagination',
            clickable: true,
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });

    // 锰酸锂Pack组件模拟仿真
    var packSwiper = new Swiper('.pack-swiper .swiper-container', {
        loop: true,
        autoplay: {
            delay: 5000,//1秒切换一次
        },
        pagination: {
            el: '.pack-swiper .swiper-pagination',
            clickable: true,
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    //安全性检测
    
    var testSwiper = new Swiper('.test-swiper .swiper-container', {
        loop: true,
        autoplay: {
            delay: 4000,//1秒切换一次
        },
        pagination: {
            el: '.test-swiper .swiper-pagination',
            clickable: true,
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
    // 均衡管理
    var li4Swiper = new Swiper('.swiper-container-li4', {
        loop: true,
        autoplay: {
            delay: 3000,//1秒切换一次
        },
        pagination: {
            el: '.swiper-container-li4 .swiper-pagination',
            clickable: true,
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
    });
})