document.addEventListener("DOMContentLoaded", function () {
    var counterElement = document.getElementById("hours-counter");
    var maxImages = document.getElementsByClassName("slider")[0].getElementsByTagName("div").length;
    var maxHours = maxImages * 50; // Limite máximo baseado no número de imagens

    var initialHours = 0;

    function updateCounter() {
        initialHours++;

        if (initialHours <= maxHours) {
            counterElement.textContent = initialHours + " horas";
        } else {
            counterElement.textContent = maxHours + " horas (limite máximo alcançado)";
        }
    }

    setInterval(updateCounter, 50);
});

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

    setTimeout(showSlides, 2000);
}
