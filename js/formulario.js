$(document).ready(function(){
    $('select').formSelect();
  });
  document.getElementById('formContacto').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    let form = event.target;
    let isValid = form.checkValidity();
  
    if (isValid) {
        console.log('Formulario válido. Procesando envío...');
    } else {
        Array.from(form.elements).forEach(input => {
            if (!input.checkValidity()) {
                input.classList.add('invalid');
                M.updateTextFields(); 
            } else {
                input.classList.remove('invalid'); 
            }
        });
    }
  });