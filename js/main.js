function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

document.addEventListener('scroll', function () {
    const skillContainers = document.querySelectorAll('.skill-icon-container');
    skillContainers.forEach((container, index) => {
        if (isInViewport(container)) {
            let animationClass;
            // Ejemplo de asignación de clases basado en el índice
            switch (index % 4) {
                case 0:
                    animationClass = 'animate-from-left';
                    break;
                case 1:
                    animationClass = 'animate-from-right';
                    break;
                case 2:
                    animationClass = 'animate-from-top';
                    break;
                case 3:
                    animationClass = 'animate-from-bottom';
                    break;
            }
            container.classList.add(animationClass);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.querySelector('.btn-primary');
  
    setInterval(function () { // Establece un intervalo para aplicar la animación cada 5 segundos
      btn.classList.add('jello-diagonal');
    }, 3000);
  
    btn.addEventListener('animationend', function () { // Escucha el final de la animación para quitar la clase
      btn.classList.remove('jello-diagonal');
    });
  });
  


