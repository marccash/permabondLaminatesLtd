function showNavDesc(id) {
	navDesc = document.getElementById(id);
	try {
 		navDesc.removeAttribute('class','hideDesc');
		navDesc.setAttribute('class','showDesc');
	} catch(ex) {}
}

function hideNavDesc(id) {
	navDesc = document.getElementById(id);
	try {
		navDesc.removeAttribute('class','showDesc');
		navDesc.setAttribute('class','hideDesc');
	} catch(ex) {}
}

function mmenu() {
	navDesc = document.getElementById("mmenu");
	if (navDesc.classList.contains("openMMenu")) {
		navDesc.removeAttribute('class','openMMenu');
		navDesc.setAttribute('class','closeMMenu');	
	} else {
 		navDesc.removeAttribute('class','closeMMenu');
		navDesc.setAttribute('class','openMMenu');	
	}

}

function close_mmenu() {
	navDesc = document.getElementById("mmenu");
	try {
		navDesc.removeAttribute('class','openMMenu');
		navDesc.setAttribute('class','closeMMenu');
	} catch(ex) {}
}

function toggleContactPane(typeIn) {
	var contactPane = document.getElementById('contactPane');
	var contactFrame = document.getElementById('contactFrame');
	// If the same button is being pressed twice in a row then close else replace the content with new
	if (typeIn == undefined || typeIn == null || (contactPane.hasAttribute("is-active") && contactPane.getAttribute("launchedby") === typeIn)) {
		contactPane.removeAttribute("is-active");
		contactPane.querySelector("#contactPane #closeContactPane img").style.display = "none";
		contactFrame.style.display = "none";
	}
	else {
		contactPane.removeAttribute("launchedby");
		contactPane.setAttribute("is-active","");
		contactPane.querySelector("#contactPane #closeContactPane img").style.display = "block";
		contactPane.setAttribute("launchedby", typeIn);
		contactFrame.style.display = "block";
	}
	if (typeIn !== undefined && typeIn !== null) {
		// build the html to fill the contact/map box id='contactPane'
		if (typeIn === 'contact') {
			document.getElementById("contactFrame").src = "contactframe.html"; 
		} else {
			document.getElementById("contactFrame").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.6607005334427!2d-1.1814578479678306!3d52.93653377979651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c2146d002b95%3A0x6c6f921f820a3ea6!2sPermabond+Laminates+Ltd!5e0!3m2!1sen!2suk!4v1465060754406";
		}
	}
}

function clickElement(e) {
	if (e) {
		document.getElementById(e).click();
	}
}
