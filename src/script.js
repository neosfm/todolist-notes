const navLinks = document.querySelector('.navLinks')
function onToggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu'
  navLinks.classList.toggle('top-14')
}
function onToggleMode(e) {
  e.name = e.name === 'sunny' ? 'moon' : 'sunny'
}