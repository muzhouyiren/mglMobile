$(function () {
    $("#footer").load("./tpl/footer.html");
    $("#header").load("./tpl/header.html");

    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: true,
        live: true
    });
    wow.init();
    // new WOW().init();


    // menu打开
    $(document).on('click', 'header .menu', function () {
        // $('header .menu').on('click', function () {
        // 导航菜单按钮点击事件
        var logo = $('header .logo');
        var menu = $('header .menu');
        var navList = $('.nav-list');

        var timeFoag = true;    //点击开关
        navList.on('animationend', function () {
            timeFoag = true;
        });
        //点击开关
        if (!timeFoag) {
            return;
        }
        timeFoag = false;
        navList.toggleClass('active');
        if (navList.hasClass('active')) {
            //显示
            navList.removeClass('hide');
            $("body").css({
                position: "fixed",
            });
        } else {
            //隐藏
            navList.addClass('hide');
            $("body").css({
                position: "static",
            });
        }

        logo.toggleClass('active')
        menu.toggleClass('active')
        $(menu.find('.close')).toggleClass('active')
        $(menu.find('.open')).toggleClass('active')
        $('header .left').toggleClass('active')

        document.body.addEventListener("scroll", bodyScroll, false);
        function bodyScroll(event) {
            event.preventDefault();
        }
    });


    //menu关闭
    $('.close-nav').on('click', function () {
        $('header .menu').click();
    });



    // menu菜单下拉
    $(document).on('click', '.nav-list .first-list', function () {
    // $(".nav-list .first-list").on('click', function() {
        var _this = $(this).parent();
        if (_this.hasClass('cur')) {
            _this.removeClass('cur');
            _this.find('.sec-list').stop().slideUp();
        } else {
            _this.addClass('cur');
            _this.find('.sec-list').stop().slideDown();
            _this.siblings().removeClass('cur');
            _this.siblings().find('.sec-list').stop().slideUp();
        }
    });


    //隐藏中英文和menu缩小
    $(window).on('scroll', function () {
        var vh = $(window).height();
        var curTop = $(window).scrollTop();
        if (curTop > vh / 3) {
            $('header .right').hide();
            $('header').addClass('min');
        } else {
            $('header').removeClass('min');
            $('header .right').show();
        }
    });



    //视频点击
    $(document).on('click','.video-play-btn',function(){
        var url = $(this).data('url');
        if(!url){
            alert('无视频文件');
            return;
        }
        var html = $('#video-model-template').html();
        var $model = $(html);
        $model.find('video').attr('src',url);
        $('body').append($model);
    });
    $(document).on('click','.video-close',function(){
        $(this).parents('.video-modal').remove();
    });
})