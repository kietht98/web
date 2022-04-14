/******************************************
    File Name: custom.js
*******************************************/

"use strict";

/**== wow animation ==**/

new WOW().init();

/**== loader js ==*/

$(window).load(function () {
  $(".bg_load").fadeOut("slow");
});

/**== Menu js ==**/

$("#navbar_menu").menumaker({
  title: "Menu",
  format: "multitoggle",
});

/** counter js **/

$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

/** progress_bar js **/

$(document).ready(function () {
  $(".progress .progress-bar").css("width", function () {
    return $(this).attr("aria-valuenow") + "%";
  });
});

/** Casestudies Tab_bar js **/

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

/**===== Slider =====**/

var tpj = jQuery;
var revapi4;
tpj(document).ready(function () {
  if (tpj("#rev_slider_4_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_4_1");
  } else {
    revapi4 = tpj("#rev_slider_4_1")
      .show()
      .revolution({
        sliderType: "standard",
        jsFileLocation: "revolution/js/",
        sliderLayout: "fullwidth",
        dottedOverlay: "none",
        delay: 7000,
        navigation: {
          keyboardNavigation: "off",
          keyboard_direction: "horizontal",
          mouseScrollNavigation: "off",
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
            swipe_threshold: 75,
            swipe_min_touches: 1,
            swipe_direction: "horizontal",
            drag_block_vertical: false,
          },
          arrows: {
            style: "zeus",
            enable: true,
            hide_onmobile: true,
            hide_under: 600,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 30,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 30,
              v_offset: 0,
            },
          },
          bullets: {
            enable: true,
            hide_onmobile: true,
            hide_under: 600,
            style: "metis",
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            direction: "horizontal",
            h_align: "center",
            v_align: "bottom",
            h_offset: 0,
            v_offset: 30,
            space: 5,
            tmp: '<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>',
          },
        },
        viewPort: {
          enable: true,
          outof: "pause",
          visible_area: "80%",
        },
        responsiveLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [700, 700, 500, 400],
        lazyType: "none",
        parallax: {
          type: "mouse",
          origo: "slidercenter",
          speed: 2000,
          levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
        },
        shadow: 0,
        spinner: "off",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        },
      });
  }
});

$(document).ready(function () {
  $("#news-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [980, 2],
    itemsMobile: [600, 1],
    navigation: true,
    navigationText: ["", ""],
    pagination: true,
    autoPlay: false,
  });
});
/**===== End slider =====**/
$('img[data-enlargeable]').addClass('img-enlargeable').click(function() {
    var src = $(this).attr('src');
    var modal;
  
    function removeModal() {
      modal.remove();
      $('body').off('keyup.modal-close');
    }
    modal = $('<div>').css({
      background: 'RGBA(0,0,0,.5) url(' + src + ') no-repeat center',
      backgroundSize: 'contain',
      width: '100%',
      height: '100%',
      position: 'fixed',
      zIndex: '10000',
      top: '0',
      left: '0',
      cursor: 'zoom-out'
    }).click(function() {
      removeModal();
    }).appendTo('body');
    //handling ESC
    $('body').on('keyup.modal-close', function(e) {
      if (e.key === 'Escape') {
        removeModal();
      }
    });
  });
/** header fixed js **/

$(window).scroll(function () {
  if ($(window).scrollTop() >= 300) {
    $(".header_fixed_on_scroll").addClass("fixed-header");
  } else {
    $(".header_fixed_on_scroll").removeClass("fixed-header");
  }
});


// var btn = document.querySelector('.button');
// var buttonWrapper = document.querySelectorAll('.button-wrapper');
 
// btn.addEventListener('click', function(){
  
//   if(btn.classList.contains('animation')) {
//     btn.classList.remove('animation');
//   } else {
//     btn.classList.add('animation');
//   }
  
//   for (var i = 0; i < buttonWrapper.length; i++ ) {
//     if(buttonWrapper[i].classList.contains('animation')){
//       buttonWrapper[i].classList.remove('animation');   
//     } else {
//       buttonWrapper[i].classList.add('animation');
//     }  
//   }
  
// });


var angleStart = -360;
 
// rotate animation
function rotate(li,d) {
    $({d:angleStart}).animate({d:d}, {
        step: function(now) {
            $(li)
               .css({ transform: 'rotate('+now+'deg)' })
               .find('label')
                  .css({ transform: 'rotate('+(-now)+'deg)' });
        }, duration: 0
    });
}
 
// show / hide
function toggleOptions(s) {
    $(s).toggleClass('open');
    var li = $(s).find('li');
    var deg = $(s).hasClass('half') ? -150/(li.length-1) : -180/li.length;
    for(var i=0; i<li.length; i++) {
        var d = $(s).hasClass('half') ? (i*deg)-90 : i*deg;
        $(s).hasClass('open') ? rotate(li[i],d) : rotate(li[i],angleStart);
    }
}
 
$('.circle button').click(function(e) {
    toggleOptions($(this).parent());
});
 
setTimeout(function() { toggleOptions('.circle'); }, 100);

var btn = $('#button-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

