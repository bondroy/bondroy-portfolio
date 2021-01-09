function OpeningFooter (el, container) {
  let footerOffset = 0
  let height
  let containerEnd
  let scrolledToBottom

  setVars()
  window.addEventListener('DOMContentLoaded', setVars)
  window.addEventListener('resize', setVars)
  window.addEventListener('load', setVars)

  window.renderer.onUpdate((offset) => {
    scrolledToBottom = offset + window.innerHeight >= containerEnd
    if (!scrolledToBottom) {
      el.classList.remove('-bottom')
      footerOffset = Math.min(offset, height)
      footerOffset = Math.max(footerOffset, 0)
    }
  })

  window.renderer.onRender(() => {
    if (scrolledToBottom) {
      el.classList.add('-bottom')
    } else {
      el.classList.remove('-bottom')
      el.style.transform = 'translateY(-' + footerOffset + 'px) translateZ(0)'
    }
  })

  function setVars () {
    height = el.offsetHeight
    containerEnd = container.offsetHeight + container.offsetTop
  }
}
