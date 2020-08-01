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

    function imageMany(className, path) {
        var product_feature = $(`.${className}`);
        var product_len = product_feature.length;
        var product_count = 1;
        if(product_count !== product_len) {
            product_feature.each(function() {
                var imgSrc = `.${path}` + `${product_count++}` + ".jpg";
                $(this).css('background-image', 'url("' + imgSrc + '")');
                $(this).addClass('product_feature_all');
                if(product_count > 2) {
                    $(this).addClass('product_margin');
                }
            });
        }
    }

    imageMany('product_feature', '/images/bg_feature/bg_feature');

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

    imageMany('about_feature', '/images/about/about_feature');

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

    
});