// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function () {
    // Obtém o formulário de certificados pelo ID
    const form = document.getElementById('certificates-form');

    // Adiciona um ouvinte de evento para o envio do formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Exibe a mensagem de carregamento
        const loadingMessage = document.createElement('div');
        loadingMessage.textContent = 'Enviando...';
        form.insertAdjacentElement('beforebegin', loadingMessage);

        // Define um atraso de 2 segundos antes do envio
        setTimeout(function () {
            // Remove a mensagem de carregamento
            loadingMessage.remove();

            // Simula o envio do certificado
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = 'O certificado foi enviado com sucesso para ' + email;
            form.insertAdjacentElement('beforebegin', successMessage);

            // Limpa os campos do formulário após o envio bem-sucedido
            form.reset();

            // Remove a mensagem de sucesso após 5 segundos
            setTimeout(function () {
                successMessage.remove();
            }, 5000);
        }, 2000);
    });
});
