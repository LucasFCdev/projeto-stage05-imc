import { Modal } from './modal.js'

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  
  Modal.open()
  Modal.span.innerText = message
 
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
