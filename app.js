alert("Boas-Vindas ao jogo");
let numeroMaximo = 110;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while(chute != numeroSecreto) {
    chute = prompt("Digite um número entre 1 e " + numeroMaximo);

    if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
        alert("O número secreto é menor que " + chute);
    } else {
        alert("O número secreto é maior que " + chute);
    }

    tentativas++;
};

let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert("Parabens, você acertou com " + tentativas + " tentativas");
