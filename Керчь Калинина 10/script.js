let bottomElement = document.querySelector('header .contacts-header .whatsup');
let backgroundImage = document.querySelector('.header-image img');

function calculateImageHeight(){
    let topOffset = bottomElement.offsetTop;
    backgroundImage.style.height = `${topOffset + 100}px`;
}

calculateImageHeight();
window.addEventListener("resize", calculateImageHeight);
window.addEventListener("load", calculateImageHeight);

// More info 

const moreInfo = document.querySelectorAll('.nomer .more-info');


moreInfo.forEach((item, index) =>{
    let header = item.querySelector('.content-header');
    let contentFooter = item.querySelector('.more-info .content-footer');

    header.addEventListener('click', function(){
        let headerImage = item.querySelector('.content-header img');
        let headerText = item.querySelector('.content-header p');
        let description = header.nextElementSibling;

        headerImage.classList.toggle('rotate');
        header.classList.toggle('open');

        if(header.classList.contains('open')){
            description.style.height = `${description.scrollHeight + 30}px`;
            description.style.paddingTop = '15px';
            headerText.textContent = 'Скрыть описание';
        }else{
            description.style.height = '0px';
            description.style.paddingTop = '0px';
            headerText.textContent = 'Подробнее';
        }

        contentFooter.addEventListener('click', function(){
            description.style.height = '0px';
            description.style.paddingTop = '0px';
            header.classList.remove('open');
            headerImage.classList.remove('rotate');
            headerText.textContent = 'Подробнее';
        })
    })
})


// Add phone number formatter

document.addEventListener('DOMContentLoaded', function(){
    let phoneInput = document.querySelector('input[data-tel-input]');

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