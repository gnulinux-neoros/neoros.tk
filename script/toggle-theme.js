var body = document.body;
var switching = document.getElementById('switch');
var toggle_btn = document.getElementById('toggle');
function toggle(){
    body.classList.toggle('dark-mode');
    toggle_btn.classList.toggle('nr-switch-active');
}

switching.addEventListener('click', toggle);