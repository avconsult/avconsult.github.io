import Lightbox from "./lightbox.js";

Lightbox.activate();

const projImages = document.getElementsByClassName('proj-grid-item');
for(let i = 0; i < projImages.length; i++){
    projImages[i].addEventListener('click', showImage, false);
}

function showImage(){
    let myImgDiv = document.createElement('div');
    myImgDiv.classList.add('lightboximg-container');
    if(this.id === 'proj1'){
        myImgDiv.appendChild(document.createElement('img'));
        myImgDiv.getElementsByTagName('img').item(0).classList.add('portrait-specs');
        myImgDiv.getElementsByTagName('img').item(0).src = '../../assets/products/av/proj/proj1/proj1%20specs.jpeg';
    }
    else{
        let myClone = this.cloneNode(true);
        myClone.removeChild(myClone.getElementsByTagName('img').item(1));
        myImgDiv.appendChild(myClone);
    }
    Lightbox.show(myImgDiv);
}




