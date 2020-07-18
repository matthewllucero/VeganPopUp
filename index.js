var button = document.getElementById("submitButton");
var ans = document.getElementById("ans");

button.addEventListener("click", function(){
	ans.innerHTML = "sent";
	
	Email.send({
    	SecureToken : config.SECURE_TOKEN,
    	To : config.EMAIL,
    	From : config.EMAIL,
    	Subject : "This is the subject",
    	Body : "And this is the body"
	}).then(
  		message => alert(message)
	);
	
});