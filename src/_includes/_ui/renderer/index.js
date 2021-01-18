const Renderer = function () {

  const updateCallbacks = []
  const renderCallbacks = []

  const step = 1/60
  const speed = .2
  let offset = 0
  let now
  let last = window.performance.now()
  let dt   = 0

  function frame () {
    now = window.performance.now()
    dt = dt + Math.min(1, (now - last) / 1000)
    last = now

    while(dt > step) {
      dt = dt - step
      offset += (window.pageYOffset - offset) * speed
      updateCallbacks.forEach(cb => cb(offset))
    }

    renderCallbacks.forEach(cb => cb(offset))
    requestAnimationFrame(frame)
  }

  // Start
  requestAnimationFrame(frame)

  return {
    onUpdate: cb => updateCallbacks.push(cb),
    onRender: cb => renderCallbacks.push(cb),
  }
}
