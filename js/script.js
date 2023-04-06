import { Modal } from './modal.js'
import {alertError} from "./alert-error.js"
import {IMC , testNumber} from "./utils.js"

const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const numberResult = testNumber(weight) || testNumber(height)

  if (numberResult){
    alertError.open()
    return;
  }
  
  alertError.close()

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  
  Modal.open()
  Modal.span.innerText = message
 
}


