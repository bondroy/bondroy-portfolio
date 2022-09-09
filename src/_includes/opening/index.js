function OpeningFooter (el, container) {
  const footer = document.createDocumentFragment()
  footer.innerHTML = el.outerHTML

  document.body.appendChild(footer)

  console.log(footer.children)
  // let footerOffset = 0
  // let height
  // let containerEnd
  // let scrolledToBottom

  // setVars()
  // window.addEventListener('DOMContentLoaded', setVars)
  // window.addEventListener('resize', setVars)
  // window.addEventListener('load', setVars)

  // window.renderer.onUpdate((offset) => {
  //   if (window.matchMedia('(max-width: 1040px)').matches) return

  //   scrolledToBottom = offset + window.innerHeight >= containerEnd
  //   if (!scrolledToBottom) {
  //     el.classList.remove('-bottom')
  //     footerOffset = Math.min(offset, height)
  //     footerOffset = Math.max(footerOffset, 0)
  //   }
  // })

  // // Add secondary footer from js / outside of scroller
  // // stripes

  // window.renderer.onRender(() => {
  //   if (window.matchMedia('(max-width: 1040px)').matches) return

  //   if (scrolledToBottom) {
  //     el.classList.add('-bottom')
  //   } else {
  //     el.classList.remove('-bottom')
  //     console.log(footerOffset)
  //     el.style.transform = 'translateY(-' + footerOffset + 'px) translateZ(0)'
  //   }
  // })

  // function setVars () {
  //   height = el.offsetHeight
  //   containerEnd = container.offsetHeight + container.offsetTop
  // }
}
