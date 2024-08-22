document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Aquí puedes agregar código para manejar la reserva
    alert('Buscando vuelos...');
});

let slideIndex = 0;
let slides = document.getElementsByClassName("carousel-images")[0];
let slideWidth = slides.getElementsByTagName("img")[0].clientWidth;
showSlides();

function showSlides() {
    if (slideIndex >= slides.getElementsByTagName("img").length) {
        slideIndex = 0;
    }

    slides.style.transform = `translateX(${-slideWidth * slideIndex}px)`;
    slideIndex++;
    setTimeout(showSlides, 3000); // Cambia la imagen cada 3 segundos
}



