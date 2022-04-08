const btnTheme = document.querySelector('button')

btnTheme.addEventListener('click', forceTheme) 

function forceTheme() {
  document.body.classList.toggle('force')
}
