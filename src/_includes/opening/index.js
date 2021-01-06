function OpeningFooter (el, container) {
  const speed = .2
  let offset = 0
  let height
  let containerEnd

  setVars()
  scrollLoop()
  window.addEventListener('DOMContentLoaded', setVars)
  window.addEventListener('resize', setVars)
  window.addEventListener('load', setVars)

  function scrollLoop() {
    console.log(containerEnd, window.pageYOffset + window.innerHeight)
    if (window.pageYOffset + window.innerHeight >= containerEnd) {
      el.classList.add('-bottom')
    } else {
      el.classList.remove('-bottom')
      let winOffset = Math.min(window.pageYOffset, height)
      winOffset = Math.max(winOffset, 0)
      offset += (winOffset - parseFloat(offset.toFixed(2))) * speed
      el.style.transform = 'translateY(-' + offset + 'px) translateZ(0)'
    }
    requestAnimationFrame(scrollLoop)
  }

  function setVars () {
    height = el.offsetHeight
    containerEnd = container.offsetHeight + container.offsetTop
  }
}
