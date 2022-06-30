const ze = document.querySelector('.ze');  /* Seleciona o ze na div html*/
const obstaculo = document.querySelector('.obstaculo');  /* Seleciona o obstaculo na div html*/
const nuvem = document.querySelector('.nuvem');  /* Seleciona a nuvem na div html*/

const replay = () => {
    window.location.reload()
}

/* Função que adiciona a classe jump do css no ze */
const pulo = () => {
    ze.classList.add('pulo');

    setTimeout (() => {
        ze.classList.remove('pulo');
    }, 500)

}

const loop = setInterval(() => {

    const obstaculoPosition = obstaculo.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const zePosition = +window.getComputedStyle(ze).bottom.replace('px', ' ');

    if (obstaculoPosition <= 120&& obstaculoPosition  > 0 && zePosition < 105) {

        /*para o cano onde estava quado  morre*/
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        /*para o ze onde estava quado morre*/
        ze.style.animation = 'none';
        ze.style.bottom = `${zePosition}px`;

        ze.src = 'img/raphael-gameover.png';
        ze.style.width = '9.375rem';
        ze.style.marginLeft = '1rem';

        /*para a nuvem onde estava quado  morre*/
        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;



        clearInterval(loop);
    }
}, 10) 


/*Evento  que lê a tecla e verifica se é cima ou enter*/
document.addEventListener('keydown', function(event) {
    if (event.key === "Enter" ||  event.key === "ArrowUp"  ) {
        pulo();
    }
} );
