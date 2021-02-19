function Header (el) {
  const bg = el.querySelector('.header__bg')
  const nav = el.querySelector('.header__nav')
  const logo = el.querySelector('.header__logo path:last-child')
  const headerHeight = el.offsetHeight
  let lastOverflowOffset = 0
  let headerOffset

  window.renderer.onUpdate((offset) => {
    if (offset < 0) return
    headerOffset = Math.min(offset - lastOverflowOffset, headerHeight)
    headerOffset = Math.max(headerOffset, 0)

    if (headerOffset == headerHeight) lastOverflowOffset = offset - headerHeight
    if (headerOffset == 0)            lastOverflowOffset = offset
  })

  window.renderer.onRender(() => {
    logo.style.transform = 'translateY(-' + headerOffset / 10 + 'px) translateZ(0)'
    logo.style.opacity = 1 - (headerOffset / headerHeight)
    bg.style.transform = 'translateY(-' + headerOffset + 'px) translateZ(0)'
    nav.style.transform = 'translateY(-' + headerOffset + 'px) translateZ(0)'
  })
}
