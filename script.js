function validateForm() {
    var id = document.getElementById('id').value;
    var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var faculty = document.getElementById('faculty').value;
    var email = document.getElementById('email').value;
    var phonenumber = document.getElementById('phonenumber').value;
    var department = document.getElementById('department').value;
    var password = document.getElementById('password').value;
    var nationality = document.getElementById('nationality').value;
    var retypepassword = document.getElementById('retypepassword').value;

    var idPattern = /^\d{5}$/;
    var phonePattern = /^\d{10}$/;
    
   
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var passwordPattern = /^.{8,16}$/;

    if (id.trim() === "" || firstname.trim() === "" || lastname.trim() === "" || faculty.trim() === "" ||
        phonenumber.trim() === "" || department.trim() === "" || password.trim() === "" ||
        retypepassword.trim() === ""|| nationality.trim() === "") {
        alert("All fields must be filled out.");
        return false;
    }

    if (!idPattern.test(id)) {
        alert("ID must be exactly five digits.");
        return false;
    }

    if (!phonePattern.test(phonenumber)) {
        alert("Phone number must be exactly ten digits.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Invalid email address.");
        return false;
    }

    window.location.href = "welcomepage.html";
    return false;
    
}

function validateLoginForm() {
    var id = document.getElementById('email').value; 
    var password = document.getElementById('password').value;

    var idPattern = /^\d{5}$/; // ID regex pattern
    var passwordPattern = /^.{8,16}$/; // Password regex pattern

    if (id.trim() === "") {
        alert("ID field cannot be empty");
        return false;
    }

    if (!idPattern.test(id)) {
        alert("ID must be exactly five digits");
        return false;
    }

    if (password.trim() === "") {
        alert("Password field cannot be empty");
        return false;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be between 8 to 16 characters");
        return false;
    }

    window.location.href = "welcomepage.html";

    return false;
}

