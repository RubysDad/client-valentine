(($) ->
    # Setup variables
    
    adjustWindow = ->
        # Init Skrollr
        s = skrollr.init(forceHeight: false)
        # Get window size
        winH = $window.height()
        # Keep minimum height 550
        if winH <= 550
            winH = 550
        # Resize our slides
        $slide.height winH
        #refresh skrollr after resizing our sections
        s.refresh $('.homeSlide')
        return
        
    $window = $(window)
    $slide = $('.homeSlide')
    $body = $('body')
    # FadeIn all sections
    $body.imagesLoaded ->
        setTimeout (->
            # Resize sections
            adjustWindow()
            # Fade in sections
            $body.removeClass('loading').addClass 'loaded'
            return
        ), 800
        return
    return
) jQuery