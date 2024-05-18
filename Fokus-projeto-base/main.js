const elementoHTML = document.querySelector('html');
const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');
const bannerImage = document.querySelector('.app__image');
const imagemBtPlayPause = document.querySelector('.app__card-primary-butto-icon');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const btComecar = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const tempoNaTela = document.querySelector('#timer');

const tocarMusica = document.getElementById('alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const muPlay = new Audio('./sons/play.wav');
const muPause = new Audio('./sons/pause.mp3');
const muFim = new Audio('./sons/beep.mp3');

let tempoDecorrido = 1500;
let intervaloId = null;

musica.loop = true;
musica.volume = 0.5;
muFim.volume = 0.3;



tocarMusica.addEventListener('change', () => {
  if (musica.paused) {
    musica.play();
  } else {
    musica.pause();
  }
})

btFoco.addEventListener('click', () => {
  tempoDecorrido = 1500;
  alterandoContexto('foco');
  btFoco.classList.add('active');
});

btCurto.addEventListener('click', () => {
  tempoDecorrido = 300;
  alterandoContexto('descanso-curto');
  btCurto.classList.add('active');
});

btLongo.addEventListener('click', () => {
  tempoDecorrido = 900;
  alterandoContexto('descanso-longo');
  btLongo.classList.add('active');
});

function alterandoContexto(contexto) {
  mostrarTempo();
  elementoHTML.setAttribute('data-contexto', contexto);
  bannerImage.setAttribute('src', `./imagens/${contexto}.png`);

  // muito util para execultar uma função em cada item de um array, nesse caso ele está limpando a classe active de cada item.
  botoes.forEach(function (contexto) {
    contexto.classList.remove('active');
  })
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

const contagemRegressiva = () => {
  if (tempoDecorrido <= 0) {
    zerar();
    muFim.play();
    alert('tempo finalizado!')
    return
  };
  tempoDecorrido -= 1;
  mostrarTempo();
}

btComecar.addEventListener('click', iniciar);

function iniciar() {
  if (intervaloId) {
    muPause.play();
    zerar();
    return
  }
  muPlay.play();
  iniciarOuPausarBt.innerHTML = 'Pausar';
  imagemBtPlayPause.setAttribute('src', './imagens/pause.png');
  intervaloId = setInterval(contagemRegressiva, 1000);
};

function zerar() {
  iniciarOuPausarBt.innerHTML = 'Começar';
  imagemBtPlayPause.setAttribute('src', './imagens/play_arrow.png');
  clearInterval(intervaloId);
  intervaloId = null;
}

function mostrarTempo(){
  const tempo = new Date(tempoDecorrido * 1000);
  const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'});
  tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();