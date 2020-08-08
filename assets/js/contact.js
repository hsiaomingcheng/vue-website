

$(document).ready( function(){


/*============================================================================*/


  /*blazy*/
  var bLazy = new Blazy({
    offset: 100,
    success: function(ele){
    }
  });


/*============================================================================*/


/*change驗證碼預設文字*/
$(window).resize(function(){
  change_placeholder();
});

change_placeholder();
function change_placeholder(){

  if ( $(window).width() <= 380 ) {
    $('input.code-place').attr('placeholder','請填驗證碼');
  }else {
    $('input.code-place').attr('placeholder','點選圖片即可更換新的驗證碼');
  }

}


/*===========================================================================*/


/*表格動畫*/
var service_label = $('article.requset-service form>ul>li input, .dropdown, textarea'),
    service_li = $('article.requset-service form>ul>li');

service_label.on('click',function(){
  service_li.removeClass('grow');
  $(this).closest('li').addClass('grow');
});

/*點擊表格已外範圍 取消表格動畫*/
$(document).off().click(function(e) {
     if ( !$('form.work ul li, form.work ul li>*, .dropdown>*').is(e.target) ) {
       if ( service_li.hasClass('grow') == true ) {
         service_li.removeClass('grow');
       }
     }
 });



/*============================================================================*/





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


/*waypoint*/
/*---------------------------------*/

$('.contact-title').each(function(index, element) {

    $(element).waypoint(function() {
      $(element).addClass('work');
    }, {
        offset: '90%'
    });

});

/*---------------------------------*/

$('.contact-company').each(function(index, element) {

    $(element).waypoint(function() {
      $(element).addClass('work');
    }, {
        offset: '90%'
    });

});

/*---------------------------------*/

$('.requset-service section>*').each(function(index, element) {

    $(element).waypoint(function() {
      $(element).addClass('work');
    }, {
        offset: '100%'
    });

});


/*===========================================================================*/


});
