function ScreenProgress (container,  {firstEl} = {}) {
  let offset = 0
  let height = 0
  let progress = 0
  let renderCallback = () => {}

  setVars()
  window.addEventListener('DOMContentLoaded', setVars)
  window.addEventListener('resize', setVars)
  window.addEventListener('load', setVars)

  window.renderer.onUpdate((pageY) => {
    const winH = firstEl ? 0 : window.innerHeight
    const start = offset - winH
    progress = (pageY - start) / (height + winH)
  })

  window.renderer.onRender(() => {
    renderCallback(progress)
  })

  function setVars () {
    offset = container.offsetTop
    height = container.offsetHeight
  }

  function step (progress, from, to, cb) {
    const length = to - from
    if (progress >= from && progress <= from + length) {
      const stepProgress = (progress - from) / length
      cb(stepProgress)
    }
  }

  return {
    onProgress: (cb) => renderCallback = cb,
    step
  }
}
