$(document).ready(function() {
    $(window).scroll(function() {
        var headerHeight = $('.header_top').height();
        if($(window).scrollTop() > headerHeight) {
            $('.header_bottom').addClass('navbar_fixed');
        } else if($(window).scrollTop() < headerHeight){
            $('.header_bottom').removeClass('navbar_fixed');
        }
    });
    var heroSlider = $('.owl-carousel');
    heroSlider.owlCarousel({
        loop:true,
        nav:false,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
        }
    });
    // putting dots to slide
    var dots = $('.owl-dots').css('position', 'absolute').css('bottom', '5px');
    dots.css('left', 'calc(50% - ' + dots.width()/2+'px)');
    heroSlider.on('changed.owl.carousel', function(event) {
        var item = event.item.index-2;
        $('h1').removeClass('animate__animated animate__bounce');
        $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animate__animated animate__bounce');
        $('h4').removeClass('animate__animated animate__fadeInLeft');
        $('.owl-item').not('.cloned').eq(item).find('h4').addClass('animate__animated animate__fadeInLeft');
    });

    function hasClass(element, cls) {
        return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }

    function imageMany(className, path, count, count_margin) {
        var product_feature = $(`.${className}`);
        var product_len = product_feature.length;
        if(count !== product_len) {
            product_feature.each(function() {
                var imgSrc = `.${path}` + `${count++}` + ".jpg";
                $(this).css('background-image', 'url("' + imgSrc + '")');
                $(this).addClass('product_feature_all');
                if(count > count_margin) {
                    $(this).addClass('product_margin');
                }
            });
        }
    }

    imageMany('product_feature', '/images/bg_feature/bg_feature', 1, 2);

    //split text
    // var text;
    // var char;
    // var timer;
    // var splitText;
    // function split_string(className) {
    //     text = document.querySelector(`${className}`);
    //     const strText = text.textContent;
    //     splitText = strText.split("");
    //     text.textContent = "";
    //     for(let i=0;i<splitText.length;i++) {
    //         text.innerHTML += "<span>" + splitText[i] + "</span>";
    //     }
    //     char = 0;
    //     timer = setInterval(onTick,50);
    // }

    // function onTick() {
    //     const span = text.querySelectorAll('span')[char];
    //     span.classList.add('fade');
    //     char++;
    //     if(char === splitText.length) {
    //         complete();
    //         return;
    //     }
    // }

    // function complete() {
    //     clearInterval(timer);
    //     timer = null;
    // }
    // split_string('.caption');

    function splitStr(str, maxLength, charWith) {
        var times = Math.floor(str.length / maxLength);
        var res = str.length - times * maxLength;
        var output = `${str[0]}`;
        for(let i = 0;i < times;i++) {    
            output += str.substr(i * maxLength + 1, maxLength);
            output += '<br>';
        }
        output += str.substr(times * maxLength + 1, res);
        return output;
    }

    var sc_intro_desc = $('.desc_content');
    var output = splitStr(sc_intro_desc.text(), 79, '<br>');
    sc_intro_desc.html(output);

    imageMany('about_feature', '/images/about/about_feature', 1, 2);

    var sc_wrap_item = $('.sc_wrap_item');
    var sc_item_count = 1;
    if(sc_item_count !== sc_wrap_item.length) {
        sc_wrap_item.each(function() {
            var sc_item_desc = $('.sc_item_desc' + `${sc_item_count++}`);
            var output_item = splitStr(sc_item_desc.text(), 24, '<br>');
            sc_item_desc.html(output_item);
            if(sc_item_count >= 2) {
                var sc_class = $('.sc_' + `${sc_item_count}`);
                sc_class.addClass('sc_item_all');
            }
        })
    }

    var banner_content = $('.banner_skill');
    var banner_count = 1;
    if(banner_count !== banner_content.length) {
        banner_content.each(function() {
            var b_c = $('#count_' + `${banner_count++}`);
            b_c.addClass('count_all');
        })
    }

    function runView(id) {
        var start = parseInt($(`${id}`).attr('data-start'));
        var end = parseInt($(`${id}`).attr('data-stop'));
        var step = parseInt($(`${id}`).attr('data-step'));
        var do_time = setInterval(function() {
            start += step;
            if(start <=  end) {
                $(`${id}`).html(parseInt(start));
            } else {
                clearInterval(do_time);
                $(`${id}`).html(parseInt(end));
            }
            console.log(start);
        },30)
    }
    
    function executeAsynchronously(functions, timeout) {
        for(var i = 0; i < functions.length; i++) {
          setTimeout(functions[i], timeout);
        }
    }
      

    $(window).scroll(function() {
        var hT = $('#ban_sc').offset().top,
            hH = $('#ban_sc').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
        if (wS >= (hT+hH-wH)){
            executeAsynchronously(
                [runView('#count_1'), runView('#count_2'), runView('#count_3')], 10
            );            
        }
    });

    imageMany('post_product1', '/images/products/products_', 1, 2);
    imageMany('post_product2', '/images/products/products_', 6, 7);
});