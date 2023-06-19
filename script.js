
const enunciado = [
  ["O que é uma resenha crítica:", 2],
  ["Avalie as duas frases que seguem: <br>I. Ela cheirava à flor de laranja. <br>II. Ela cheirava a flor de laranja. <br>Considerando o uso da crase, é correto afirmar:", 2],
  ["Quais são os tipos de fichamento?", 0],
  ["Qual a diferença entre coesão e coerência?", 0],
  ["A ordem para se confeccionar corretamente uma referência bibliográfica de livro é:", 3],
  ["Indique a opção em que o uso da crase está errado.", 1],
  ["O que é a invisibilidade contextual dos negros causados por algoritmos problemáticos?", 2],
  ["Qual das alternativas abaixo apresenta uma definição correta de coesão textual?", 1]
];
const resposta = [
  ["a) resumir o texto falando sobre as duas partes.",
    "b) resumir o que está no texto.",
    "c) texto que você coloca a sua opinião a respeito de uma determinada produção social.",
    "d)é um texto dissertativo argumentativo o qual se cria uma introdução desenvolvimento e conclusão."],
  ["a) As duas frases são ambíguas em qualquer contexto.",
    "b) A primeira frase significa que alguém exalava o perfume da flor de laranja.",
    "c) A segunda frase significa que alguém tem o perfume da flor de laranja.",
    "d) O “a” da segunda frase deveria conter o acento indicativo da crase."],
  ["a) Citação, bibliográfico e resumo (textual).",
    "b) Opinativo, resumo (textual) e bibliográfico.",
    "c) Crítico, bibliográfico e resumo (textual).",
    "d) Crítico, opinativo e citação."],
  ["A) Coesão é a ligação entre palavras e frases, enquanto coerência é o sentido do texto.",
    "B) Coesão é o sentido do texto, enquanto coerência é a ligação entre palavras e frases.",
    "C) Coesão e coerência são a mesma coisa.",
    "D) Coesão e coerência não têm relação entre si."],
  ["a) Nome do autor, sobrenome. Título. Edição (se houver). Local. Editora. Data.",
    "b) Sobrenome do autor, nome. Título. Local. Edição (se houver). Editora. Data.",
    "c) Nome do autor, sobrenome. Título. Local. Edição (se houver). Editora. Data.",
    "d) Sobrenome do autor, nome. Título. Edição (se houver). Local. Editora. Data."],
  ["a) À noite tudo estará resolvido. Obrigada!",
    "b) O trabalho foi realizado graças à todos nós.",
    "c) Amanhã meus primos chegarão às 16h.",
    "d) Você foi à festa de Natal da empresa?"],
  ["a) A proibição de venda aos usuários negros.",
    "b) A remoção / exclusão de fotos de pessoas negras quando se pesquisa sobre algo.",
    "c) O algoritmo não conseguindo identificar rostos negros.",
    "d) Quando se pesquisa sobre presos, bandidos ou presidiário, se tem uma predominância de pessoas negras."],
  ["a) A coesão é a conformidade entre fatos ou ideias, próprio daquilo que tem nexo, conexão.",
    "b) A coesão é a ligação entre palavras e frases, interligando as diferentes partes de um texto.",
    "c) A coesão é a relação entre o leitor, o autor e o texto.",
    "d) A coesão é a relação entre o título e o conteúdo do texto."]
];
let numerosUsados = [];
let respostaCorreta, acertos=0,erros=0;
document.addEventListener("DOMContentLoaded", function (event) {
  geraNumeroAleatorio();
});

document.querySelector("#btn1").addEventListener("click", verifica);
document.querySelector("#btn2").addEventListener("click", verifica);
document.querySelector("#btn3").addEventListener("click", verifica);
document.querySelector("#btn4").addEventListener("click", verifica);

document.querySelector("#reinicia").addEventListener("click", reiniciaJogo);

const inputAcertos = document.querySelector("#acertos");
const inputErros = document.querySelector("#erros");

function mostraEnun(n_quest) {
  const grupoBotoes = document.querySelector("#botoes");
  const divEnun = document.querySelector("#enunciado");
  divEnun.innerHTML = `${enunciado[n_quest][0]} <br>`;
  respostaCorreta = enunciado[n_quest][1];

  resposta[n_quest].forEach(resp => {
    divEnun.innerHTML += `${resp} <br>`;
  })
}


function geraNumeroAleatorio() {
  let n = Math.floor(Math.random() * enunciado.length);

  if (numerosUsados.length >= 8) {
    console.log(numerosUsados);
    console.log(respostaCorreta)
    return;
  } else if (numerosUsados.includes(n)) {
    geraNumeroAleatorio();
  }
  else {
    console.log(numerosUsados);
    numerosUsados.push(n);
    mostraEnun(n);
    document.querySelector("#proximo").disabled = true;
    desabilitaBotoesResposta(false);
    console.log(respostaCorreta)
  }
  
}
function desabilitaBotao(){
  if(document.querySelector("#proximo").disabled == true){
    document.querySelector("#proximo").disabled = false;
  }
}
function desabilitaBotoesResposta(v){
  if(v){
  document.querySelector("#btn1").disabled = true;
  document.querySelector("#btn2").disabled = true;
  document.querySelector("#btn3").disabled = true;
  document.querySelector("#btn4").disabled = true;
  }
  else{
    document.querySelector("#btn1").disabled = false;
  document.querySelector("#btn2").disabled = false;
  document.querySelector("#btn3").disabled = false;
  document.querySelector("#btn4").disabled = false;
  }
}
function verifica(e) {
  desabilitaBotao();
  desabilitaBotoesResposta(true);
 if(e.target.dataset.btn == respostaCorreta){
  acertos++;
  acertosI();
 }
 else{
  erros++;
  errosI();
 }

}

function acertosI(){
  inputAcertos.value = acertos;
}
function errosI(){
  inputErros.value = erros;
}

function reiniciaJogo(){
  window.location.reload();
}