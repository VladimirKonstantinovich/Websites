let inputs = document.querySelectorAll('input');
let textArea = document.getElementById('message');
let nameInput = inputs[0];
let form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    sendMail();
})

function resetValues(){
    for (let input of inputs) {
        input.value = '';
    }

    textArea.value = '';

}

function sendMail(){

    var params = {
        from_name: document.getElementById('name').value,
        phone_id:  document.getElementById('phone_id').value,
        date_id:  document.getElementById('date_id').value,
        message: document.getElementById('message').value,
    };

    emailjs.send('service_fhr9oki', 'template_nmjsaba', params).then(function(res){
        alert('Сообщение отправилось');
    }).catch((err) =>{console.log(err)});

    resetValues();
}

