
const topRow = document.getElementById('top-row');
const bottomRow = document.getElementById('bottom-row');

const options = {}; // same as root: null (viewport), threshold and rootMargin can also be specified
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add("animate__backInRight");
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(topRow);
observer.observe(bottomRow);


