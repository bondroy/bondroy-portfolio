function TagScroller (scroller) {
  window.renderer.onRender((offset) => {
    scroller.scrollLeft = offset / 2
  })
}
