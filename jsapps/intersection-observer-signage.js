
const firstCol = document.getElementById('firstCol');
const secondCol = document.getElementById('secondCol');
const thirdCol = document.getElementById('thirdCol');

const options = {}; // same as root: null (viewport), threshold and rootMargin can also be specified
const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            if(entry.target.id == 'firstCol')
                entry.target.classList.add("animate__backInLeft");
            else if (entry.target.id == 'secondCol')
                entry.target.classList.add("animate__backInUp");
            else
                entry.target.classList.add("animate__backInRight");
            observer.unobserve(entry.target);
        }
    });
}, options);

observer.observe(firstCol);
observer.observe(secondCol);
observer.observe(thirdCol);
