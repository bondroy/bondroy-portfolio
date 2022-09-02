function Cookies (el) {
  if (localStorage.getItem('bondroy_cookies')) el.remove()
  else el.querySelector('.cookies__agree').addEventListener('click', e => {
    e.preventDefault()
    el.remove()
    localStorage.setItem('bondroy_cookies', true);
  })
}
