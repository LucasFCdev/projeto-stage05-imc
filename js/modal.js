export const Modal = {
  
  Wrapper: document.querySelector('.modal-wrapper'),
  span: document.querySelector('span'),
  button: document.querySelector('.modal button.close'),
    
  open(){
    Modal.Wrapper.classList.add('open')
  },
  close(){
    Modal.Wrapper.classList.remove('open')
  }
}

Modal.button.onclick = () => Modal.close()

window.addEventListener('keydown', handleKeyDown)

function handleKeyDown(event){
  if(event.key === 'Escape'){
    Modal.close()
  }
}