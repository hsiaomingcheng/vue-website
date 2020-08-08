

$(document).ready( function(){


/*============================================================================*/


  /*blazy*/
  var bLazy = new Blazy({
    offset: 100,
    success: function(ele){
    }
  });


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
      // $('.change-word').text(txttxt);

      var check_num = $('ul#navPAGE li.current').attr('data-check');

      if ( check_num == 1) {

        if ( $('article.block-inside section div').hasClass('open') == true ) {
          var data_name = $('article.block-inside section div.open').attr('data-name');
          $('.change-word').text(data_name);
        }
        /*在滾動時，如果check_num = 0，表示目前在方快之外，check_num = 0，表示進入方塊範圍*/
        /*這時候判斷打開的方快是哪個並且抓取該方塊的data_name，作為變換替代的文字*/

      }else {
        $('.change-word').text(txttxt);
      }

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


  /*block control*/
  var block_close_btn = $('article.block-inside section>span.btn-for-close');
  var all_block_div = $('article.block-inside section').children('div');
  var detect_number = 99; /*用來判斷使用者點擊的是否為同一個方塊，
                            避免同個方塊做重複開啟的動作(也就是點同一個方塊，不會有動作)*/

  all_block_div.hide(); //隱藏所有內容方塊
  block_close_btn.hide(); //隱藏方塊關閉按鈕

  /*打開*/
  click_ul_group();

  function click_ul_group(){
    $('ul.group li').off().on('click',function(){

      var block_number = $(this).attr('data-number');
      var block_div = all_block_div.eq(block_number);
      var block_name = $('ul.group li').eq(block_number).find('h2').text();

      if ( detect_number == block_number ) {

      }else {
        detect_number = block_number;
        open_block();
      }

      if ( $(window).width() <= 1006 ) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: $('article.block-inside').offset().top - 80
        }, 1000);
      }

      function open_block(){

        $('.change-word').text(block_name);

        if ( all_block_div.hasClass('open') == false ) {
          block_close_btn.fadeIn(1500);
          block_div.addClass('open');
          block_div.slideDown(
            500,
            "linear",
          );

          $('ul.group li span').eq(block_number).addClass('grow');
        }else {
          all_block_div.removeClass('open');
          all_block_div.hide();
          block_div.addClass('open');
          block_div.fadeIn(500);

          $('ul.group li span').removeClass('grow');
          $('ul.group li span').eq(block_number).addClass('grow');
        }

      }

    });
  }


  /*關閉*/
  block_close_btn.off().on('click',function(){

    detect_number = 99;

    $('.change-word').text('');

    block_close_btn.fadeOut(500);
    all_block_div.slideUp(
      1000,
      "linear",
      function(){
        all_block_div.removeClass('open');
      }
    );

    $('ul.group li span').removeClass('grow');

  });


/*===========================================================================*/


  /*anchor-nav點擊開啟block方塊*/
  click_block();

  function click_block(){
    var anchor_nav_li = $('nav.anchor-nav ul li');

    anchor_nav_li.off().on('click',function(){
      var nid = $(this).find('a').attr('href'),
          data_id = $(this).find('a').attr('data-id'),
          li_name = $(this).find('a').text();

      if ( nid == '#IND3' ) {
        setTimeout(function nav_open_block(){
          open_it();
          $('.change-word').text(li_name);
        }, 1300);
      }
      /*如果點擊的anchor-nav的nid == #IND3 ， 表示使用者點擊了nav裡的四個方塊其中一個*/
      /*此時啟動setTimeout於1.3秒後開啟方塊(1.3秒是為了等待畫面滑至方塊區的時間)*/

      if ( $(window).width() <= 1006 ) {
        $('ul.group').slick( "slickGoTo", data_id );
      }
      /*RWD方塊啟動輪播時anchor-nav的項目一被點擊，方塊的輪播就換到被點擊的相對應方塊*/


      function open_it(){

        var block_div = all_block_div.eq(data_id);

        if ( all_block_div.hasClass('open') == false ) {
          block_close_btn.fadeIn(1500);
          block_div.addClass('open');
          block_div.slideDown(
            500,
            "linear",
          );

          $('ul.group li span').eq(data_id).addClass('grow');
        }else {
          all_block_div.removeClass('open');
          all_block_div.hide();
          block_div.addClass('open');
          block_div.fadeIn(500);

          $('ul.group li span').removeClass('grow');
          $('ul.group li span').eq(data_id).addClass('grow');
        }

      }

    });
  }


