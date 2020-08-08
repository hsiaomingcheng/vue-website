

$(document).ready( function(){


/*============================================================================*/


  /*blazy*/
  var bLazy = new Blazy({
    offset: 50,
    success: function(ele) {
        $(ele).addClass('animated-slow fadeInUp');
        $(ele).closest('div.box').find('div.intro').addClass('show');
        Waypoint.refreshAll();
      }
  });


/*============================================================================*/


$(document).ready(function() {

    if ($('.frame').size() > 0) {
        var masonryOptions = {
          itemSelector: '.grid-item',
          columnWidth: '.grid-sizer',
          percentPosition: true,
        };
        var $grid = $('.frame').masonry( masonryOptions );
        var isActive = true;

        $grid.imagesLoaded().progress(function() {
            $grid.masonry('layout');
        });
        var bLazy = new Blazy({
            success: function(ele) {
                $grid.masonry('layout');
                // $(ele).closest('div.box').addClass('animated-slow fadeInUp');
            }
        });
    }

});


/*===========================================================================*/





/*============================================================================*/


/*anchor-nav show*/
$(window).scroll(function() {
  var navshow = $('nav.anchor-nav'),
      scroll = $(window).scrollTop();
  if (scroll >= 150) {

    if ( navshow.hasClass('open') == false ) {

      navshow.addClass('open');

    }
  }
});


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


/*===========================================================================*/





/*===========================================================================*/





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
bh_animate();
function bh_animate(){
  $('.banner').addClass('work');
}


$(window).scroll(function(){
  var scrollTop = $(this).scrollTop(),
      screen_H = $(window).height();

  if ( scrollTop > screen_H ) {
    $('.banner').removeClass('work');
  }else {
    $('.banner').addClass('work');
  }

});

/*---------------------------------*/

if ( $('.about').length > 0 ) {
    $('.about').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).children().removeClass('work');
        }, {
            offset: '100%'
        });
    });
};

$('#IND2>*').each(function(index, element) {

    $(element).waypoint(function() {
      $(element).addClass('work');
    }, {
        offset: '90%'
    });

});

/*---------------------------------*/

if ( $('.service').length > 0 ) {
    $('.service section').each(function(index, element) {
        $(element).waypoint(function() {
            $(element).children().removeClass('work');
        }, {
            offset: '100%'
        });
    });
};

$('#IND4 section>*').each(function(index, element) {

    $(element).waypoint(function() {
      $(element).addClass('work');
    }, {
        offset: '90%'
    });

});



/*===========================================================================*/


});
