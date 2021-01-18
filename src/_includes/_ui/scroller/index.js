function Scroller (scroller) {
  const body = document.body
  let skew

  setBodyHeight()
  window.addEventListener('DOMContentLoaded', setBodyHeight)
  window.addEventListener('resize', setBodyHeight)
  window.addEventListener('load', setBodyHeight)

  window.renderer.onUpdate((offset) => {
    skew = window.pageYOffset - offset
    skew = skew > 0
      ? Math.min(skew, 30)
      : Math.max(skew, -30)
  })

  window.renderer.onRender((offset) => {
    scroller.scrollTop = offset
    scroller.style.transform = `skew(0, ${(skew)/20}deg)`
  })

  function setBodyHeight () {
    const height = scroller.scrollHeight - 1
    body.style.height = Math.floor(height) + 'px'
  }
}
