function StartProject (el) {
  const form = el.querySelector('form')
  const requiredInputs = form.querySelectorAll('[required]')

  form.addEventListener('submit', handleSubmit)
  form.addEventListener('input', removeErrors)
  requiredInputs.forEach(el => { el.addEventListener('input', markFilled) })

  function markFilled (el) {
    el.target.classList.toggle('-filled', el.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()

    if (form.checkValidity()) {
      form.classList.add('-pending')
      submit()
    } else {
      setInputErrors()
      return
    }
  }

  function setInputErrors () {
    form.classList.add('-validate')
    requiredInputs.forEach(el => {
      el.classList.toggle('-error', !el.checkValidity())
    })
  }

  function removeErrors () {
    form.classList.remove('-validate')
    requiredInputs.forEach(el => {
      el.classList.remove('-error')
    })
  }

  function submit () {
    fetch(form.getAttribute('action'), {
      method: 'POST',
      body: new FormData(form)
    })
    .then(() => form.remove())
    .catch(error => console.log(error))
  }
}

// return true if in range, otherwise false
function inRange(x, min, max) {
  return ((x-min)*(x-max) <= 0);
}
