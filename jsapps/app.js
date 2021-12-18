const showcaseFigs = document.getElementsByClassName('showcase-item');

for(let i = 0; i < showcaseFigs.length; i++){
    showcaseFigs[i].addEventListener('mouseover', () => {
        console.log('hovered');
       showcaseFigs[i].getElementsByTagName('figcaption').item(0).
           style.visibility = 'visible';
    });
    showcaseFigs[i].addEventListener('mouseout', () => {
        console.log('hovered');
       showcaseFigs[i].getElementsByTagName('figcaption').item(0).
           style.visibility = 'hidden';
    });
}

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
}


function hideChevronOnNavExpand(){
    if(window.screen.width < 768) { // only on mobile
        if (getStyle('down-indicator', 'visibility') == 'visible')
            downchevron.style.visibility = 'hidden';
        else
            downchevron.style.visibility = 'visible';
    }
}

function showChevronHome(){
    if(window.screen.width < 768) { // only on mobile
        if (getStyle('down-indicator', 'visibility') == 'hidden')
            downchevron.style.visibility = 'visible';
    }
}

let contactForm = document.getElementById('mail-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(contactForm);
    let obj = {};
    for (let [key, value] of formData) {
        obj[key] = value;
    }
    console.log(obj);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://script.google.com/macros/s/AKfycbyEGtM9OdCXCaIhxXl-mckdN_w_alVSm5Xj1dYDCXnWAnJVhqKX9kRgtpZzKsKpkfbM/exec');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(formData);

    xhr.onreadystatechange = function () {
        const DONE = 4; // readyState 4 means the request is done.
        const OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                console.log(xhr.responseText); // 'This is the returned text.'
            } else {
                console.log('Error: ' + xhr.status); // An error occurred during the request.
            }
        }
    };
});
