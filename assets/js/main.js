var navfunction;

$(document).ready( function(){


/*============================================================================*/


  ///////////////////////////////////////
	//             nav setting	         //
	///////////////////////////////////////

  //選單開關動作
	//navfunction////////////
	navfunction = {

		open : function() {
	        $( "body" ).css({ overflowY:"hidden"});
			    // $("#_navnormal").removeClass("_reactiv").addClass("_actived");
	        // $("#_navopen").addClass("_open").removeClass("_close");
          $('article.menu').addClass('open');
          $('article.menu').removeClass('close');
    },

	// Nav Close////////////
    close : function() {
	       $( "body" ).css({ overflowY:"auto"});
        //  $("#_navopen").removeClass("_open").addClass("_close");
   		 //   $("#_navnormal").removeClass("_actived").addClass("_reactiv");
         $('article.menu').removeClass('open');
         $('article.menu').addClass('close');
		}

  }//end navfunction


    $("#_navnormal").off().click(function(){
		    navfunction.open();
	  });

  	// $("#_footernavnormal").off().click(function(e){
  	// 	e.preventDefault();
  	// 	var href = $(this).attr("href");
  	// 	navfunction.open();
  	// });

  	$("#_overlay").off().click(function(){
  		navfunction.close();
  	});

  	$("#_navboxicon").off().click(function(){
  		navfunction.close();
  	});


/*============================================================================*/


  //header fix to top
  $(window).scroll(function() {
    var navSticky = $('header'),
        scroll = $(window).scrollTop();
    if (scroll >= 200) {

      if ( navSticky.hasClass('navFixed') == false ) {

        navSticky.removeClass('close');
        navSticky.addClass('navFixed');

        setTimeout(function() {
          navSticky.addClass('open');
        }, 600);

      }
    }else {

      if ( navSticky.hasClass('navFixed') == true ) {

        navSticky.removeClass('open');
        navSticky.addClass('close');

        setTimeout(function() {
          navSticky.removeClass('navFixed');
        }, 600);

      }

    }
  });


/*============================================================================*/


/*共用lightbox*/




$(window).load(function(){
  /*法規燈箱*/
  var rule_lightbox = $('section.rule li, article.menu>section ul.last-new, .billboard-rule , .pic-word');

  rule_lightbox.off().on('click', function(){

    $.swpmodal({
      type: 'ajax',
      url: '../lightbox/new_detail.html',
      closeOnEsc: false,
      closeOnOverlayClick: false,
      overlay: {
            css: {
                backgroundColor: '#fff',
                opacity: 1
            }
        },
      afterLoadingOnShow: function(){
        back_top();
      },
    });
  });


  /*知識燈箱*/
  var know_lightbox = $('section.know li, .billboard-know, .pic-word');

  know_lightbox.off().on('click', function(){

    $.swpmodal({
      type: 'ajax',
      url: '../lightbox/new_detail2.html',
      closeOnEsc: false,
      closeOnOverlayClick: false,
      overlay: {
            css: {
                backgroundColor: '#fff',
                opacity: 1
            }
        },
      afterLoadingOnShow: function(){
        back_top();
      },
    });
  });


  /*隱私權燈箱*/
  var privacy_lightbox = $('a.privacy-btn');

  privacy_lightbox.off().on('click', function(){

    $.swpmodal({
      type: 'ajax',
      url: '../lightbox/privacy.html',
      closeOnEsc: false,
      closeOnOverlayClick: false,
      overlay: {
            css: {
                backgroundColor: '#fff',
                opacity: 1
            }
        },
      afterLoadingOnShow: function(){
        $('section.privacy').waypoint(function() {
            $('section.privacy').addClass('grow'); //加入privacy動畫
        }, {
            offset: '100%'
        });
      },
    });
  });

});


/*product lightbox*/
function active_lightbox(){
  $.swpmodal({
    type: 'ajax',
    url: '../lightbox/product_detail.html',
    closeOnEsc: false,
    closeOnOverlayClick: false,
    overlay: {
          css: {
              backgroundColor: '#fff',
              opacity: 1
          }
      },
    afterLoadingOnShow: function(){
      back_top();
    },
  });
}

p_lightbox();
function p_lightbox(){

  $('article.block div.box').off().on('click',function(){
    if ( $(window).width() >= 768 && $(window).width() <= 1024 ) {

      if ( $(this).hasClass('open') == true ) {

        $('article.block div.box').removeClass('open');
        active_lightbox();

      }else {

        $('article.block div.box').removeClass('open');
        $(this).addClass('open');

      }

    }else {
      active_lightbox();
    }
  });

}
/*product lightbox end*/


/*首頁product_lightbox*/
function carousel_product(){
  if ( $(window).width() < 768 ) {
    $('ul.small-block li').off().on('click',function(){
      $.swpmodal({
        type: 'ajax',
        url: '../lightbox/product_detail.html',
        closeOnEsc: false,
        closeOnOverlayClick: false,
        overlay: {
              css: {
                  backgroundColor: '#fff',
                  opacity: 1
              }
          },
        afterLoadingOnShow: function(){
          back_top();
        },
      });
    });
  }else {
    $('.no-show').off().on('click',function(){
      $.swpmodal({
        type: 'ajax',
        url: '../lightbox/product_detail.html',
        closeOnEsc: false,
        closeOnOverlayClick: false,
        overlay: {
              css: {
                  backgroundColor: '#fff',
                  opacity: 1
              }
          },
        afterLoadingOnShow: function(){
          back_top();
        },
      });
    });
  }
}

$('.carousel').on('breakpoint', function(event, slick, breakpoint){
  carousel_product();
});


$(window).load(function(){
  carousel_product();
});
/*首頁product_lightbox end*/


function back_top(){

    $( ".back-to-top" ).off().click(function(event) {

      event.preventDefault();
      $('.swpmodal-container').animate({ scrollTop: 0 }, 700);

    });
}


/*============================================================================*/


  ///////////
  //footer///
  ///////////
  //contact-mail
  $('footer section .mail').on('click',function(){
    if ( $('footer section.contact-us').hasClass('open') == true ) {
      $('footer section.contact-us').removeClass('open');
      $('footer section.contact-us').slideUp(
        500,
        "linear",
        function(){
          $('footer section .mail').closest('section').removeClass('grow-line');
        }
      );
    }else {
      $('footer section.contact-us').addClass('open');
      $('footer section.contact-us').slideDown(
        500,
        "linear",
        function(){
          $('footer section .mail').closest('section').addClass('grow-line');
        }
      );
    }
  });


  //select-menu
  $('.select-menu').hide();
  $('.list-div').off('click').on('click',function(){
    $(this).find('p.default-word').toggleClass('open');
    if ( $('.list-div p').hasClass('open') == true ) {
      $('.select-menu').fadeIn();
    }else {
      $('.select-menu').fadeOut();
    }
  });

  /*收起下拉選單*/
  $(document).click(function(e) {
      // debugger;
       if (!$('.select-menu').is(e.target) && !$('.list-div, .default-word, .cross').is(e.target) ) {
          $('.select-menu').fadeOut();
          $('p.default-word').removeClass('open');
       }
   });

  //下拉選單點擊後的文字更換
  $('ul.select-menu li').on('click',function(){
    var tt = $(this).text();
    $('.default-word').text(tt);
  });


/*============================================================================*/





/*============================================================================*/


/*waypoint*/
/*banner動畫*/
$('.banner, header').waypoint(function() {
    $('.banner').addClass('animated-slow fadeIn');
    // $('header').addClass('delay-05s animated-slow fadeIn');
    $('article.banner section div a>div').addClass('delay-08s animated-slow fadeIn');
    // $('article.banner p.start, article.dot-dot').addClass('delay-10s animated-slow fadeIn');
}, {
    offset: '100%'
});

/*banner and header 動畫*/
$('header').addClass('work');
$('article.dot-dot').addClass('work');


/*main動畫*/
if ( $('main').length > 0 ) {
    $('#IND2, #IND3, #IND4, #IND5').each(function(index, element) {
        $(element).waypoint(function() {
            // $(element).addClass('animated-slow fadeInUp');

            // $('#IND2, #IND3, #IND4, #IND5').removeClass('current');
            // $(element).addClass('current');
        }, {
            offset: '90%'
        });
    });
};


/*footer動畫*/
$('footer').waypoint(function() {
    $('footer').addClass('animated-slow fadeIn');
}, {
    offset: '100%'
});
$('footer>*').each(function(index, element) {
  $(element).waypoint(function() {
      $(element).addClass('delay-10s animated-slow fadeIn');
  }, {
      offset: '100%'
  });
});


/*============================================================================*/



});
