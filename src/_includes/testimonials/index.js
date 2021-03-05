function Testimonials (el) {
  const prev = el.querySelector('.testimonials__prev')
  const next = el.querySelector('.testimonials__next')
  const images = el.querySelectorAll('img')
  const slides = el.querySelectorAll('.testimonials__content-slide')
  let currId = 0

  setImageStyles(getId('curr'), 'curr')
  setSlideStyles(getId('curr'), 'curr')
  prev.addEventListener('click', () => goTo('prev'))
  next.addEventListener('click', () => goTo('next'))

  function goTo (state) {
    toggleTransition(false)
    images.forEach((el,id) => setImageStyles(id, state))
    slides.forEach((el,id) => setSlideStyles(id, state))
    setImageStyles(getId('curr'), 'curr')
    setSlideStyles(getId('curr'), 'curr')
    setTimeout(() => {
      const oppositeState = state == 'prev' ? 'next' : 'prev'
      currId = getId(state)
      toggleTransition(true)
      setImageStyles(getId('curr'), 'curr')
      setSlideStyles(getId('curr'), 'curr')
      setImageStyles(getId(oppositeState), oppositeState)
      setSlideStyles(getId(oppositeState), oppositeState)
    }, 10)
  }

  function getId (state) {
    switch (state) {
      case 'curr':
        return currId
      case 'next':
        return currId === images.length - 1
          ? 0
          : currId + 1
      case 'prev':
        return currId === 0
          ? images.length - 1
          : currId - 1
    }
  }

  function setImageStyles (id, state) {
    const el = images[id]
    switch (state) {
      case 'curr':
        el.style.transform = 'none'
        el.style.opacity = 1
        el.classList.add('-active')
        break
      case 'next':
        el.style.transform = 'translateX(100%)'
        el.style.opacity = 1
        el.classList.remove('-active')
        break
      case 'prev':
        el.style.transform = 'scale(.3)'
        el.style.opacity = 0
        el.classList.remove('-active')
        break
    }
  }

  function setSlideStyles (id, state) {
    const el = slides[id]
    switch (state) {
      case 'curr':
        el.style.transform = 'none'
        el.style.opacity = 1
        el.classList.add('-active')
        break
      case 'next':
        el.style.transform = 'translateX(2rem)'
        el.style.opacity = 0
        el.classList.remove('-active')
        break
      case 'prev':
        el.style.transform = 'translateX(-5rem)'
        el.style.opacity = 0
        el.classList.remove('-active')
        break
    }
  }

  function toggleTransition (is_on) {
    const setT = (el) => {
      if (is_on) el.classList.add('-transition')
      else el.classList.remove('-transition')
    }
    images.forEach(setT)
    slides.forEach(setT)
  }
}
