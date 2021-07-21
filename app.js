// document.addEventListener("scroll", handleScroll);
//
// let scrollToTopBtn = document.querySelector("#scrollToTopBtn");
//
// scrollToTopBtn.addEventListener("click", scrollToTop);
//
// function handleScroll() {
//     let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let GOLDEN_RATIO = 0.5;
//     if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
//         //show button
//         scrollToTopBtn.style.display = "block";
//     } else {
//         //hide button
//         scrollToTopBtn.style.display = "none";
//     }
// }
//
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

function getStyle(id, name) {
    var element = document.getElementById(id);
    return element.currentStyle ? element.currentStyle[name] : window.getComputedStyle ? window.getComputedStyle(element, null).getPropertyValue(name) : null;
}

const downchevron = document.getElementById('down-indicator');

function scrollToId(eltId){
    const elmntToView = document.getElementById(eltId);
    console.log(elmntToView.offsetTop);
    setTimeout(function () {
        elmntToView.scrollIntoView()
    },2);
    //elmntToView.scrollTo(0, elmntToView.offsetTop);
}


function hideChevronOnNavExpand(){
    if(window.screen.width < 768) { // only on mobile
        console.log(getStyle('down-indicator', 'visibility'));
        if (getStyle('down-indicator', 'visibility') == 'visible')
            downchevron.style.visibility = 'hidden';
        else
            downchevron.style.visibility = 'visible';
    }
}
