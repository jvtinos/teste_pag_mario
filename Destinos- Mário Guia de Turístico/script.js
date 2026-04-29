/*Paisagens*/

const galeriaPaisagens = document.querySelector('.paisagens');

if (galeriaPaisagens) {

  const slides = galeriaPaisagens.querySelectorAll('.galeria-trilho .slide');
  const btnProximo = galeriaPaisagens.querySelector('.controle.proximo');
  const btnAnterior = galeriaPaisagens.querySelector('.controle.anterior');

  console.log('JS carregou');

  let index = 0;

  function mostrarSlide(i) {
    slides.forEach((slide) => {
      slide.classList.remove('ativo');
    });

    slides[i].classList.add('ativo');
  }

  if (btnProximo && btnAnterior && slides.length > 0) {
    btnProximo.addEventListener('click', () => {
      index++;
      if (index >= slides.length) index = 0;
      mostrarSlide(index);
    });

    btnAnterior.addEventListener('click', () => {
      index--;
      if (index < 0) index = slides.length - 1;
      mostrarSlide(index);
    });
  }

}



/*Interação Cidades, Vilas e Locais*/

const cardsLocais = document.querySelectorAll('.card-local');
const botoesFecharInfo = document.querySelectorAll('.fechar-info');

cardsLocais.forEach((card) => {
  card.addEventListener('click', () => {
    const jaEstaAtivo = card.classList.contains('ativo');

    cardsLocais.forEach((item) => {
      item.classList.remove('ativo');
    });

    if (!jaEstaAtivo) {
      card.classList.add('ativo');
    }
  });
});

botoesFecharInfo.forEach((botao) => {
  botao.addEventListener('click', (event) => {
    event.stopPropagation();
    const card = botao.closest('.card-local');
    card.classList.remove('ativo');
  });
});

document.addEventListener('click', (event) => {
  const clicouDentroDeUmCard = event.target.closest('.card-local');

  if (!clicouDentroDeUmCard) {
    cardsLocais.forEach((card) => {
      card.classList.remove('ativo');
    });
  }
});