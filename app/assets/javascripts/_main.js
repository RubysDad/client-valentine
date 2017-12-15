( function( $ ) {
  
  $(function() {var s = skrollr.init();})
 
  
  // Setup variables
  $window = $(window);
  $slide = $('.homeSlide');
  $slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
  $body = $('body');
  
  // FadeIn all sections
  $body.imagesLoaded( function() {
          setTimeout(function() {
            
            // Resize sections
            adjustWindow();
            
            // Fade in sections
            $body.removeClass('loading').addClass('loaded');
            
          }, 800);
  });
  
  function adjustWindow(){
    
    // Init Skrollr
    var s = skrollr.init({
      	forceHeight: false
    });
    
    // Get window size
    winH = $window.height();
    winH = $window.width();
    
    // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    }
     
    // Init Skrollr for 768 and up
    if( winW >= 768) {
 
        // Init Skrollr
        var s = skrollr.init({
            forceHeight: false
        });
 
        // Resize our slides
        $slide.height(winH);
 
        s.refresh($('.homeSlide'));
 
    } else {
 
        // Init Skrollr
        var s = skrollr.init();
        s.destroy();
    }
 
    // Check for touch
    if(Modernizr.touch) {
 
        // Init Skrollr
        var s = skrollr.init();
        s.destroy();
    }
    
  }
  
  function initAdjustWindow() {
    return {
        match : function() {
            adjustWindow();
        },
        unmatch : function() {
            adjustWindow();
        }
    };
  }
 
  enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);


  
  
  
} )( jQuery );
