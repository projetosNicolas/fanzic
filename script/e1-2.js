const botao = document.querySelector("#next");
const final = document.querySelector("#final");
const prof = document.querySelector("#prof");
const aluno = document.querySelector("#aluno");
let taJanela = window.innerWidth;

function mostra(conteudo) {
    botao.style.visibility = 'hidden';
    final.style.visibility = 'visible';
    conteudo.innerHTML = "<p>Para nos previnir dessa doença, temos que</p><h1>FICAR EM CASA</h1><h1>LAVAR AS MÃOS CONSTANTIMENTE COM AGUA E SABÃO E USAR ÁLCOOL EM GEL</h1><h1>SE SAIR MANTER DISTÂNCIA DE 2 METROS DAS PESSOAS E USAR MÁSCARA O TEMPO TODO</h1>";
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



