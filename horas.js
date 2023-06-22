// Contador horas
document.addEventListener("DOMContentLoaded", function () {
    var counterElement = document.getElementById("hours-counter");

    // Define o número inicial de horas
    var initialHours = 0;

    // Atualiza o contador de horas
    function updateCounter() {
        initialHours++;
        counterElement.textContent = initialHours + " horas";
    }

    // Chama a função updateCounter a cada segundo
    setInterval(updateCounter, 1000);
});

// Carrossel


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slider")[0].getElementsByTagName("div");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 2000); // Altere aqui para ajustar a duração de cada slide
}

