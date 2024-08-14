const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assinale a alternativa que apresenta a melhor conceituação do termo meio ambiente:?",
        alternativas: [
            {
                texto: "É a inter-relação entre os diversos componentes físicos e humanos.",
                afirmacao: "Está correto. "
            },
            {
                texto: " É constituído apenas por elementos que fazem parte da natureza",
                afirmacao: "Está incorreto."
            }
        ]
    },
    {
        enunciado: "O conceito de conservação ambiental implica no uso racional dos recursos naturais. Desse modo, ele está diretamente ligado ao conceito de?",
        alternativas: [
            {
                texto: "preservação..",
                afirmacao: "Está incorreto."
            },
            {
                texto: "sustentabilidade.",
                afirmacao: "Está correto."
            }
        ]
    },
    {
        enunciado: "Qual foi a primeira grande conferência internacional, realizada pela Organização das Nações Unidas (ONU), sobre o meio ambiente em nível global??",
        alternativas: [
            {
                texto: "Conferência das Nações Unidas sobre o Meio Ambiente Humano.",
                afirmacao: "Está correto."
            },
            {
                texto: "Conferência das Nações Unidas para o Meio Ambiente e o Desenvolvimento.",
                afirmacao: "Está incorreto."
            }
        ]
    },
    {
        enunciado: "Como é corretamente denominado o sistema ambiental caracterizado pelo conjunto de relações estabelecidas entre uma comunidade e o meio ambiente?",
        alternativas: [
            {
                texto: "Ecossistema.",
                afirmacao: "Está Correto."
            },
            {
                texto: "Natureza.",
                afirmacao: "Está incorreto"
            }
        ]
    },
    {
        enunciado: "Assinale a alternativa que apresenta uma característica do espaço ambiental brasileiro: ",
        alternativas: [
            {
                texto: "Ocorrência de graves impactos ambientais no meio natural.",
                afirmacao: "Está correto"
            },
            {
                texto: "Presença de grandes espaços naturais bastante homogêneos.",
                afirmacao: "Está incorreto. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
