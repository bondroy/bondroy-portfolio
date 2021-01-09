function ScreenProgress (container) {
  let offset = 0
  let height = 0
  let progress = 0
  let renderCallback = () => {}

  setVars()
  window.addEventListener('DOMContentLoaded', setVars)
  window.addEventListener('resize', setVars)
  window.addEventListener('load', setVars)

  window.renderer.onUpdate((pageY) => {
    const start = offset - window.innerHeight
    progress = (pageY - start) / (height + window.innerHeight)
  })

  window.renderer.onRender(() => {
    renderCallback(progress)
  })

  function setVars () {
    offset = container.offsetTop
    height = container.offsetHeight
  }

  return {
    onProgress: (cb) => renderCallback = cb
  }
}
