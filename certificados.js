function verMaisCertificados() {
    var maisCertificadosDiv = document.getElementById("maisCertificados");
    var verMaisButton = document.getElementById("vermais");

    if (maisCertificadosDiv.classList.contains("maiscertificadosescondido")) {
      maisCertificadosDiv.classList.remove("maiscertificadosescondido");
      maisCertificadosDiv.classList.add("maiscertificadosvisivel");
      verMaisButton.textContent = "Esconder certificados";
    } else {
      maisCertificadosDiv.classList.remove("maiscertificadosvisivel");
      maisCertificadosDiv.classList.add("maiscertificadosescondido");
      verMaisButton.textContent = "Visualizar mais certificados";
    }
  }

function exibirDiv() {
    var div = document.getElementById('minhaDiv');
    div.classList.toggle('escondida');
  }

var maisCertificadosDiv = document.getElementById("maisCertificados");
maisCertificadosDiv.classList.add("maiscertificadosescondido");