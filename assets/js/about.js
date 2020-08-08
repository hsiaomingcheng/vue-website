

$(document).ready( function(){


/*============================================================================*/


  /*blazy*/
  var bLazy = new Blazy({
    offset: 100,
    success: function(ele){
    }
  });


/*============================================================================*/


/*market map*/
$('li.local').on('click',function(){
  $(this).parent().find('li').removeClass('show');
  $(this).addClass('show');
  if ( $('li.cn').hasClass('show') == true ) {
    $('li.cn').addClass('show');
  }
});


// var po = $('li.tw').getOffset();
//
// function getOffset(el) {
//   el = el.getBoundingClientRect();
//   return {
//     left: el.left + window.scrollX,
//     top: el.top + window.scrollY
//   }
// }



// var c=document.getElementById("canvas");
// var ctx=c.getContext("2d");
// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(100,150);
// ctx.stroke();


/*===========================================================================*/


  /*地圖 下拉*/
  if ( $(window).width() <= 503 ) {
    market_hide();
  }

  $(window).resize(function(){
    if ( $(window).width() <= 503 ) {
      market_hide();
    }else {
      $('div.country>ul').show();
    }
  });

  function market_hide(){

    $('div.country>ul').hide();

    $('div.country>p').off().on( 'click', function(){

      if ( $(this).hasClass('is-open') ){

        $(this).removeClass('is-open').closest('div').find('ul').slideUp(500);
        $(this).find('.xx').removeClass('change');

      } else {

        $('div.country>ul').slideUp(500);
        $('div.country>p').removeClass('is-open');
        $('.xx').removeClass('change');
        $(this).addClass('is-open').closest('div').find('ul').slideDown(500);
        $(this).find('.xx').addClass('change');

      }

    });

  }


/*============================================================================*/


  /*錨點移動*/
  $('.dot-dot, .anchor-nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing',
      scrollChange: function(e) {
        /*更換文字*/
        var txttxt = e.find('.word').text();
        $('.change-word').text(txttxt);

      },
      begin: function(e) {
    		//I get fired when the animation is starting
        //click後啟動
        var txttxt = e.find('.word').text();
        $('.change-word').text(txttxt);
    	},
      end: function() {
    		//I get fired when the animation is ending
        //click後啟動
    	},
  });


  /*dot-dot的出現*/
  $(window).resize(function(){
    judge_dot();
  });

  judge_dot();
  function judge_dot(){

    if ( $(window).width() <= 767 ) {
      $('article.dot-dot').hide()
    }else {
      dot_show();
    }

  }

  function dot_show(){

    $('article.dot-dot').hide()

    $(window).scroll(function() {

      var nav = $('article.dot-dot'),
          scroll = $(window).scrollTop(),
          banner_h = $('article.banner').height() / 2;

          if (scroll >= banner_h) {
            nav.fadeIn();
          }else {
            nav.fadeOut();
          }
    });

  }


/*===========================================================================*/


  /*錨點*/
  $('.start').click(function(event) {
   event.preventDefault();
   $('html,body').animate({
     scrollTop: $('.anchor-nav').offset().top - 50
   }, 1000);
  });


/*===========================================================================*/


  /*nav輪播*/

  anchor_nav();
  function anchor_nav(){

    $slick_slider = $('.anchor-nav ul');
    settings = {
      // some settings
      centerMode: true,
      variableWidth: true,
      slidesToShow: 1
    }

    if ( $(window).width() < 768 ) {
      $slick_slider.slick(settings);
    }

    // reslick only if it's not slick()
    $(window).on('resize', function() {
      if ($(window).width() < 768) {
        if (!$slick_slider.hasClass('slick-initialized')) {
          $slick_slider.slick(settings);
        }
        return
      }

      if ($slick_slider.hasClass('slick-initialized')) {
        return $slick_slider.slick('unslick');
      }
    });

  }


  // nav_slick();

  // 畫面resize時載入
  // $(window).resize(function(){
  //   if ( $(window).width() <= 767 ) {
  //     $('.anchor-nav ul').slick("unslick");
  //     nav_slick();
  //   }
  // });

  // function nav_slick(){
  //
  //   if ( $(window).width() <= 767 ) {
  //
  //     $('.anchor-nav ul').slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       responsive: [
  //         {
  //           breakpoint: 768,
  //           settings: "unslick"
  //         },
  //         {
  //           breakpoint: 767,
  //           settings: {
  //             centerMode: true,
  //             variableWidth: true,
  //             slidesToShow: 1
  //           }
  //         },
  //         {
  //           breakpoint: 480,
  //           settings: {
  //             centerMode: true,
  //             variableWidth: true,
  //             slidesToShow: 1
  //           }
  //         }
  //       ]
  //     });
  //
  //   }
  //
  // }



  /*slick 輪播*/
  $('.slide-pic').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slide-date',
    appendArrows: $('.banner_ar'),
    prevArrow: $('.banner_arL'),
    nextArrow: $('.banner_arR'),
  });

  $('.slide-date').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slide-pic',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 785,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 497,
        settings: {
          centerMode: true,
          variableWidth: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  });



  change_history();
  function change_history(){
    var num = $('.slide-date').find('.slick-current .hide-text span').text();
    var word = $('.slide-date').find('.slick-current .hide-text p').text();
    $('.show-word span').text(num);
    $('.show-word p').text(word);
  }

  $('.slide-date').on('afterChange', function(event, slick, currentSlide){
    // var num = $(this).find('.slick-current .hide-text span').text();
    // var word = $(this).find('.slick-current .hide-text p').text();
    // $('.show-word span').text(num);
    // $('.show-word p').text(word);
    change_history();
  });


  $('ul.slide-date li').css({
    'display':'flex'
  });

  $(window).resize(function(){
    $('ul.slide-date li').css({
      'display':'flex'
    });
  });


