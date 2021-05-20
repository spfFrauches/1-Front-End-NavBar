/* Criado por Saulo Frauches 20/05/2021
*  Front End para o Navbar responsivo
*  Brincando e treinando...
*/

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    
}

btnMobile.addEventListener('click', toggleMenu);


