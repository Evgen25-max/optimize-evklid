var last_btn_step = 'btn-step-1'
var last_step = 'step-1'
var re_step = /btn-step-\d+/;


window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__btn').forEach(function(el) {
    el.addEventListener('click', active_step)
  })
})

function active_step(event) {
  document.querySelector('#step-image').classList.remove(`consultation_img-${last_step}`);
  for (var i = 0; i < 2; i++) {
    document.querySelector(`#${last_btn_step}`).classList.toggle('how__btn_active')
    document.querySelector(`#title-${last_step}`).classList.toggle('hidden')
    document.querySelector(`#text-${last_step}`).classList.toggle('hidden')
    if (i===0) {
      last_btn_step = re_step.exec(event.target.id)[0]
      last_step = last_btn_step.slice(4)
    }
  }
  document.querySelector('#step-image').classList.add(`consultation_img-${last_step}`);
}


