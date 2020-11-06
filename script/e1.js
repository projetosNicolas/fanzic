const next = document.querySelector("#next");
const botao1 = document.querySelector("#Sintomas");
const prof = document.querySelector("#prof");
const aluno = document.querySelector("#aluno");
let taJanela = window.innerWidth;

function mostra(conteudo) {
    conteudo.innerHTML = "<p>Coronavírus é uma familia de vírus, eles tem esse nome por conta que sua estrutura é semelhante uma coroa. Eles causam infecções respiratórias e já provocaram outras doenças  normalmente eles circulam apenas entre animais como morcegos e roedores, mas passam a infectar também as pessoas quando a convivência é muito próxima e os vírus sofrem mutações espontâneas e aleatórias.</p><br><div></div> ";
    next.style.visibility = 'hidden';
    botao1.style.visibility = 'visible';
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

function e2() {
    window.location.href = ("e1-1.html")
}
