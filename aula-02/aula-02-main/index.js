var numeroSecreto = 581;
//enquanto o chute for diferente do numero secreto
// operador de negação !=
while (chute != numeroSecreto) {
  var chute = prompt("Digite um número entre 1 e 1000");
  // se o chute for igual ao número secreto
  // operador de comparacao ==
  //operador de atribuição =
  // if (chute == numeroSecreto)
  // resposta alert ( acertou)

  if (chute == numeroSecreto) {
    alert("Acertou");
  } else if (chute > numeroSecreto) {
    alert("Errou... o número secreto é menor");
  } else if (chute < numeroSecreto) {
    alert("Errou... o número secreto é maior");
  }
}
