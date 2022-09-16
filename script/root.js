var nr_list = document.getElementById('nr-list');
var nr_navbar_list_button = document.getElementById('nr-navbar-list-button');
var nr_document_body = document.body;

function showNavbarList(){
    if(nr_list.style.display != 'flex'){
        nr_list.style.display = 'flex';
        nr_document_body.style.overflow = 'hidden';
    } else {
        nr_list.style.display = 'none';
        nr_document_body.style.overflow = 'auto';
    }
}

nr_navbar_list_button.addEventListener('click', showNavbarList);

function hideNavbarList() {
    nr_list.style.display = 'none';
    nr_document_body.style.overflow = 'auto';
}