var sectionIndex = "";
var sectionText = "";

/*============================================================================*/

$(document).ready( function(){

  /*blazy*/
  var bLazy = new Blazy({
    offset: 100,
    success: function(ele){
    }
  });


/*============================================================================*/


/*錨點移動*/

$('article.dot-dot ul li').eq(0).addClass('current');
$('.dot-dot').onePageNav({
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

      /*判斷在那個區塊然後更改nav顏色*/
      var iiii = $('#navPAGE li.current').index() + 1;
      if ( iiii == 2  ||  iiii == 4  ||  iiii == 5 ) {
        $('article.dot-dot').addClass('blk');
      } else {
        $('article.dot-dot').removeClass('blk');
      }
    },
    begin: function(e) {
      //I get fired when the animation is starting
      //click後啟動
      var txttxt = e.find('.word').text();
      $('.change-word').text(txttxt);
    },
});


/*===========================================================================*/


  /*錨點*/
  $('.start').click(function(event) {
   event.preventDefault();
   $('html,body').animate({
     scrollTop: $('.product').offset().top
   }, 1000);
  });


/*===========================================================================*/


  /*jarallax*/
  $('.jarallax').jarallax({
  		speed  : 0,
  });


/*===========================================================================*/


  /*slick 輪播*/
  $('.carousel').slick({
      rows: 2,
      slidesPerRow: 2,
      dots: true,
      arrows: true,
      prevArrow: '<div class="prev-button icon-arrow"></div>',
      nextArrow: '<div class="next-button icon-arrow"></div>',
      responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesPerRow: 1,
          rows: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesPerRow: 1,
          rows: 1,
          dots: false,
        }
      }
    ]
  });



  /*判斷產品在手機下，文字的變換*/
  judge_when();
  function judge_when(){
    $('div.category').remove();
    if ( $(window).width() <= 640 ) {
      $('article.product').append('<div class="category"><span class="en"></span><span class="ch"></span></div>');
      change_category();
    }else {
      $('div.category').remove();
    }
  }

  change_category();
  function change_category(){
    var en = $('.carousel').find('.slick-current .no-show span.e-t').text();
    var ch = $('.carousel').find('.slick-current .no-show span.c-t').text();
    $('span.en').text(en);
    $('span.ch').text(ch);
  }


  $('.carousel').on('afterChange', function(event, slick, currentSlide){
    change_category();
  });

  $(window).resize(function(){
    judge_when();
  });




  /*banner輪播*/
  $('.slides').slick({
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
  });


/*===========================================================================*/


  /*slide-btn*/
  $('.slide-info').hide();
	$('ul li.slide-btn').on( 'click', function(){
		if ( $(this).hasClass('is-open') ){
			$(this).removeClass('is-open').find('.slide-info').slideUp(500);
      $('.xx').removeClass('change');
		} else {
      $('.xx').removeClass('change');
			$('.slide-info').slideUp(500);
			$('ul li.slide-btn').removeClass('is-open');
			$(this).addClass('is-open').find('.slide-info').slideDown(500);
      $(this).find('.xx').addClass('change');
		}
	});


/*===========================================================================*/





/*===========================================================================*/





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

if ( $('.product').length > 0 ) {
    $('.product').each(function(index, element) {
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

if ( $('.about').length > 0 ) {
    $('.about').each(function(index, element) {

        $(element).waypoint(function() {
            $(element).children().removeClass('work');
            $('#IND3').removeClass('work');
        }, {
            offset: '100%'
        });

    });
};

$('#IND3>*').each(function(index, element) {

    $(element).waypoint(function() {
      $('#IND3').addClass('work');
      $(element).addClass('work');
    }, {
        offset: '95%'
    });

});

/*---------------------------------*/

if ( $('.capability').length > 0 ) {
    $('.capability').each(function(index, element) {

        $(element).waypoint(function() {
          $(element).children().removeClass('work');
        }, {
            offset: '100%'
        });

    });
};

$('#IND4>*').each(function(index, element) {

    $(element).waypoint(function() {
      $(element).addClass('work');
    }, {
        offset: '90%'
    });

});

/*---------------------------------*/

if ( $('.news').length > 0 ) {
    $('.news').each(function(index, element) {

        $(element).waypoint(function() {
            $('#IND5').find('div').removeClass('work');
            $('article.news a').removeClass('work');
        }, {
            offset: '100%'
        });

    });
};

$('#IND5>*').each(function(index, element) {

    $(element).waypoint(function() {
      $(element).find('div').addClass('work');
      if ( $('article.news>section.know>div').hasClass('work') == true ) {
        $('article.news a').addClass('work');
      }
    }, {
        offset: '90%'
    });

});


/*===========================================================================*/


});
