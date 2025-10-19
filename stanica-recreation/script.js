let hamburger = document.querySelector('.hamburger-menu');
let menu = document.querySelector('.navigation');
let menuLinks = document.querySelectorAll('.navigation .nav-sections a')
// Для главной картинки
let navigation = document.querySelector('.nav-container');

hamburger.addEventListener('click', function(){
    menu.classList.toggle('active')
    hamburger.classList.toggle('active')
})

document.onclick = function(e){
    if(!menu.contains(e.target) && !hamburger.contains(e.target)){
        menu.classList.remove('active')
        hamburger.classList.remove('active')
    }

    else if((e.target == menuLinks[1]) || (e.target == menuLinks[2]) || (e.target == menuLinks[3]) || (e.target == menuLinks[4])){
        menu.classList.remove('active')
        hamburger.classList.remove('active')
    }  
}

// Open image

function openPrices() {
    let element = document.getElementsByClassName('image-container');
    if(element.length == 0){
        let imageContainer =
            document.createElement("div");
        imageContainer.className =
            "image-container";

        let image = document.createElement("img");
        image.src = "main-images/tseny.jpg"

        let closeButton = document.createElement("button");

        closeButton.textContent = "Закрыть";
        closeButton.className =
            "close-btn";
        closeButton.onclick =
            function () {
                document.body.removeChild(
                    imageContainer
                );
            };

        imageContainer.appendChild(
            closeButton
        );
        imageContainer.appendChild(image);

        document.body.appendChild(
            imageContainer
        );
    }else{
        return
    }
}

function openMenu() {
    let element = document.getElementsByClassName('image-container');
    if(element.length == 0){
        let imageContainer =
            document.createElement("div");
        imageContainer.className =
            "image-container";

        let image = document.createElement("img");
        image.src = "main-images/kafe-menu.jpg"

        let closeButton = document.createElement("button");

        closeButton.textContent = "Закрыть";
        closeButton.className =
            "close-btn";
        closeButton.onclick =
            function () {
                document.body.removeChild(
                    imageContainer
                );
            };

        imageContainer.appendChild(
            closeButton
        );
        imageContainer.appendChild(image);

        document.body.appendChild(
            imageContainer
        );
    }else{
        return
    }
}