let backgroundImage = document.querySelector('.header-content .main-image');
let lastElement = document.querySelector('header .reserve a');

function calculateImageHeight(){
    let topOffset = lastElement.offsetTop;
    backgroundImage.style.height = `${topOffset + 100}px`;
}

calculateImageHeight();
window.addEventListener("resize", calculateImageHeight);
window.addEventListener("load", calculateImageHeight);