/*============================================================================*/


  /*回到block*/
  $('span.back-to-block').off().click(function(event) {
   event.preventDefault();
   $('html,body').animate({
     scrollTop: $('article.block').offset().top - 80
   }, 1000);
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


  /*方塊輪播*/
  $block_slider = $('ul.group');
  settings = {
    // some settings
    centerMode: true,
    variableWidth: true,
    slidesToShow: 1
  }

  if ( $(window).width() < 1006 ) {
    $block_slider.slick(settings);
  }

  // reslick only if it's not slick()
  $(window).on('resize', function() {
    if ($(window).width() < 1006) {
      if (!$block_slider.hasClass('slick-initialized')) {
        $block_slider.slick(settings);
      }
      return
    }

    if ($block_slider.hasClass('slick-initialized')) {
       $block_slider.slick('unslick');
       click_ul_group();
    }
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

    if ( $(window).width() < 1006 ) {
      $slick_slider.slick(settings);
    }

    // reslick only if it's not slick()
    $(window).on('resize', function() {
      if ($(window).width() < 1006) {
        if (!$slick_slider.hasClass('slick-initialized')) {
          $slick_slider.slick(settings);
        }
        return
      }

      if ($slick_slider.hasClass('slick-initialized')) {
         $slick_slider.slick('unslick');
        re_click_move();
        click_block();
      }
    });

  }


  function re_click_move(){
    /*因為reslick的關係，結構會被重構，造成本來的a連結滑動效果無效，所以在reslick後重新呼叫a連結滑動效果*/
      $( "a" ).off().click(function(a) {
        a.preventDefault();
        var aHref = $(this).attr("href");
        var aTarget = $(this).attr("target");			 //存取路徑
        var aArr = aHref.split("/");
        var aFilePath = aArr.pop();
        var aFilePrevPath = aArr.pop();
          var aTargetPath = aFilePath.substr(0,1);         //抓取字串第一字元

        var locHref = location.href;                     //存取目前網址
          var locArr = locHref.split("/");
          var locFilePath = locArr.pop();
          var locFilePrevPath = locArr.pop();
          var locTargetPath = aFilePath.substr(0,1);       //抓取字串第一字元

        if( aFilePath == "" ){ aFilePath = "index.html"; }
          if( locFilePath == "" ){ locFilePath = "index.html"; }
          if( aArr == "" ){ aFilePrevPath = locFilePrevPath; }


        if (aTarget == "_blank") {
          window.open(aHref);                          //傳遞另開視窗路徑至 window.open(aHref)
          aTarget="";

        }else if (aTarget == "_self") {
          window.location.assign(aHref);
          aTarget="";

        }else if ( aFilePrevPath != locFilePrevPath ){
          cgselector.random(aHref);
              aHref="";

        }else if ( aFilePath != locFilePath && aTargetPath != "#" && locTargetPath != "#" && aHref != ""){
          cgselector.random(aHref);
          aHref="";

        }else if( aTargetPath == "#" ){
          //jquery.smooth-scroll//
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html, body').animate(
                  {scrollTop: target.offset().top - 70},
                  {duration:900,easing:'easeInOutCirc'}

                );
              }//end if
          }//end else
      })//end click function
  }


/*===========================================================================*/


/*Certification slick*/
$('ul.certifi-slick').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<div class="prev-button icon-arrow"></div>',
  nextArrow: '<div class="next-button icon-arrow"></div>',
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 640,
      settings: {
        centerMode: true,
        variableWidth: true,
        slidesToShow: 1,
        arrows: false,
      }
    }
  ]
});


$('ul.certifi-slick').on('breakpoint', function(event, slick, breakpoint){
  certifi_lightbox(); //斷點後重啟燈箱
});


/*===========================================================================*/


/*certification lightbox*/
certifi_lightbox();

function certifi_lightbox(){

  var certification_lightbox = $('ul.certifi-slick li img');

  certification_lightbox.off().on('click', function(){

    $.swpmodal({
      type: 'ajax',
      url: '../lightbox/capbility_detail.html',
      closeOnEsc: false,
      closeOnOverlayClick: false,
      overlay: {
            css: {
                backgroundColor: '#fff',
                opacity: 1
            }
        },
      afterLoadingOnShow: function(){
        certification_slick();
        back_top();
      },
    });
  });

}


function certification_slick(){
  $('section.certification-detail ul').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<div class="prev-button icon-arrow"></div>',
    nextArrow: '<div class="next-button icon-arrow"></div>',
  });
}


function back_top(){

    $( ".back-to-top" ).off().click(function(event) {

      event.preventDefault();
      $('.swpmodal-container').animate({ scrollTop: 0 }, 700);

    });
}


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
