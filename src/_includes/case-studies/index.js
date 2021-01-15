document.querySelectorAll('.case-study').forEach(function (study, id) {
  const img = study.querySelector('img')
  const imgOverlay = study.querySelector('.case-study__img-overlay')
  const content = study.querySelector('.case-study__content')
  const screenProgress = new ScreenProgress(study)

  const timelineStart = id === 0
    ? .30
    : .2

  screenProgress.onProgress((progress) => {
    img.style.transform = `translateY(${300 * progress}px) translateZ(0) scale(1.2)`

    if (progress < timelineStart || progress >= .79) {
      content.style.opacity = 0
      study.style.zIndex = -1
    }  else {
      content.style.opacity = 1
      study.style.zIndex = 1
    }


    if (progress >= .8) {
      imgOverlay.style.transform = `scaleY(${1 * progress})`
    } else {
      imgOverlay.style.transform = `scaleY(0)`
    }

    if (progress >= .8) {
      content.style.transform = `translateY(-50%) translateY(-10rem)`
    }

    screenProgress.step(progress, timelineStart, .8, (progress) => {
      content.style.transform = `translateY(-50%) translateY(${10 * (1 - progress * 2) }rem)`
    })
  })
})
