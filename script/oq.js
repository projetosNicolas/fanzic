const next = document.querySelector("#next");
const botao = document.querySelector("#corona");
const prof = document.querySelector("#prof");
const aluno = document.querySelector("#aluno");
let taJanela = window.innerWidth;

function mostra(conteudo) {
    conteudo.innerHTML = "<p>Covid-19 é uma doença respiratória causada pelo vírus SARS-CoV-2 da familia conoravírus. Até agora, a doença levou a óbito 1.235.678 pessoas de todo o mundo</p>";
    next.style.visibility = 'hidden';
    botao.style.visibility = 'visible'; 
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

function e1() {
    window.location.href = ("e1.html")
}
