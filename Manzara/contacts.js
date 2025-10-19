
// Email js Отправление сообщения

let inputs = document.querySelectorAll('input');
let nameInput = inputs[0];
let form = document.getElementById('form');

// Чтобы не отправлялись пустые сообщения

form.addEventListener('submit', function(e){
  e.preventDefault();
  sendMail();
})

function resetValues(){
  for (let input of inputs) {
      input.value = '';
  }
}

function sendMail(){
  var params = {
      from_name: document.getElementById('name').value,
      phone_id:  document.getElementById('phone_id').value,
  };

  emailjs.send('service_lrvpuyo', 'template_rv5lmog', params).then(function(res){
    alert('Сообщение отправилось')
  }).catch((err) =>{console.log(err)});

  resetValues();
}

// Форматирование номера

document.addEventListener('DOMContentLoaded', function(){
  let phoneInput = document.querySelector('input[data-tel-input]');
  console.log(phoneInput);
  let getInputNumberValue = function(input){
      return input.value.replace(/\D/g, '');
  }

  let onPhoneInput = function(e){
      let input = e.target,
          inputValue = getInputNumberValue(input),
          formattedInputValue = '',
          selectionStart = input.selectionStart;
      
      if(!inputValue){
          return input.value = '';
      }

      if(input.value.length != selectionStart){
          if(e.data && /\D/g.test(e.data)){
              input.value = inputValue;
          }
          return;
      }

      if(['7','8','9'].indexOf(inputValue[0]) > -1){
          // Российский номер телефона
          if (inputValue[0] == '9') inputValue = '7' + inputValue;
          let firstSymbol = (inputValue[0] == '8') ? '8' : '+7';
          formattedInputValue = firstSymbol + ' ';
          if(inputValue.length > 1){
              formattedInputValue += '(' + inputValue.substring(1, 4);
          }

          if(inputValue.length >= 5){
              formattedInputValue += ') ' + inputValue.substring(4, 7);
          }

          if(inputValue.length >= 8){
              formattedInputValue += '-' + inputValue.substring(7, 9)
          }

          
          if(inputValue.length >= 10){
              formattedInputValue += '-' + inputValue.substring(9, 11)
          }

      }else{
          formattedInputValue = '+' + inputValue.substring(0, 16);
      }

      input.value = formattedInputValue;
  }

  let  onPhoneKeyDown = function(e) {
      let input = e.target;
      if(e.keyCode == 8 && getInputNumberValue(input).length == 1){
          input.value = '';
      }
      console.log(input, input.value);
  }

  let onPhonePaste = function(e){
      let pasted = e.clipboardData  || window.clipboardData,
          input = e.target,
          inputValue = getInputNumberValue(input);
      
      if(pasted){
          let pastedText = pasted.getData('Text');
          if (/\D/g.test(pastedText)){
              input.value = inputValue;
          }
      }
  }

  phoneInput.addEventListener('input', onPhoneInput);
  phoneInput.addEventListener('keydown', onPhoneKeyDown);
  phoneInput.addEventListener('paste', onPhonePaste);
})