let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let submitBtn = document.getElementById("submitBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");
let errorP = document.getElementById("error");

let dataBase = [
    {
        user: "swetank@gmail.com",
        password: "iamcool2"
    },
];

signinBtn.onclick = function() {
    nameField.style.maxHeight= "0";
    title.innerHTML = "Sign IN";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}

signupBtn.onclick = function() {
    nameField.style.maxHeight= "60px";
    title.innerHTML = "Sign UP";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

submitBtn.onclick = function() {
    let userEmail = document.getElementById('fuser').value;
    let pass = document.getElementById('fpass').value;
    console.log(userEmail);
    console.log(pass);
    if (userEmail === dataBase[0].user && pass === dataBase[0].password)
        window.location.href = "login.html";
    else
        errorP.innerHTML = "Wrong Email/Password";
}
