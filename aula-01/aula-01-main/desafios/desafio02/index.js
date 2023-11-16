var nomeUsuario = prompt("Olá, Informe seu nome:");
var valorEmEthereum = prompt("Qual é o valor em Ethereum que você deseja converter ?" );
var cotacaoEmEthereum = 9993.71;
var valorEmReal = (valorEmEthereum * cotacaoEmEthereum).toFixed(2);
// valorEmReal = valorEmReal.toFixed(2);
alert('Olá ' + nomeUsuario + '! O valor em reais é de R$ '+ valorEmReal);