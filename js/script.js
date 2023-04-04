import {modal} from './modal.js'

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')

const modalWrapper = document.querySelector('.modal-wrapper')
const span = document.querySelector('span')
const button = document.querySelector('.modal button.close')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  
  modal.open()
  modal.span.innerText = message
 
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
