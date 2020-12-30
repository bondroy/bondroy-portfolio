function Scroller (el) {
  const body = document.body
  const speed = .2
  let offset = 0

  scrollLoop()

  setBodyHeight()
  window.addEventListener('DOMContentLoaded', setBodyHeight)
  window.addEventListener('resize', setBodyHeight)
  window.addEventListener('load', setBodyHeight)

  function scrollLoop() {
    offset += (window.pageYOffset - offset) * speed
    const scroll = 'translateY(-' + offset + 'px) translateZ(0)'
    el.style.transform = scroll
    requestAnimationFrame(scrollLoop)
  }

  function setBodyHeight () {
    const height = el.getBoundingClientRect().height - 1
    body.style.height = Math.floor(height) + 'px'
  }
}
