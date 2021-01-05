function TagScroller (scroller) {
  const speed = .1
  let offset = 0

  scrollLoop()

  function scrollLoop() {
    offset += ((window.pageYOffset / 2) - parseFloat(offset.toFixed(2))) * speed
    scroller.scrollLeft = offset
    requestAnimationFrame(scrollLoop)
  }
}
