/* Criado por Saulo Frauches 20/05/2021
*  Front End para o Navbar responsivo
*  Brincando e treinando...
*/

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    
    /* Melhorar e experiência no Mobile , touchstart
     * ativa o click por padrão*/
    if (event.type === 'touchstart') event.preventDefault();
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
}

btnMobile.addEventListener('click', toggleMenu);

/* Melhorar e experiência no Mobile */
btnMobile.addEventListener('touchstart', toggleMenu); 


