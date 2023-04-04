export const modal = {
  
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

modal.button.onclick = () => modal.close()
