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

function scrollToId(eltId){
    const elmntToView = document.getElementById(eltId);
    console.log(elmntToView.offsetTop);
    setTimeout(function () {
        elmntToView.scrollIntoView()
    },2);
    //elmntToView.scrollTo(0, elmntToView.offsetTop);
}
