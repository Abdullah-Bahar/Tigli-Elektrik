"use strict"; // Start of use strict

function slider() {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        effect: "fade",
        fadeEffect: { crossFade: true },
        speed: 1200,
        navigation: {
          nextEl: ".sw-button-next",
          prevEl: ".sw-button-prev",
        },
        on: {
            slideChangeTransitionStart: function () {
                // Yazı animasyonlarını sıfırla (gizle)
                var slides = this.slides;
                slides.forEach(function(slide){
                    slide.querySelectorAll('.animated-element').forEach(function(el){
                        el.style.opacity = 0;
                        el.style.animation = 'none';
                    });
                });
            },
            slideChangeTransitionEnd: function () {
                // Yeni slaytta yazı animasyonlarını başlat
                var activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    activeSlide.querySelectorAll('.heading2.animated-element').forEach(function(el){
                        el.style.animation = 'slideInLeft 1s cubic-bezier(.4,0,.2,1) both';
                        el.style.animationDelay = '0.2s';
                    });
                    activeSlide.querySelectorAll('.heading1.animated-element').forEach(function(el){
                        el.style.animation = 'slideInRight 1s cubic-bezier(.4,0,.2,1) both';
                        el.style.animationDelay = '0.8s';
                    });
                    activeSlide.querySelectorAll('.btn.animated-element').forEach(function(el){
                        el.style.animation = 'slideInUp 1s cubic-bezier(.4,0,.2,1) both';
                        el.style.animationDelay = '1.5s';
                    });
                }
            }
        }
    });

    // --- EKLE: İlk açılışta animasyonları başlat ---
    setTimeout(function() {
        var activeSlide = swiper.slides[swiper.activeIndex];
        if (activeSlide) {
            activeSlide.querySelectorAll('.heading2.animated-element').forEach(function(el){
                el.style.animation = 'slideInLeft 1s cubic-bezier(.4,0,.2,1) both';
                el.style.animationDelay = '0.2s';
            });
            activeSlide.querySelectorAll('.heading1.animated-element').forEach(function(el){
                el.style.animation = 'slideInRight 1s cubic-bezier(.4,0,.2,1) both';
                el.style.animationDelay = '0.8s';
            });
            activeSlide.querySelectorAll('.btn.animated-element').forEach(function(el){
                el.style.animation = 'slideInUp 1s cubic-bezier(.4,0,.2,1) both';
                el.style.animationDelay = '1.5s';
            });
        }
    }, 400); // 200ms gecikme, Swiper'ın yüklenmesini bekler
}

// stickyHeader
function stickyHeader () {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').removeClass('fadeIn animated');
            $('.stricky').addClass('stricky-fixed fadeInDown animated');
            $('.scroll-to-top').fadeIn(500);
        }
        else if($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed fadeInDown animated');
            $('.stricky').addClass('slideIn animated');
            $('.scroll-to-top').fadeOut(500);
        }
    };
}

// latest-news-carousel
function clientCarousel () {
    if ($('.latest-news-carousel').length) {
        $('.latest-news-carousel.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,

            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0:{
                    items:1,
                    autoWidth: false
                },
                380:{
                    items:1,
                    autoWidth: false
                },
                540:{
                    items:2,
                    autoWidth: false
                },
                740:{
                    items:2,
                    autoWidth: false
                },
                1000:{
                    items:3,
                    autoWidth: false
                }
            }
        });
    };
}

// service-carousel
function servicecarousel () {
    if ($('.service_carousel').length) {
        $('.service_carousel').owlCarousel({
            loop: true,
            items: 4,
            margin: 30,
            nav: true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: false,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
            responsive: {
                0:{
                    items:1,
                    dots:false,
                    autoWidth: false
                },
                380:{
                    items:1,
                    dots:false,
                    autoWidth: false
                },
                667:{
                    items:2,
                    dots:false,
                    autoWidth: false
                },
                992:{
                    items:3,
                    dots:false,
                    autoWidth: false
                },
                1000:{
                    items:4,
                    autoWidth: false
                }
            }
        });
    };
}

// Fact Counter
function factCounter() {
    if($('.fact-counter').length){
        $('.fact-counter .counter-column.animated').each(function() {

            var $t = $(this),
                n = $t.find(".count-text").attr("data-stop"),
                r = parseInt($t.find(".count-text").attr("data-speed"), 10);

            if (!$t.hasClass("counted")) {
                $t.addClass("counted");
                $({
                    countNum: $t.find(".count-text").text()
                }).animate({
                    countNum: n
                }, {
                    duration: r,
                    easing: "linear",
                    step: function() {
                        $t.find(".count-text").text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $t.find(".count-text").text(this.countNum);
                    }
                });
            }

        });
    }
}

// Elements Animation
if($('.wow').length){
	var wow = new WOW(
	  {
		boxClass:     'wow',      // animated element css class (default is wow)
		animateClass: 'animated', // animation css class (default is animated)
		offset:       0,          // distance to the element when triggering the animation (default is 0)
		mobile:       true,       // trigger animations on mobile devices (default is true)
		live:         true       // act on asynchronously loaded content (default is true)
	  }
	);
	wow.init();
}

// Prealoder
function handlePreloader() {
    if($('.preloader').length){
        $('.preloader').delay(200).fadeOut(500);
    }
}

// Brand Carousel
function brandCarousel () {
    if ($('.brand').length) {
        $('.brand').owlCarousel({
            dots: false,
            loop:true,
            margin:20,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            autoplayHoverPause: false,
            autoplay: 6000,
            smartSpeed: 1000,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                800:{
                    items:3
                },
                1024:{
                    items:4
                },
                1100:{
                    items:4
                },
                // 1200:{
                //     items:5
                // }
            }
        });
    }
}

// Arama linklerine tıklandıktan sonra butonlardaki focus'u kaldırması için 
document.querySelectorAll('a[href^="tel:"], a[href^="https://wa.me/"], a[href^="https://api.whatsapp.com/"]').forEach(function(link) {
    link.addEventListener('click', function() {
        this.blur(); // focus'u kaldır
    });
});

// Call me button visibility on scroll (tel ve wp)
window.addEventListener("scroll", function () {
    const buttons = document.querySelectorAll(".call-me");
    if (window.scrollY > 200) {
      buttons.forEach(btn => btn.classList.add("visible"));
    } else {
      buttons.forEach(btn => btn.classList.remove("visible"));
    }
});

// instance of fuction while Document ready event 
jQuery(document).on('ready', function () {
    (function ($) {
		slider();
        handlePreloader();
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function () {
    (function ($) {
        clientCarousel();
        servicecarousel ();
        brandCarousel ();
    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function () { 
    (function ($) {
        stickyHeader();
        factCounter();
    })(jQuery);
});
