let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.navigation');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('active')
    hamburger.classList.toggle('clicked')
})

document.onclick = function(e){
    if(!menu.contains(e.target) && !hamburger.contains(e.target)){
        menu.classList.remove('active')
        hamburger.classList.remove('clicked')
    }
}

// Changing get to us transport of choice

let transport = document.querySelector('main .how-to-get-to-us .transport-name');
let tranport_info = document.querySelector('main .how-to-get-to-us .transport-info');
let car_info = document.querySelector('main .how-to-get-to-us .transport-info .by-car');
let bus_info = document.querySelector('main .how-to-get-to-us .transport-info .on-a-bus');
 
 
transport.addEventListener('click', function(e){
  let activeTransport = transport.querySelector('.active');
  if(e.target.classList.contains('active') != true && e.target.classList.contains('transport')) {
    e.target.classList.add('active');
    activeTransport.classList.remove('active');
  }

  if(e.target.classList.contains('transport-car') && e.target.classList.contains('transport')){
    console.log('car');
    bus_info.classList.remove('active');
    car_info.classList.add('active');
  }else if (e.target.classList.contains('transport-bus') && e.target.classList.contains('transport')){
    console.log('bus');
    car_info.classList.remove('active');
    bus_info.classList.add('active');
  }
})
