function TagScroller (scroller) {
  const screenProgress = new ScreenProgress(scroller, { firstEl: false })
  const track = scroller.querySelector('.tag-scroller__track')
  let offsetLeft

  setVars()
  window.addEventListener('DOMContentLoaded', setVars)
  window.addEventListener('resize', setVars)
  window.addEventListener('load', setVars)

  screenProgress.onProgress(onProgress)

  function onProgress (progress) {
    // before
    if (progress < .2) track.style.opacity = 0
    // after
    if (progress > .7) track.style.opacity = 0

    screenProgress.step(progress, .2, .3, (progress) => {
      track.style.opacity = progress
    })
    screenProgress.step(progress, .6, .7, (progress) => {
      track.style.opacity = 1 - progress
    })
    screenProgress.step(progress, .2, .7, (progress) => {
      track.style.transform = `translateY(-40vh) translateY(${60 * progress}vh)`
      track.scrollLeft = offsetLeft * progress
    })
  }

  function setVars () {
    offsetLeft = track.scrollWidth - window.innerWidth
  }
}
