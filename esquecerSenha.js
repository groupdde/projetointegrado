function enviarEmail(form, email) {
    event.preventDefault();

    var email = document.getElementById('email').value;

    if (validarEmail(email)) {
        // Exibe a tela de loading
        exibirLoading();

        var params = {
            to_email: email,
            message_html: 'Aqui está o link para redefinir sua senha: [coloque o link aqui]',
            subject: 'Redefinição de Senha'
        };

        emailjs.send('service_gr5gneq', 'template_qalpwak', params, 'JEU7jNSGKKe_ieiM7')
            .then(function (response) {
                alert('Email enviado com sucesso!');
                form.reset();
                // Oculta a tela de loading após o envio do email
                ocultarLoading();
            }, function (error) {
                alert('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
                console.error('Erro ao enviar o email:', error);
                // Oculta a tela de loading em caso de erro
                ocultarLoading();
            });
    } else {
        alert('Por favor, insira um endereço de email válido.');
    }
}

function validarEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

document.getElementById('formulario').addEventListener('submit', function (event) {
    enviarEmail(this);
});



// Tela de carregamento
function exibirLoading() {
    // Cria um elemento de tela de loading
    var loadingElement = document.createElement('div');
    loadingElement.className = 'loading';


    // Adiciona a tela de loading ao corpo do documento
    document.body.appendChild(loadingElement);
}

function ocultarLoading() {
    // Remove a tela de loading do corpo do documento
    var loadingElement = document.querySelector('.loading');
    if (loadingElement) {
        loadingElement.parentNode.removeChild(loadingElement);
    }
}