// Configuração do emailjs
emailjs.init("seu_user_id");

// Função para enviar o email
function enviarEmail(form) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Obtém os valores dos campos
    var email = document.getElementById('email').value;

    // Verifica se o email é válido
    if (validarEmail(email)) {
        // Parâmetros para enviar o email
        var params = {
            to_email: email,
            message_html: 'Aqui está o link para redefinir sua senha: [coloque o link aqui]',
            from_name: 'Seu Nome',
            to_name: 'Destinatário',
            subject: 'Redefinição de Senha'
        };

        // Envia o email usando o serviço de emailjs
        emailjs.send('service_gr5gneq', 'template_qalpwak', params, 'JEU7jNSGKKe_ieiM7')
            .then(function (response) {
                alert('Email enviado com sucesso!');
                form.reset(); // Limpa o formulário
            }, function (error) {
                alert('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
                console.error('Erro ao enviar o email:', error);
            });
    } else {
        alert('Por favor, insira um endereço de email válido.');
    }
}

// Função para validar o formato do email
function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Event listener para o evento submit do formulário
document.getElementById('formulario').addEventListener('submit', function (event) {
    enviarEmail(this);
});
