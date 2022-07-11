document.addEventListener("DOMContentLoaded", ready);

function ready() {
  var burger = document.querySelector('.header__burger')
  burger.addEventListener('click', () => {
    document.querySelector('.burger-nav').classList.toggle('hidden-burger')
    document.querySelector('.header__burger-nav').classList.toggle('burger_cross-burger')
  })
}
