
document.addEventListener("DOMContentLoaded", function() {

  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    //Form Validation Logic
    let isValid = true;
    let messages = [];

    //Username Validation
    if(username.length < 3) {
      isValid = false;
      messages.push("Username must be atleast 3 characters long.");
    }

    //Email Validation
    if(!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Email must include an '@' and '.'.");
    }

    //Password Validation
    if(password.length < 8){
      isValid = false;
      messages.push("Password must be atleast 8 characters long.");
    }

    //FeedBack Div Display
    feedbackDiv.style.display = 'block';

    if(isValid) {
      feedbackDiv.innerHTML = "Registration successful"
      feedbackDiv.style.color = '#28a745';
    }else{
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = '#dc3545';
    }
    


  });
});