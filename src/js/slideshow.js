const slideshow = document.getElementById('slideshow');
const slides = document.getElementById('slides');
const indicadores = document.getElementById('indicadores');
const btnCambio = document.getElementById('cambiar');

btnCambio.addEventListener( 'click' , ()=>{
    const primerSlide = slides.children[0];
    const anchoSlide = primerSlide.offsetWidth;
    console.log(anchoSlide);
    slides.style.transform = `translatex(-${anchoSlide}px)`;
    slides.appendChild(primerSlide);
    // console.log(primerSlide);
});