function TagScroller (scroller) {
  const screenProgress = new ScreenProgress(scroller, { firstEl: true })
  const track = scroller.querySelector('.tag-scroller__track')
  let offsetLeft = track.scrollWidth - window.innerWidth


  screenProgress.onProgress((progress) => {
    // before
    if (progress < -.1) track.style.opacity = 0
    // after
    if (progress > .76) track.style.opacity = 0

    screenProgress.step(progress, -.1, 0, (progress) => {
      track.style.opacity = progress
    })
    screenProgress.step(progress, .66, .76, (progress) => {
      track.style.opacity = 1 - progress
    })
    screenProgress.step(progress, -.1, .76, (progress) => {
      track.style.transform = `translateY(5rem) translatey(${-10 * progress}rem)`
      track.scrollLeft = offsetLeft * progress
    })
  })
}
