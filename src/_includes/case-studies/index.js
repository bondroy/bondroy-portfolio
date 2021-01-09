document.querySelectorAll('.case-study').forEach(function (study, id) {
  const img = study.querySelector('img')
  const imgOverlay = study.querySelector('.case-study__img-overlay')
  const content = study.querySelector('.case-study__content')
  const screenProgress = new ScreenProgress(study)

  const timelineStart = id === 0
    ? .30
    : .25

  screenProgress.onProgress((progress) => {
    img.style.transform = `translateY(${300 * progress}px) translateZ(0) scale(1.2)`

    // before
    if (progress < timelineStart) {
      content.style.opacity = 0
    }
    // after
    if (progress > .7) {
      content.style.transform = `translateY(-50%) translateY(0)`
      content.style.opacity = 0
    }

    step(progress, timelineStart, .5, (progress) => {
      content.style.opacity = progress
    })
    step(progress, .5, .7, (progress) => {
      content.style.opacity = 1 - progress
    })

    step(progress, .5, 1, (progress) => {
      imgOverlay.style.transform = `scaleY(${1 * progress})`
    })

    step(progress, timelineStart, .7, (progress) => {
      content.style.transform = `translateY(-50%) translateY(${100 * (1 - progress * 2) }px)`
    })
  })

  function step (progress, from, to, cb) {
    const length = to - from
    if (progress >= from && progress <= from + length) {
      const stepProgress = (progress - from) / length
      cb(stepProgress)
    }
  }
})
