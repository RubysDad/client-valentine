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
    
    // Keep minimum height 550
    if(winH <= 550) {
      winH = 550;
    }
     
    // Resize our slides
    $slide.height(winH);
    
    // Refresh skrollr after resizing our sections
    s.refresh($('.homeSlide'));
    
  }
  
  enquire.register("screen and (min-width : 768px)", initAdjustWindow(), false);

  
  
  
} )( jQuery );
