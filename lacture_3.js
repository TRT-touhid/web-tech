
let wrongCount = 0;

function validateForm() 
{
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let message = "";

    if (email.indexOf("@") === -1) 
    {
        message = "Email must contain @";
    }

    else if (password.length < 6) 
    {
        message = "Password must be at least 6 characters";
    }

    else if (password.indexOf("#") === -1) 
    {
        message = "Password must contain #";
    }

    if (message !== "") 
    {
        wrongCount++;
        document.getElementById("error").innerHTML = message;
        document.getElementById("count").innerHTML = "Wrong Attempts: " + wrongCount;
        return false; // Prevent form submission
    }

    document.getElementById("error").innerHTML = "Login Successful";
    return true; // Allow form submission
}