function classToggle (selector, className, triggerEl) {
  const el = document.querySelector(selector)

  if (!triggerEl) {
    el.classList.toggle(className)

  } else {
    if (typeof triggerEl === 'string') triggerEl = document.querySelector(triggerEl)
    if (!el.triggerEl) el.classList.add(className)
    else if (el.triggerEl !== triggerEl) el.classList.add(className)
    else if (el.triggerEl === triggerEl) el.classList.toggle(className)
    el.triggerEl = triggerEl
  }
}

function classRemove (selector, className) {
  document.querySelector(selector).classList.remove(className);
}

function classAdd (selector, className) {
  document.querySelector(selector).classList.add(className);
}
