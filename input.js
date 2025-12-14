function getInfo() {
    var nameInput = document.getElementById("name");
    var passwordInput = document.getElementById("password");
    var emailInput = document.getElementById("email");
    var name = nameInput.value;
    var password = passwordInput.value;
    var email = emailInput.value;
    console.log("Name:", name);
    console.log("Password:", password);
    console.log("Email:", email);
}
