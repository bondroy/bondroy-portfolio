function Scroller (scroller) {
  const body = document.body

  setBodyHeight()
  window.addEventListener('DOMContentLoaded', setBodyHeight)
  window.addEventListener('resize', setBodyHeight)
  window.addEventListener('load', setBodyHeight)

  window.renderer.onRender((offset) => {
    scroller.scrollTop = offset
    // scroller.style.transform = `skew(0, ${(window.pageYOffset - offset)/100}deg)`
  })

  function setBodyHeight () {
    const height = scroller.scrollHeight - 1
    body.style.height = Math.floor(height) + 'px'
  }
}
