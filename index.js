document.getElementById("forgotPasswordForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    var email = document.getElementById("email").value;

    alert("Um e-mail de redefinição de senha foi enviado para " + email);
});