const form = document.querySelector('.form')
const btnSubmitText = document.querySelector('.form__button-submit-text')
const formInput = document.querySelector('.form__input')
const smile = document.querySelector('.form__button-submit-text-smile')
const btnSubmit = document.querySelector('.form__button-submit')

const footerForm = document.querySelector('.footer__form')
const footerInput = document.querySelector('.footer__input')
const footerButtonSubmitText = document.querySelector('.footer__button-submit-text')
const footerSmile = document.querySelector('.footer__smile')
const footerButtonSubmit = document.querySelector('.footer__button-submit')

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

footerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (footerInput.value) {
    if (window.innerWidth > 686) {
      footerButtonSubmitText.innerHTML = 'Круто, спасибо за доверие!'
      footerSmile.remove()
      footerButtonSubmit.style.paddingRight = '16px'
    } else {
      footerSmile.innerHTML = '&#128140;'
    }
  }
})




