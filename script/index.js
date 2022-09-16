var smalltext = document.querySelector('#nr-smalltext');

setTimeout(() => {
    if(smalltext.style.opacity == '0'){
        smalltext.classList.add('nr-animation');
        smalltext.style.opacity = '1';
    }
}, 1000);