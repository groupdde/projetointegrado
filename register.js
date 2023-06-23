function register() {
    var novoNome = document.getElementById("nomeCompleto").value;
    var novaMatricula = document.getElementById("matricula").value;
    var novoEmail = document.getElementById("email").value;
    var novaSenha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
    var novaData = document.getElementById("nascimento").value;
    var novoTelefone = document.getElementById("celular").value;

    var userExists = users.some(function (user) {
        return user.email === email;
    });

    if (userExists) {
        alert("E-mail já está em uso. Por favor, utilize outro e-mail.");
    } else if (senha !== confirmarSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
    } else {
        var newUser = {
            name: novoNome,
            matricula: novaMatricula,
            email: novoEmail,
            password: novaSenha,
            dob: novaData,
            phone: novoTelefone
        };

        users.push(newUser);

        alert("Registro realizado com sucesso!");
    }
}