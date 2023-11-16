var ValorEmDolar = 30;
var cotacaoDolar =  5.32;
//Formula para conversão

var media = ValorEmDolar * cotacaoDolar ;
//tofixed() js mozilla documentation
var media = media.toFixed(2);
resultado = media ;

alert ('R$' + resultado);
