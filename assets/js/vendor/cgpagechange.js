///////////////////////////////////////
//            轉場href判斷 		     //
///////////////////////////////////////
$(window).load(function() {

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
});//end ready


///////////////////////////////////////
//        Animlate selecor JQ		 //
///////////////////////////////////////

var cgselector = {

	random : function(href){
		var cgnumber = Math.floor((Math.random() * 3) + 1);
		switch(cgnumber){
	        case 1 :
	        	pagechange.CG_A(href);
				aHref="";
	        	// alert("1");
				break ;
	        case 2 :
	        	pagechange.CG_A(href);
				aHref="";
				// alert("2");
	        	break ;
	        case 3 :
	        	pagechange.CG_A(href);
				aHref="";
				// alert("3");
	        	break ;
	        default:
	        	alert("4");
	    }
    }
}//end function



///////////////////////////////////////
//           cgpagechangeA		     //
///////////////////////////////////////

var pagechange = {

    //CG A////////////
	CG_A : function(href){
		navfunction.close();
		$( "body" ).css({ "overflow-y":"hidden"});
		$( "main" ).append( "<div id='cgAbox'><div class='cgA1'></div><div class='cgA2'><img src='../../assets/img/logo.png'></div></div>");

		$( "#cgAbox" ).show();
		// $( "body" ).delay(200).animate(
		// 	{ opacity:".4",},
		//   	{ queue: true,duration: 1000, easing: "easeOutQuint"
		//     });
		$( ".cgA1" ).delay(700).animate(
			{ left:"0"},
		  	{ queue: true,duration: 500, easing: "easeOutSine"
		    });
		$( ".cgA2" ).delay(900).animate(
			{ opacity:"1"},
				 { queue: true,duration: 900, easing: "easeOutSine"
				  });
		$( "body" ).delay(1200).animate(
			{ opacity:"0", backgroundColor:"#ffffff"},
		  	{ queue: true,duration: 500, easing: "easeOutQuad",
		  		complete: function() {

			  		// alert("complate");
			  		setTimeout(function() {
			  			window.location.assign(href);
			  		}, 600);

			  	}//end complate
	    });//end last animate
	},//end CG_A

    //CG B////////////
	CG_B : function(href){
		navfunction.close();
		$( "body" ).css({ "overflow-y":"hidden"});
		$( "main" ).append( "<div id='cgBbox'><div class='cgB1'></div><div class='cgB2'></div></div>");

		$( "#cgBbox" ).show();
		$( "body" ).delay(200).animate(
			{ opacity:".4",},
		  	{ queue: true,duration: 1000, easing: "easeOutQuint"
		    });
		$( ".cgB1" ).delay(800).animate(
			{ top:"0"},
		  	{ queue: true,duration: 1000, easing: "easeOutSine"
		    });
		$( ".cgB2" ).delay(800).animate(
			{ bottom:"0"},
		  	{ queue: true,duration: 1000, easing: "easeOutSine"
		    });
		$( ".cgB1" ).delay(900).animate(
			{ opacity:"0"},
		  	{ queue: true,duration: 800, easing: "easeOutSine"
		    });
		$( ".cgB2" ).delay(900).animate(
			{ opacity:"0"},
		  	{ queue: true,duration: 800, easing: "easeOutSine"
		    });
		$( "body" ).delay(1200).animate(
			{ opacity:"0"},
		  	{ queue: true,duration: 200, easing: "easeOutQuad",
		  		complete: function() {

			  		// alert("complate");
			  		setTimeout(function() {
			  			window.location.assign(href);
			  		}, 200);

			  	}//end complate
		});//end last animate
	}, //end CG_B

    //CG C////////////
	CG_C : function(href){
		navfunction.close();
		$( "body" ).css({ "overflow-y":"hidden"});
		$( "main" ).append( "<div id='cgCbox'><div class='cgC1'></div><div class='cgC2'></div></div>");

		$( "#cgCbox" ).show();
		$( ".cgC1" ).delay(300).animate(
			{ top:"0"},
		  	{ queue: true,duration: 700, easing: "easeOutSine"
		    });
	    $( ".cgC2" ).delay(300).animate(
			{ top:"0"},
		  	{ queue: true,duration: 700, easing: "easeOutSine"
		    });
		$( ".cgC1" ).delay(300).animate(
			{ width:"100vw"},
		  	{ queue: true,duration: 1000, easing: "easeOutSine"
		    });
		$( ".cgC2" ).delay(300).animate(
			{ width:"100vw"},
		  	{ queue: true,duration: 1000, easing: "easeOutSine"
		    });
		$( "body" ).delay(2000).animate(
			{ opacity:"0"},
		  	{ queue: true,duration: 200, easing: "easeOutQuad",
		  		complete: function() {

			  		// alert("complate");
			  		setTimeout(function() {
			  			window.location.assign(href);
			  		}, 400);

			  	}//end complate
	    });//end last animate
	}, //end CG_C
}//end function
