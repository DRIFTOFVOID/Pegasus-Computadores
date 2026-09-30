
    const bannerCookies = document.getElementById('banner-cookies');
   
    const btnAceitar = document.getElementById('btn-aceitar-cookies');
   
    const cookiesAceitos = localStorage.getItem('cookiesAceitos');

    if (cookiesAceitos === 'sim') {
 
        bannerCookies.classList.add('oculto');
    }


    btnAceitar.addEventListener('click', () => {

        localStorage.setItem('cookiesAceitos', 'sim');

        bannerCookies.classList.add('oculto');
    });
