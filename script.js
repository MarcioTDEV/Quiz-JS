const resp = document.querySelector(".pergunta")


const display_acertos = document.querySelector(".titulo")

const display_perguntas = document.querySelector(".pergunta")
let acertos = 0
let contPerguntas = 0

const perguntas = [
    `<h2>De quem é a famosa frase “Penso, logo existo”?</h2>

    <div class="respostas">
    <ul>
        <li class='left'>
            Platão
        </li>
        <li class='left'>
            Galileu Galilei
        </li>
        <li class="right">
            Descartes
        </li>
        <li class='left'>
            Sócrates
        </li>
    </ul>`
    ,
    `<h2>De onde é a invenção do chuveiro elétrico?</h2>

    <div class="respostas">
    <ul>
    <li class="right">
            Brasil
        </li>
        <li class='left'>
        Inglaterra
        </li>
        <li class='left'>
        Austrália
        </li>
        
        <li class='left'>
        Itália
        </li>
    </ul>`
    ,
    `<h2>Quais o menor e o maior país do mundo?</h2>

    <div class="respostas">
    <ul>
    
        <li class='left'>
        São Marino e Índia
        </li>
        <li class='left'>
        Malta e Russia
        </li>
        
        <li class='left'>
        Nauru e China
        </li>
        <li class="right">
    Vaticano e Rússia
        </li>
    </ul>`
    ,
    `<h2>Quantas casas decimais tem o número pi?</h2>

    <div class="respostas">
    <ul>
    
        <li class='left'>
        Duas
        </li>
        <li class='left'>
        Incontáveis
        </li>
        
        <li class='left'>
        Milhares
        </li>
        <li class="right">
        Infinitas
        </li>
    </ul>`
    ,
    `<h2>Quanto tempo a luz do Sol demora para chegar à Terra?</h2>

    <div class="respostas">
    <ul>
    <li class="right">
    8 minutos
    </li>
        <li class='left'>
        12 minutos
        </li>
        <li class='left'>
        1 dia
        </li>
        
        <li class='left'>
        Incontáveis
        </li>
        
    </ul>`
    ,
    `
    <h1>Parabéns! Você chegou ao fim!</h1>
    <button class='tentarNovamente'> Tentar novamente </button>
    `
]

function tentarNovamente() {
    console.log('aqui')
    contPerguntas = 0
    display_perguntas.innerHTML = perguntas[contPerguntas]
}


display_perguntas.innerHTML = perguntas[contPerguntas]
resp.addEventListener("click", (e => {
    const classe = e.target.className
    if (classe == "tentarNovamente") {
        contPerguntas = 0
        display_perguntas.innerHTML = perguntas[contPerguntas]
        acertos = 0
        display_acertos.innerHTML = "Total Acertos: " + acertos
    }
    if (classe === "right") {
        console.log("Contador acerto" + contPerguntas)
        acertos += 10
        display_acertos.innerHTML = "Total Acertos: " + acertos

        contPerguntas++
        display_perguntas.innerHTML = perguntas[contPerguntas]
        //aqio ainda vai apassar o objeto com as perguntas
    }

    if (classe === "left") {
        console.log("Contador erro" + contPerguntas)
        contPerguntas++
        display_perguntas.innerHTML = perguntas[contPerguntas]

    }
}))

//botao hide já criado
//ao acertar ou errar a pergunta, o botao vai receber nova classe
//ao clicar ++cont display=innerhtml botaohide


