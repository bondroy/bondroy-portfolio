document.querySelectorAll('.case-study').forEach(function (study, id) {
  const img = study.querySelector('img')
  const content = study.querySelector('.case-study__content')
  const screenProgress = new ScreenProgress(study)

  screenProgress.onProgress((progress) => {
    if (window.matchMedia('(max-width: 1040px)').matches) return

    img.style.transform = `translateY(-80vh) translateY(${150 * progress}vh) translateZ(0) scale(1.2)`

    if (progress < .3 || progress >= .8) {
      content.style.opacity = 0
    }  else {
      content.style.opacity = 1
    }

    screenProgress.step(progress, .3, .4, (progress) => {
      content.style.opacity = progress
    })

    screenProgress.step(progress, .7, .8, (progress) => {
      content.style.opacity = 1 - progress
    })
  })
})
