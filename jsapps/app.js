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
