const slideshow = document.getElementById('slideshow');
const slides = document.getElementById('slides');
const indicadores = document.getElementById('indicadores');
const btnCambio = document.getElementById('cambiar');

const cambiarSlide = () => {
    const primerSlide = slides.children[0];
    const anchoSlide = primerSlide.offsetWidth;

    // console.log(anchoSlide);
    slides.style.transform = `translatex(-${anchoSlide}px)`;
    slides.style.transition = `ease-in-out 0.5s all`;
    
    // Al ejecutar y trasladarse, en 2000ms agrega el primerSlide al final, dejando ver la animación y darle nueva posición 
    setTimeout(()=>{
        slides.appendChild(primerSlide);
        slides.style.transition = `none`;
        slides.style.transform = `translatex(0px)`;

    } , 2000);

}

setInterval(()=>{
    cambiarSlide();
} , 5000);