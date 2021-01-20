function Cursor (el) {
  const targets = document.querySelectorAll('a, [data-cursor]')
  const nativeCords = { x: 0, y: 0 }
  const cords       = { x: 0, y: 0 }
  const skew        = { x: 0, y: 0 }
  const speed = .2
  let targetScale = 1
  let scale = 1

  targets.forEach(target => {
    target.addEventListener('mouseover', onTargetMouseEnter)
    target.addEventListener('mouseout', onTargetMouseLeave)
  })
  window.addEventListener('mousemove', onMouseMove)
  window.renderer.onUpdate(onUpdate)
  window.renderer.onRender(onRender)

  function onMouseMove (e) {
    nativeCords.x = e.x
    nativeCords.y = e.y
  }

  function onTargetMouseEnter (e) {
    e.stopPropagation()
    targetScale = e.currentTarget.dataset.cursorScale || e.currentTarget.offsetHeight / 10
    targetScale = Number(targetScale)
    el.style.filter = 'invert(1)'
    el.style.mixBlendMode = 'exclusion'
  }

  function onTargetMouseLeave (e) {
    targetScale = 1
    el.style.filter = ''
    el.style.mixBlendMode = ''
  }

  function onUpdate () {
    const x = (nativeCords.x - cords.x)
    const y = (nativeCords.y - cords.y)
    cords.x += x * speed
    cords.y += y * speed
    scale += (targetScale - scale) * speed
    skew.x = x > 0
      ? Math.min(x, 5) / 100
      : Math.max(x, -5) / 100
    skew.y = y > 0
      ? Math.min(y, 5) / 100
      : Math.max(y, -5) / 100
  }

  function onRender () {
    el.style.transform = `translate(-50%, -50%) translate3d(${cords.x}px, ${cords.y}px, 0) scale(${scale * (1 + skew.x)}, ${scale * (1 + skew.y)}) skew(${skew.x}deg, ${skew.y}deg)`
  }
}
