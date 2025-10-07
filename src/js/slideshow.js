const slideshow = document.getElementById('slideshow');
const slides = document.getElementById('slides');
const indicadores = document.getElementById('indicadores');
const btnCambio = document.getElementById('cambiar');
let slideActual = 1

const cambiarSlide = () => {
    const primerSlide = slides.children[0];
    const anchoSlide = primerSlide.offsetWidth;

    slides.style.transform = `translatex(-${anchoSlide}px)`;
    slides.style.transition = `ease-in-out 0.5s all`;
    
    setTimeout(()=>{
        slides.appendChild(primerSlide);
        slides.style.transition = `none`;
        slides.style.transform = `translatex(0px)`;
        
    } , 2000);
    // Al ejecutar y trasladarse, en 2000ms agrega el primerSlide al final, dejando ver la animación y darle nueva posición 

    if(slideActual < slides.children.length) {
        slideActual++;
    }
    else {
        slideActual = 1;
    }
    indicadores.querySelector('.active').classList.remove('active');

    indicadores.children[slideActual -1].classList.add('active');
    


}

setInterval(()=>{
    cambiarSlide(); 
} , 5000);
// * Ejecuta función cada 5seg