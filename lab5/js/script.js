function validate() {
	var email = document.getElementById("email").value;
	var login = document.getElementById("login").value;
	var pass = document.getElementById("pass").value;
	var pass2 = document.getElementById("pass2").value;
	var newsletter = document.getElementById("newsletter").checked;
	var terms = document.getElementById("terms").checked;
	var errorMessage = "";
	var isValid = true;
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	if (!(regex.test(email.toLowerCase()))) {
		errorMessage += "Invalid email\n";
		isValid = false;
	}
	
	if (login.length > 20 || login.length == 0) {
		errorMessage += "Login name must be less than 20 characters\n";
		isValid = false;
	}
	
	if (pass.length < 6) {
		errorMessage += "Password must be at least 6 characters\n";
		isValid = false;
	}
	
	if (pass != pass2) {
		errorMessage += "Passwords do not match\n";
		isValid = false;
	}
	
	if (newsletter == true) {
		alert("You will be spammed");
	}
	
	if (terms == false) {
		errorMessage += "You must agree to the terms and conditions\n";
		isValid = false;
	}
	
	if (isValid == false) {
		alert(errorMessage);
	} else {
		var num = Math.floor(Math.random() * 100) + 1;
		document.getElementById("success").innerHTML = num;
	}
	
	return false;
}





