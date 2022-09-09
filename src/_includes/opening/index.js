function OpeningFooter (el, container) {
  const stickyFooter = document.createElement('div')
  stickyFooter.classList.add('opening__sticky-footer')
  stickyFooter.innerHTML = el.outerHTML
  document.querySelector('body').appendChild(stickyFooter)

  let containerEnd
  let scrolledToBottom

  setVars()
  window.addEventListener('DOMContentLoaded', setVars)
  window.addEventListener('resize', setVars)
  window.addEventListener('load', setVars)

  window.renderer.onUpdate((offset) => {
    if (window.matchMedia('(max-width: 1040px)').matches) return

    scrolledToBottom = offset + window.innerHeight >= containerEnd
    console.log(scrolledToBottom)
    if (!scrolledToBottom) {
      stickyFooter.style.transform = 'translateY(0)'
    }
  })

  window.renderer.onRender(() => {
    if (window.matchMedia('(max-width: 1040px)').matches) return

    if (scrolledToBottom) {
      stickyFooter.style.transform = 'translateY(100%)'
    } else {
      stickyFooter.style.transform = 'translateY(0)'
    }
  })

  function setVars () {
    containerEnd = container.offsetHeight + container.offsetTop
  }
}
