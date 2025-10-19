let headerReview = document.querySelector('.header-review .review-rating');
let backgroundImage = document.querySelector('.header-content .header-image');
let navContainer = document.querySelector('.nav-container');

function calculateImageHeight(){
    let topOffset = headerReview.offsetTop;
    let navContainerHeight = navContainer.offsetHeight;
    backgroundImage.style.height = `${topOffset - navContainerHeight + 70}px`;
}

calculateImageHeight();
window.addEventListener("resize", calculateImageHeight);
window.addEventListener("load", calculateImageHeight);