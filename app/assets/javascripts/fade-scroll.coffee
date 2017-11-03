$ ->
  documentEl = $(document)
  fadeElem = $('.fade-scroll')
  documentEl.on 'scroll', ->
    currScrollPos = documentEl.scrollTop()
    fadeElem.each ->
      $this = $(this)
      elemOffsetTop = $this.offset().top
      if currScrollPos > elemOffsetTop
        $this.css 'opacity', 1 - ((currScrollPos - elemOffsetTop) / 400)
      return
    return
  return