let box = document.querySelector('.box')
let toggle = document.querySelector('.toggle')
console.log(toggle)
console.log(box)
toggle.addEventListener('mouseenter', function () {
  box.classList.add('active')
  toggle.classList.add('active')
})

toggle.addEventListener('mouseleave', function () {
  box.classList.remove('active')
  toggle.classList.remove('active')
})
