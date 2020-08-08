

$(document).ready( function(){


/*============================================================================*/


  /*blazy*/
  var bLazy = new Blazy({
    offset: 100,
    success: function(ele){
    }
  });


/*============================================================================*/


/*konwledge page 類別切換*/
var section_up = $('article.category section.up'),
    section_down = $('article.category section.down');

  section_up.find('p').off().on('click',function(){
    var data_num = $(this).attr('data-num');

    section_up.find('p').removeClass('show');
    section_up.find('p').eq(data_num).addClass('show');

    section_down.find('ul').removeClass('show');
    section_down.find('ul li').removeClass('show');
    section_down.find('ul').eq(data_num).addClass('show');
    section_down.find('ul').eq(data_num).find('li').eq(0).addClass('show');

    if ( $(window).width() <= 640 ) {
      var clicked_word = $(this).text();
      $('p.de-word').text(clicked_word);
      $('.category section.up div.title').removeClass('show').find('p').slideToggle();
    }
  });


  title_change();

  function title_change(){

    section_down.find('li').off().on('click',function(){

      if ( $(window).width() > 768 ) {

        section_down.find('li').removeClass('show');
        $(this).addClass('show');

        // alert('11111');

      }else {
        // section_down.find('li').removeClass('show');
        // $(this).removeClass('show');
        // alert('222222');
      }
    });
  }


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

  if ( $(window).width() <= 768 ) {
    section_down.find('li').removeClass('show');
    $slick_slider.slick(settings);
  }

  // reslick only if it's not slick()
  $(window).on('resize', function() {
    if ($(window).width() <= 768) {
      if (!$slick_slider.hasClass('slick-initialized')) {

        $slick_slider.slick(settings);

        section_down.find('li').removeClass('show');

      }
      return
    }else {
      if ($slick_slider.hasClass('slick-initialized')) {

        var title_now = section_down.find('ul.show div.slick-current').attr('data-slick-index');  //抓現在這個代號

        $slick_slider.slick('unslick'); //解除slick(破壞結構)

        section_down.find('ul.show li').eq(title_now).addClass('show'); //把現在代號重新塞入li

        title_change();

      }
    }

  });

}


/*============================================================================*/


/*呼叫search*/
$('div.search span').off().on('click',function(){
  if ( $('section.search-bar').hasClass('show') == true ) {
    $(this).removeClass('show');
    $('section.search-bar').removeClass('show');
  }else {
    $(this).addClass('show');
    $('section.search-bar').addClass('show');
  }
});

$(document).click(function(e) {
    // debugger;
     if (!$('div.search span').is(e.target) && !$('section.search-bar div input').is(e.target) ) {
        $('div.search span').removeClass('show');
        $('section.search-bar').removeClass('show');
     }
 });


/*===========================================================================*/

  /*類別下拉*/
  cato();

  $(window).resize(function(){
    cato();
  });

  function cato(){
    if ( $(window).width() <= 640 ) {
      var default_word = $('.category section.up div.title').find('p.show').text();

      if ( $('p.de-word').size() < 1 ) {
        $('section.up').append('<p class="de-word">'+default_word+'</p>');
      }

      /*<640*/
      $('.category section.up div.title').find('p').hide();

      $('p.de-word').off().on('click',function(){
        $('.category section.up div.title').addClass('show').find('p').slideToggle();
      });

      // $('.category section.up div.title').find('p').off().on('click',function(){
      //   var clicked_word = $(this).text();
      //
      //   $('.category section.up div.title').removeClass('show').find('p').slideToggle();
      //   $('p.default-word').text(clicked_word);
      // });

    }else {
      $('p.de-word').remove();
      $('.category section.up div.title').find('p').show();
    }
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





/*===========================================================================*/





/*===========================================================================*/





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
