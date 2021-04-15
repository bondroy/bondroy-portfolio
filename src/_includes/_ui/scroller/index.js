function Scroller (scroller) {
  const body = document.body

  // Check for DOM changes and reapply setBodyHeight
  const docObserver = new MutationObserver(debounce(setBodyHeight, 50))

  docObserver.observe(document.documentElement, {
    childList: true,
    subtree: true
  })

  setBodyHeight()
  window.addEventListener('DOMContentLoaded', setBodyHeight)
  window.addEventListener('resize', setBodyHeight)
  window.addEventListener('load', setBodyHeight)


  function debounce(func, wait, immediate = true) {
    let timeout
    return function() {
      const context = this, args = arguments;
      const later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  window.renderer.onRender((offset) => {
    if (window.matchMedia('(max-width: 1040px)').matches) return
    scroller.style.transform = `translateY(-${offset}px)`
  })

  function setBodyHeight () {
    const height = scroller.scrollHeight - 1
    body.style.height = Math.floor(height) + 'px'
  }
}
