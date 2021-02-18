function Scroller (scroller) {
  const body = document.body
  let skew

  setBodyHeight()
  window.addEventListener('DOMContentLoaded', setBodyHeight)
  window.addEventListener('resize', setBodyHeight)
  window.addEventListener('load', setBodyHeight)

  window.renderer.onUpdate((offset) => {
    if (window.matchMedia('(max-width: 1040px)').matches) return

    skew = window.pageYOffset - offset
    skew = skew > 0
      ? Math.min(skew, 50)
      : Math.max(skew, -50)
    skew = skew / 20
  })

  window.renderer.onRender((offset) => {
    if (window.matchMedia('(max-width: 1040px)').matches) return
    // scroller.scrollTop = offset
    scroller.style.transform = `translateY(-${offset}px)`
    // scroller.style.transform = `skew(0, ${skew}deg)`
  })

  function setBodyHeight () {
    const height = scroller.scrollHeight - 1
    body.style.height = Math.floor(height) + 'px'
  }
}
