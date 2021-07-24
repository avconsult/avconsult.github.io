import Lightbox from "./lightbox.js";

Lightbox.activate();

const carouselImages = document.getElementsByClassName('carousel-item');
console.log(carouselImages)
for(let i = 0; i < carouselImages.length; i++){
    console.log(carouselImages[i])
    carouselImages[i].addEventListener('click', showImage, false);
}
// carouselImage.addEventListener('click', () => Lightbox.show(carouselImage.cloneNode(true)));

export function showImage(carouselImage){
    // Lightbox.show(carouselImage.cloneNode(true));
    Lightbox.show(this.cloneNode(true));
}




