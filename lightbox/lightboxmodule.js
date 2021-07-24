import Lightbox from "./lightbox.js";

Lightbox.activate();

const carouselImages = document.getElementsByClassName('carousel-item');
for(let i = 0; i < carouselImages.length; i++){
    carouselImages[i].addEventListener('click', showImage, false);
}

export function showImage(){
    Lightbox.show(this.cloneNode(true));
}




