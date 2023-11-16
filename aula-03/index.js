//lista


var listaFilmes = [
    "https://www.guiadasemana.com.br/contentFiles/image/opt_w1280h960/2017/07/FEA/55068_transformers-b.jpg",
    "https://leiturafilmica.com.br/wp-content/uploads/2017/02/a-chegada-poster.jpg",
    "https://www.europanet.com.br/superposter/images/vejapordentro/45724/45724.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/7/76/10_Things_I_Hate_About_You.jpg",
    "https://br.web.img2.acsta.net/pictures/23/05/16/22/53/0156803.jpg",
    "https://www.mundoconectado.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?format=webp&quality=91&imagick=uploads.mundoconectado.com.br/2022/09/27100314/serie-spotify-netflix.jpg"
  ];
  // listaFilmes[0] =
  //   "https://www.guiadasemana.com.br/contentFiles/image/opt_w1280h960/2017/07/FEA/55068_transformers-b.jpg";
  
  // listaFilmes[1] =
  //   "https://leiturafilmica.com.br/wp-content/uploads/2017/02/a-chegada-poster.jpg";
  
  // listaFilmes[2] =
  //   "https://www.europanet.com.br/superposter/images/vejapordentro/45724/45724.jpg";
  
  //estrutura de repetição/quando um código for executado ele atribui um 'i'
  // o length significa tamanho, neste caso o tamanho do lemente será a quantidade de itens dentro da nssa lista.
  for (var i = 0; i < listaFilmes.length; i++) {
    // par a imagem add
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  