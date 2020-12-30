function Header (el) {
  const nav = el.querySelector('.header__nav')
  const headerHeight = el.offsetHeight
  const speed = .2
  let offset = 0
  let lastOverflowOffset = 0

  scrollLoop()

  function scrollLoop() {
    let winOffset = Math.min(window.pageYOffset - lastOverflowOffset, headerHeight)
    winOffset = Math.max(winOffset, 0)
    offset += (winOffset - offset) * speed

    if (winOffset == headerHeight) {
      lastOverflowOffset = window.pageYOffset - headerHeight
    }
    if (winOffset == 0) {
      lastOverflowOffset = window.pageYOffset
    }

    el.style.transform = 'translateY(-' + offset + 'px) translateZ(0)'
    nav.style.transform = 'translateY(-' + offset + 'px) translateZ(0)'

    requestAnimationFrame(scrollLoop)
  }
}
