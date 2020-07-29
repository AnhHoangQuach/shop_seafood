$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
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

$(document).ready(function() {
    $(window).scroll(function() {
        var headerHeight = $('.header_top').height();
        if($(window).scrollTop() > headerHeight) {
            $('.header_bottom').addClass('navbar_fixed');
        } else if($(window).scrollTop() < headerHeight){
            $('.header_bottom').removeClass('navbar_fixed');
        }
    });
});

// split text
// const text = document.querySelector('.caption');
// const strText = text.textContent;
// const splitText = strText.split("");
// text.textContent = "";
// for(let i=0;i<splitText.length;i++) {
//     text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
// let char = 0;
// let timer = setInterval(onTick,50);

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
var char = 0;
const text = document.querySelectorAll('.caption');
for(var i = 0;i < Math.floor(text.length/2); i++) {
    var strText = text[i].textContent;
    var splitText = strText.split("");
    text[i].textContent = "";
    for(var j = 0; j < Math.floor(splitText.length); j++) {
        text[i].innerHTML += "<span>" + splitText[j] + "</span>";
    }
    let timer = setInterval(onTick(text[i]),35);
}

function onTick(text) {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}