

const habilidades = document.querySelector(".habilidades__titulo");
const portafolio = document.querySelector(".proyectos__titulo");
const certificaciones = document.querySelector(".titulo-certificaciones");
const menu = document.querySelector(".navbar__menu");
const navbarActivado = document.querySelector(".navbar__activado");
const bar = document.querySelector(".bar");
const botonInicio = document.querySelector(".boton--inicio");
const navBar = document.querySelector(".header");
const logo = document.querySelector(".logo__contenedor");
const contenedorTitulo = document.querySelector(".contenedor-titulo");
const contenedorTitulo2 = document.querySelector(".contenedor-titulo2");
const contenedorTitulo3 = document.querySelector(".contenedor-titulo3");

const verifyVisibility = (entradas) => {
    for (const entrada of entradas) {
        
        if (entrada.isIntersecting) {
            entrada.target.classList.add("animated");
        }

    }
}


const options = {
    root: null,
    rootMargin: "0px 0px -50px 0px",
    threshold: 0.2
}

const observador = new IntersectionObserver(verifyVisibility,options);

observador.observe(habilidades);
observador.observe(portafolio);
observador.observe(certificaciones);
observador.observe(contenedorTitulo);
observador.observe(contenedorTitulo2);
observador.observe(contenedorTitulo3);


menu.addEventListener("click",()=> {
    navbarActivado.classList.toggle("active");

});

menu.addEventListener("click",()=> {
    bar.classList.toggle("animate");
});

document.addEventListener('click', (event) => {

    const clicDentroDelMenu = menu.contains(event.target);
    const clicDentroDelNavbarActivado = navbarActivado.contains(event.target);
    if (!clicDentroDelMenu && !clicDentroDelNavbarActivado) {
      navbarActivado.classList.remove('active');
      bar.classList.remove("animate");
    }
});





botonInicio.addEventListener("click", function() {
    smoothScrollTo(0, 1000);
});
  
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime;
  
    function scroll(currentTime) {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const easing = easeOutCubic(elapsed / duration);
      const newPosition = startPosition + (distance * easing);
      window.scrollTo(0, newPosition);
      if (elapsed < duration) requestAnimationFrame(scroll);
    }
  
    function easeOutCubic(t) {
      return (t -= 1) * t * t + 1;
    };
  
    requestAnimationFrame(scroll);
  }
  
  


  window.addEventListener("load", () => {
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 0) {
            navBar.classList.add("scrolled");
            logo.classList.add("logo-activo");
        } else {
            navBar.classList.remove("scrolled");
            logo.classList.remove("logo-activo");
        }
    });
});













