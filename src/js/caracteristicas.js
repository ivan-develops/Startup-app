const allPreviews = document.getElementById('previews');
const allTabs = document.getElementById('tabs');


allTabs.addEventListener( 'click' , (e)=>{
    e.preventDefault();
    
    // console.log(e.target);
    // Info sobre el elemento que se seleccionó en el evento
    
    const tabSeleccionada = e.target.closest('.tab');
    // console.log(tabSeleccionada);

    if(tabSeleccionada){ //* Si TRUE selección de tab, ejecuta
        
        const id = tabSeleccionada.dataset.id;
        // console.log(`data-id seleccionada es: ${id}`);
        allPreviews.querySelector('.active').classList.remove('active');
        allPreviews.querySelector(`[data-id="${id}"]`).classList.add('active');

        allTabs.querySelector('.active').classList.remove('active');
        allTabs.querySelector(`[data-id="${id}"]`).classList.add('active');
    }
});
