
function enviarEmail(form, email) {
    event.preventDefault();


    var email = document.getElementById('email').value;


    if (validarEmail(email)) {

        var params = {
            to_email: email,
            message_html: 'Aqui está o link para redefinir sua senha: [coloque o link aqui]',
            subject: 'Redefinição de Senha'
        };


        emailjs.send('service_gr5gneq', 'template_qalpwak', params, 'JEU7jNSGKKe_ieiM7')
            .then(function (response) {
                alert('Email enviado com sucesso!');
                form.reset();
            }, function (error) {
                alert('Erro ao enviar o email. Por favor, tente novamente mais tarde.');
                console.error('Erro ao enviar o email:', error);
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
