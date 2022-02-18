const form = document.querySelector('.form')
const btnSubmitText = document.querySelector('.form__button-submit-text')
const formInput = document.querySelector('.form__input')
const smile = document.querySelector('.form__button-submit-text-smile')
const btnSubmit = document.querySelector('.form__button-submit')



form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (formInput.value) {
    if (window.innerWidth >= 601) {
      btnSubmitText.innerHTML = 'Круто, спасибо за доверие!'
      smile.remove()
      btnSubmit.style.paddingRight = '16px'
    } else {
      smile.innerHTML = '&#128140;'
    }
  }
})





