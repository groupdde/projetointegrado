document.getElementById("forgotPasswordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtenha o valor do campo de e-mail
    var email = document.getElementById("email").value;

    // Aqui você pode adicionar lógica para processar o endereço de e-mail, como enviar um e-mail de redefinição de senha para o usuário.

    // Exemplo de exibição de uma mensagem de sucesso
    alert("Um e-mail de redefinição de senha foi enviado para " + email);
});