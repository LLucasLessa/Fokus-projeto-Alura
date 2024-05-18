const elementoHTML = document.querySelector('html');
const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');
const bannerImage = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

btFoco.addEventListener('click', () => {
  alterandoContexto('foco');
});

btCurto.addEventListener('click', () => {
  alterandoContexto('descanso-curto');
});

btLongo.addEventListener('click', () => {
  alterandoContexto('descanso-longo');
});

function alterandoContexto(contexto){
  elementoHTML.setAttribute('data-contexto', contexto);
  bannerImage.setAttribute('src', `/imagens/${contexto}.png`);
  switch (contexto) {
    case 'foco':
      titulo.innerHTML = `Otimize sua produtividade,<br>
      <strong class="app__title-strong">mergulhe no que importa.</strong>`;
      break;
    case 'descanso-curto':
      titulo.innerHTML = `Que tal dar uma respirada?<br>
      <strong class="app__title-strong">Faça uma pausa curta!</strong>`;
      break;
    case 'descanso-longo':
      titulo.innerHTML = `Hora de voltar à superfície.<br>
      <strong class="app__title-strong">Faça uma pausa longa.</strong>`;
    default:
      break;
  }
};