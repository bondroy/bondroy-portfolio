function Hero (el) {
  const screenProgress = new ScreenProgress(el, { firstEl: true })
  const lines = el.querySelectorAll('.hero__h div')
  const scroll = el.querySelector('.hero__scroll')

  screenProgress.onProgress((progress) => {
    if (window.matchMedia('(max-width: 1040px)').matches) return

    lines.forEach(function (line, id) {
      line.style.transform = `translateY(${-100 * (lines.length - id) * progress}px) translateZ(0)`
    })
    scroll.style.transform = `translateY(${window.innerHeight * progress * .6}px) translateX(-50%) translateZ(0)`
  })
}
