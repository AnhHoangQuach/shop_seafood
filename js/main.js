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

    var product_feature = $('.product_feature');
    var product_len = product_feature.length;
    var product_count = 1;
    if(product_count !== product_len) {
        product_feature.each(function() {
            var imgSrc = "../shop_seafood/images/bg_feature/bg_feature" + `${product_count++}` + ".jpg";
            $(this).css('background-image', 'url("' + imgSrc + '")');
            $(this).addClass('product_feature_all');
            if(product_count > 2) {
                $(this).addClass('product_margin');
            }
        });
    }
});

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