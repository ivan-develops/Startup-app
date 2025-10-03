const btnDemo = document.getElementById('btnDemo');
const overlayVideo = document.getElementById('overlay-video');

btnDemo.addEventListener( 'click' , ()=>{
    overlayVideo.classList.add('active');
});

overlayVideo.addEventListener('click' , ()=>{
    overlayVideo.classList.remove('active');
});