  /*
  ========================================================================
  VERSION : 1.0
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Template Name   : RD-JENNY
  Author          : RAHUL DAS
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Copyright (c) 2018 
  ========================================================================
  */

  (function ($) {
   "use strict";
   jQuery(document).ready(function($){

        //TYPED JS START   
        var typed = new Typed('#typed', {
          stringsElement: '#typed-strings',
          backSpeed: 40,
          typeSpeed:40,
          loop: true,
        });

        // TYPED JS END

        //SCROLL EFFECT START
        $('nav li a').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
            var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
            return false;
          }
        }
      });
     //SCROLL EFFECT END 

           
   //SKILLBAR START 
   $('#skillbar-area4').skillbars({
    style: 2,
    showLevel: true
  });  
   //SKILLBAR END

//WOW JS START
new WOW().init();
//WOW JS END

     //NAVBAR STICK TOP START
     $(document).ready(function(){
      $("#header-area").sticky({topSpacing:0});
    });
       //NAVBAR STICK TOP END
       
       
       
   // IMAGE LOADED JQUERY START     
       
$('.grid').imagesLoaded( function() {
  // images have loaded
    
    
    //PORTFOLIO START  
 var $grid = $('.grid').isotope({
  itemSelector: '.gallery',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.gallery'
  }      
     
})          
// filter items click
$('.portfolio-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});  
 // filter items on button click
 $('.portfolio-filter').on( 'click', 'li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});  
 //PORTFOLIO END
           
    
});
       
 // IMAGE LOADED JQUERY    END   
        
          
     }); //DOCUMENT.READY BACKET CLOSE

      //WINDOW.LOADED START
   jQuery(window).load(function(){

    //PRELOADING START
    $("#preload").delay(350).fadeOut("slow")
       
    //PRELOADING END 

       

  }); //WINDOW>LOAD JS BACKET CLOSE

 }(jQuery)); //JQUERY MAIN  BACKET CLOSE
