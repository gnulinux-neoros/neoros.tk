var body = document.body;
var switching = document.getElementById('switch');
var nr_icons = document.getElementById('nr-icons');
function toggle(){
    if(body.classList.contains('dark-mode')){
        body.classList.remove('dark-mode');
        nr_icons.innerHTML = '<i class="fa-solid fa-moon"></i>';
        nr_icons.classList.toggle('is-dark-mode');
    } else {
        body.classList.toggle('dark-mode');
        nr_icons.innerHTML = '<i class="fa-solid fa-sun"></i>';
        nr_icons.classList.toggle('is-dark-mode');
    }
}

switching.addEventListener('click', toggle);