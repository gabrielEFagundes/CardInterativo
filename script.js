const nomeIn = document.getElementById('nome-input');
const nomeOut = document.getElementById('cartao-nome');

nomeIn.addEventListener('input', () => {
    nomeOut.innerText = nomeIn.value;
});

const cardColor = document.getElementById('cartao');
const btnAzul = document.getElementById('btn-azul');
const btnVerde = document.getElementById('btn-verde');

btnAzul.addEventListener('click', () => {
    cardColor.classList.remove('fundo-verde');

    cardColor.classList.add('fundo-azul')
});

btnVerde.addEventListener('click', () => {
    cardColor.classList.remove('fundo-azul');

    cardColor.classList.add('fundo-verde');
});

const font = document.getElementById('btn-fonte');

font.addEventListener('click', () => {
    document.getElementById('cartao').classList.toggle('fonte-alternativa');
})

const imgSel = document.getElementById('imagem-select');
const imgCard = document.getElementById('cartao-img');

imgSel.addEventListener('change', () => {
    imgCard.setAttribute('src', imgSel.value);
});

const habilidadeIn = document.getElementById('habilidade-input');
const btnAdd = document.getElementById('btn-adicionar');
const list = document.getElementsByTagName('ul');

btnAdd.addEventListener('click', () => {
    const newHab = document.createElement('li');
    newHab.textContent = habilidadeIn.value;
    document.getElementById('lista-habilidades').appendChild(newHab);

    habilidadeIn.value = "";
})