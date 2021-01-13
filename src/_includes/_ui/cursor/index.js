function Cursor (el) {
  const links = document.querySelectorAll('a')
  const nativeCords = { x: 0, y: 0 }
  const cords       = { x: 0, y: 0 }
  const speed = .2
  let targetScale = 1
  let scale = 1

  links.forEach(link => {
    link.addEventListener('mouseenter', onLinkMouseEnter)
    link.addEventListener('mouseleave', onLinkMouseLeave)
  })
  window.addEventListener('mousemove', onMouseMove)
  window.renderer.onUpdate(onUpdate)
  window.renderer.onRender(onRender)

  function onMouseMove (e) {
    nativeCords.x = e.x
    nativeCords.y = e.y
  }

  function onLinkMouseEnter (e) {
    targetScale = e.target.offsetHeight / 10
    el.style.filter = 'invert(1)'
    el.style.mixBlendMode = 'exclusion'
  }

  function onLinkMouseLeave (e) {
    targetScale = 1
    el.style.filter = ''
    el.style.mixBlendMode = ''
  }

  function onUpdate () {
    cords.x += (nativeCords.x - cords.x) * speed
    cords.y += (nativeCords.y - cords.y) * speed
    scale += (targetScale - scale) * speed
  }

  function onRender () {
    el.style.transform = `translate(-50%, -50%) translate3d(${cords.x}px, ${cords.y}px, 0) scale(${scale})`
  }
}