/*===========================================================================*/





/*===========================================================================*/


/*方塊出現*/
$('div.small').mouseenter(function(){
    $(this).closest('section').find('div').removeClass('open');
    $(this).parent().addClass('open');
});
$('div.big').mouseleave(function(){
    $('section.block>div').removeClass('open');
});


/*方塊下拉*/
// $('div.small').on('click',function(){
//   $(this).closest('section').find('div').removeClass('open');
//   $(this).parent().addClass('open');
// });

/*收起方塊*/
// $(document).click(function(e) {
//      if ( !$('div.big , div.big>*').is(e.target) && !$('div.small , div.small>*').is(e.target) ) {
//        if ( $('section.block>div').hasClass('open') == true ) {
//          $('section.block>div').removeClass('open');
//        }
//      }
//  });


/*===========================================================================*/


/*about nav黏在上*/
  $(window).resize(function(){
    if ( $(window).width() < 1480 ) {
      $('header nav ul').removeClass('go-hide');
      $('nav.anchor-nav ul').removeClass('go-hide');
    }else {
      nav_sticky();
    }
  });

  nav_sticky();
  function nav_sticky(){

    $(window).scroll(function() {

      var nav = $('nav.anchor-nav ul'),
          scroll = $(window).scrollTop(),
          banner_h = $('article.banner').height();

      if ( $(window).width() >= 1480 ) {

        if (scroll >= banner_h) {
          nav.addClass('go-hide');
        }else {
          nav.removeClass('go-hide');
        }

      }

    });

  }


/*===========================================================================*/


/*waypoint*/

if ( $('.product').length > 0 ) {
    $('.product>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('delay-15s animated-slow fadeIn');
        }, {
            offset: '100%'
        });
    });
};

if ( $('.about').length > 0 ) {
    $('.about>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('delay-10s animated-slow fadeIn');
        }, {
            offset: '100%'
        });
    });
};

if ( $('.capability').length > 0 ) {
    $('.capability>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('delay-10s animated-slow fadeIn');
        }, {
            offset: '100%'
        });
    });
};

if ( $('.news').length > 0 ) {
    $('.news>*').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).addClass('delay-10s animated-slow fadeIn');
        }, {
            offset: '100%'
        });
    });
};


/*===========================================================================*/


});
