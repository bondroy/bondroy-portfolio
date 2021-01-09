function Header (el) {
  const nav = el.querySelector('.header__nav')
  const headerHeight = el.offsetHeight
  let lastOverflowOffset = 0
  let headerOffset

  window.renderer.onUpdate((offset) => {
    headerOffset = Math.min(offset - lastOverflowOffset, headerHeight)
    headerOffset = Math.max(headerOffset, 0)

    if (headerOffset == headerHeight) lastOverflowOffset = offset - headerHeight
    if (headerOffset == 0)            lastOverflowOffset = offset
  })

  window.renderer.onRender(() => {
    el.style.transform = 'translateY(-' + headerOffset + 'px) translateZ(0)'
    nav.style.transform = 'translateY(-' + headerOffset / 2 + 'px) translateZ(0)'
  })
}
