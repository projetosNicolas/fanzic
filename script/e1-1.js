const botao2 = document.querySelector("#o");
const next = document.querySelector("#next");
const prof = document.querySelector("#prof");
const aluno = document.querySelector("#aluno");
let taJanela = window.innerWidth;

function mostra(conteudo) {
    next.style.visibility = 'hidden';
    conteudo.innerHTML = "<p>Podemos fazer 3 listas com os sintomas, contendo os mais comuns, o menos comuns e os graves.</p><ul><ol>Sistomas comuns:</ol><li>febre</li><li>tosse seca</li><li>cansaço</li></ul><ul><ol>Sintomas menos comuns:</ol><li>dores e desconforto</li><li>dor de garganta</li><li>diarreia</li><li>conjuntivite</li><li>dor de cabeça</li><li>perda de paladar ou olfato</li><li>erupção cutânea na pele ou descoloração dos dedos das mãos ou dos pés</li></ul><ul><ol>Sintomas graves:</ol><li>dificuldade de respirar ou falta de ar</li><li>dor ou pressão no peito</li><li>perda de fala ou movimento</li></ul> ";
    botao2.style.visibility = 'visible';
    if (taJanela < 600) {
    aluno.style.width = 30 + '%';
    prof.style.width = 20 + '%';
}else{
    aluno.style.width = 10 + '%';
    prof.style.width = 6 + '%';
}
}

function sp() {
    if (taJanela < 600){
    prof.style.width = 30 + '%';
    aluno.style.width = 20 + '%';
    }else{
    prof.style.width = 10 + '%';
    aluno.style.width = 6 + '%';
    }
}

function e3() {
    window.location.href = ("e1-2.html")
}
