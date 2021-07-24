export default class Lightbox{

    static activate(){

        document.body.insertAdjacentHTML("beforeend", `
            <div class="lightbox" id="lightbox" style="display: none">
                <div class="lightbox__inner">
                    <button class="lightbox__close" type="button">
                        &times;    
                    </button>
                    <div class="lightbox__content">
                                
                    </div>
                </div>
            </div>
        `)

        const lightbox = document.querySelector("#lightbox");
        const btnClose = lightbox.querySelector(".lightbox__close");
        const content = lightbox.querySelector(".lightbox__content");

        const closeLightBox = () => {
          lightbox.style.display = 'none';
          content.innerHTML = '';
        };

        lightbox.addEventListener("mousedown", e => {
           if(e.target.matches("#lightbox"))
               closeLightBox();
        });

        btnClose.addEventListener("click", () => {
            closeLightBox();
        });

    }

    static show(htmlOrElement){
        const content = document.querySelector("#lightbox .lightbox__content");
        document.querySelector('#lightbox').style.display = null;
        if(typeof htmlOrElement === 'string')
            content.innerHTML = htmlOrElement;
        else{
            content.innerHTML = '';
            content.appendChild(htmlOrElement);
        }
    }

}
