function verMaisCertificados() {
  var maisCertificadosDiv = document.getElementById("maisCertificados");
  var verMaisButton = document.getElementById("vermais");

  if (maisCertificadosDiv.classList.contains("maiscertificadosescondido")) {
    maisCertificadosDiv.classList.remove("maiscertificadosescondido");
    maisCertificadosDiv.classList.add("maiscertificadosvisivel");
    verMaisButton.textContent = "Ocultar certificados";
  } else {
    maisCertificadosDiv.classList.remove("maiscertificadosvisivel");
    maisCertificadosDiv.classList.add("maiscertificadosescondido");
    verMaisButton.textContent = "Visualizar mais certificados";
  }
}

var maisCertificadosDiv = document.getElementById("maisCertificados");
maisCertificadosDiv.classList.add("maiscertificadosescondido");

var divAtualmenteExibida = null; 

  function exibirDiv(numeroCertificado) {
    var div = document.getElementById('minhaDiv');
    var imagemCertificado = document.getElementById('imagemdiv');

    if (divAtualmenteExibida === div) {
      div.classList.add('escondida');
      divAtualmenteExibida = null;
      return;
    }

    if (divAtualmenteExibida !== null) {
      divAtualmenteExibida.classList.add('escondida');
    }

    switch (numeroCertificado) {
      case 1:
        imagemCertificado.src = 'imagens/certificado1.PNG';
        break;
      case 2:
        imagemCertificado.src = 'imagens/certificado2.PNG';
        break;
      case 3:
        imagemCertificado.src = 'imagens/certificado3.PNG';
        break;
      case 4:
        imagemCertificado.src = 'imagens/certificado4.PNG';
        break;
      default:

        div.classList.add('escondida');
        return;
    }

    div.classList.remove('escondida');
    divAtualmenteExibida = div;
  }