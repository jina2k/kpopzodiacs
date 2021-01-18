function setAboutEventListeners(){
    document.getElementById("redisc").addEventListener("click", redirectDisc);
    document.getElementById("redhome").addEventListener("click", redirectHome);
}

function redirectDisc() {
	location.replace(encodeURI("disclaimer.html"));
}

function redirectHome() {
	location.replace(encodeURI("front_page.html"));
}