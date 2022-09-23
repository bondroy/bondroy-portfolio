function ParallaxComposition (composition) {
  const screenProgress = new ScreenProgress(composition)
  const layers = Array.from(composition.querySelectorAll('[data-parallax]'))
    .map(el => {
      return {
        el,
        y: parseInt(el.dataset.parallax)
      }
    })
  screenProgress.onProgress(p => onProgress(p, layers))

  function onProgress (progress, layers) {
    if (window.matchMedia('(max-width: 1040px)').matches) return
    layers.forEach(layer => {
      layer.el.style.transform = `translateY(${layer.y * progress}rem) translateZ(0)`
    })
  }
}
