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

modal.button.onclick = () => Modal.close()

