const allPreviews = document.querySelectorAll('.thumb');
const allTabs = document.querySelectorAll('.tab');

allTabs.forEach((tab,indice) =>{
    tab.addEventListener( 'click' , ()=>{
        if(tab.className === 'tab active'){
            tab.classList.remove('active');
        }
    });
});