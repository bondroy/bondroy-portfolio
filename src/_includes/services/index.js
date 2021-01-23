function Services (el) {
  const compositions = el.querySelectorAll('.service__image')

  compositions.forEach(composition => {
    const screenProgress = new ScreenProgress(composition)
    const layers = Array.from(composition.querySelectorAll('.service__overlay'))
      .map(el => {
        return {
          el,
          y: parseInt(el.dataset.parallax)
        }
      })
    screenProgress.onProgress(p => onProgress(p, layers))
  })

  function onProgress (progress, layers) {
    layers.forEach(layer => {
      layer.el.style.transform = `translateY(${layer.y * progress}px) translateZ(0)`
    })
  }

  // screenProgress.onProgress((progress) => {
  //   img.style.transform = `translateY(-80vh) translateY(${150 * progress}vh) translateZ(0) scale(1.2)`

  //   if (progress < .3 || progress >= .8) {
  //     content.style.opacity = 0
  //   }  else {
  //     content.style.opacity = 1
  //   }

  //   screenProgress.step(progress, .3, .4, (progress) => {
  //     content.style.opacity = progress
  //   })

  //   screenProgress.step(progress, .7, .8, (progress) => {
  //     content.style.opacity = 1 - progress
  //   })
  // })
}
