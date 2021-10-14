
const projector = document.getElementById('projector-grid');
const speaker = document.getElementById('speaker-grid');
const display = document.getElementById('display-grid');

const options = {threshold: 0.65}; // same as root: null (viewport), threshold and rootMargin can also be specified
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            document.getElementById(entry.target.id).style.visibility = 'visible';
            entry.target.classList.add("animate__backInRight");
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(display);
observer.observe(speaker);
observer.observe(projector);


