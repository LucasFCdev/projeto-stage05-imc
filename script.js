const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const form = document.querySelector('form')

const modalWrapper = document.querySelector('.modal-wrapper')
const span = document.querySelector('span')
const button = document.querySelector('.modal button.close')

const modal = {
  
  Wrapper: document.querySelector('.modal-wrapper'),
  span: document.querySelector('span'),
  button: document.querySelector('.modal button.close'),
    
  open(){
    modal.Wrapper.classList.add('open')
  },
  close(){
    modal.Wrapper.classList.remove('open')
  }
}

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height)
  const message = `Seu IMC é de ${result}`

  
  modal.open()
  modal.span.innerText = message
 
}

modal.button.onclick = () => modal.close()


function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
