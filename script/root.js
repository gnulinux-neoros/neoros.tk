var nr_list = document.getElementById('nr-list');
var nr_navbar_list_button = document.getElementById('nr-navbar-list-button');
var nr_document_body = document.body;

function showNavbarList(){
    if(!nr_list.classList.contains('nr-banner-list-translatex')){
        nr_list.classList.add('nr-banner-list-translatex');
    } else
    if(nr_list.classList.contains('nr-banner-list-translatex')) {
        nr_list.classList.remove('nr-banner-list-translatex');
    }
}

nr_navbar_list_button.addEventListener('click', showNavbarList);

function hideNavbarList() {
    nr_list.style.display = 'none';
    nr_document_body.style.overflow = 'auto';
}


function pageLoad(sender, args) {
    var prm = Sys.WebForms.PageRequestManager.getInstance();
    prm.add_beginRequest(BeginRequestHandler);
    prm.add_endRequest(EndRequestHandler);
}

function BeginRequestHandler(sender, args) {
    document.getElementById("loading").style.visibility = 'visible';
}

function EndRequestHandler(sender, args) {
   document.getElementById("loading").style.visibility = 'hidden';
}