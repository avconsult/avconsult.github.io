
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
