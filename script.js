var cartas = [
  {
    nome: "Dragão Elétrico",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4_yUcd9Idv-4E6HUB6dNK9pqbjnAo8tlUQ&usqp=CAU",
    atributos: { ataque: 9, defesa: 7, magia: 10 }
  },

  {
    nome: "Valkyria",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZPbRgzePVbydOdfhYHpwVX8StvjQYEppZw&usqp=CAU",
    atributos: { ataque: 8, defesa: 6, magia: 9 }
  },

  {
    nome: "Pekka",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoPYsucTUSRpet-k0d2nUzdyXYqXDwt426g&usqp=CAU",
    atributos: { ataque: 8, defesa: 9, magia: 5 }
  },

  {
    nome: "Yeti",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDS_2JV1hQVtV8bpy8wEDUjR8hui78M5RWAQ&usqp=CAU",
    atributos: { ataque: 9, defesa: 8, magia: 7 }
  },

  {
    nome: "Rainha",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR62lmOM97zMQFehwcbMsOgiZgjx-kce0rppA&usqp=CAU",
    atributos: { ataque: 10, defesa: 9, magia: 7 }
  },
  {
    nome: "Rei",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwJkxrOpcFM1_JMsmD98tyGdTpVJGNFU7IOw&usqp=CAU",
    atributos: { ataque: 8, defesa: 10, magia: 6 }
  },

  {
    nome: "Guardião",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLYt0vKkJ2PfMP9YHAAsPHYrxS4JEFKvxow&usqp=CAU",
    atributos: { ataque: 9, defesa: 7, magia: 10 }
  },

  {
    nome: "Campeã Real",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZPDJSYMO7LnVmSKKdWMBov91GQ-MN0WQ9NA&usqp=CAU",
    atributos: { ataque: 9, defesa: 8, magia: 9 }
  },
  {
    nome: "Bruxa",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSsxNDl_r7W69Vihb_SqdlT6QEFpbG1DQ95Q&usqp=CAU",
    atributos: { ataque: 7, defesa: 7, magia: 8 }
  },
  {
    nome: "Golem",
    imagem:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlucrYvNClZwoNOyIAernBe88KmvBR-YzlA&usqp=CAU",
    atributos: { ataque: 8, defesa: 10, magia: 6 }
  }
];

var cartaMaquina = [];
var cartaJogador = [];

var cartaMaquinaSorteada;
var cartaJogadorSorteada;

var cartaPartidaJogador;
var cartaPartidaMaquina;

function sortearCarta() {
  document.getElementById("btnPartida").disabled = false;
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquinaSorteada = cartas[numeroCartaMaquina];
  cartaMaquina.push(cartaMaquinaSorteada);
  cartas.splice(numeroCartaMaquina, 1);

  while (cartaMaquina.length < 5) {
    var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquinaSorteada = cartas[numeroCartaMaquina];
    cartaMaquina.push(cartaMaquinaSorteada);
    cartas.splice(numeroCartaMaquina, 1);
  }

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);

  while (cartaJogador.length < cartaMaquina.length) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogadorSorteada = cartas[numeroCartaJogador];
    cartaJogador.push(cartaJogadorSorteada);
    cartas.splice(numeroCartaJogador, 1);
  }

  document.getElementById("btnSortear").disabled = true;

  mostrarListaCartasJogador();
}

function mostrarListaCartasJogador() {
  var divListaCartasJogador = document.getElementById("cartas-jogador");
  var opcoesCartas = "";

  if (cartaJogador.length == 0) {
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnPartida").disabled = true;
    divResultado.innerHTML =
      "<p class='resultado-final'>O jogo acabou e infelizmente você perdeu.</p>";
  } else if (cartaMaquina.length == 0) {
    divResultado.innerHTML =
      "<p class='resultado-final'>O jogo acabou e você ganhou!!!</p>";
    document.getElementById("btnSortear").disabled = false;
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnPartida").disabled = true;
  } else {
    for (var c = 0; c < cartaJogador.length; c++) {
      opcoesCartas += "<p>" + cartaJogador[c].nome + "<br>";
    }
  }

  divListaCartasJogador.innerHTML =
    "<h2>Suas cartas são:</h2>" + opcoesCartas + "</p>";
}

function sortearUmaCartaSua() {
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnPartida").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  var cartaSorteada = parseInt(Math.random() * cartaJogador.length);
  cartaPartidaJogador = cartaJogador[cartaSorteada];

  var cartaMaquinaSorteada = parseInt(Math.random() * cartaMaquina.length);
  cartaPartidaMaquina = cartaMaquina[cartaMaquinaSorteada];

  exibirCarta();

  let divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = "none";

  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";

  divCartaMaquina.innerHTML = moldura;
  divResultado.innerHTML = "";
}

function exibirCarta() {
  var divCartaJogador = document.getElementById("carta-jogador");
  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var nome = `<p class="carta-subtitle">${cartaPartidaJogador.nome}</p>`;
  var opcoes = "";

  divCartaJogador.style.backgroundImage = `url(${cartaPartidaJogador.imagem})`;
  for (var atributos in cartaPartidaJogador.atributos) {
    opcoes +=
      "<input type='radio' name='atributo' class='botoes' value='" +
      atributos +
      "' id='" +
      atributos +
      "'><label for='" +
      atributos +
      "' class='input-label'>" +
      atributos +
      ": " +
      cartaPartidaJogador.atributos[atributos] +
      "</label><br>";
  }

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoes + "</div>";
}

var radioAtributos = document.getElementsByName("atributo");

function obtemAtributoSelecionado() {
  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    }
  }
}

var divResultado = document.getElementById("resultado");

function jogar() {
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnPartida").disabled = false;
  document.getElementById("btnJogar").disabled = true;

  exibirCartaMaquina();

  var atributoSelecionado = obtemAtributoSelecionado();
  var valorJogador = cartaPartidaJogador.atributos[atributoSelecionado];
  var valorMaquina = cartaPartidaMaquina.atributos[atributoSelecionado];

  console.log(valorJogador);
  console.log(valorMaquina);

  if (atributoSelecionado == undefined) {
    divResultado.innerHTML =
      "<p class='resultado-final'>Você precisa selecionar um atributo </p>";
    document.getElementById("btnJogar").disabled = false;
    document.getElementById("btnPartida").disabled = true;
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = "none";
    var moldura =
      "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";
    divCartaMaquina.innerHTML = moldura;
  } else if (valorJogador > valorMaquina) {
    divResultado.innerHTML = "<p class='resultado-final'>Você venceu!!!</p>";

    for (var nomes in cartaMaquina) {
      if (cartaMaquina[nomes].nome == cartaPartidaMaquina.nome) {
        cartaMaquina.splice(nomes, 1);
        cartaJogador.push(cartaPartidaMaquina);
        cartaPartidaMaquina = "";
        cartaPartidaJogador = "";
      }
    }
  } else if (valorJogador < valorMaquina) {
    divResultado.innerHTML =
      "<p class='resultado-final'>Você perdeu!!! Boa sorte na próxima rodada!</p>";

    for (var nomes in cartaJogador) {
      if (cartaJogador[nomes].nome == cartaPartidaJogador.nome) {
        cartaJogador.splice(nomes, 1);
        cartaMaquina.push(cartaPartidaJogador);
        cartaPartidaMaquina = "";
        cartaPartidaJogador = "";
      }
    }
  } else if (valorJogador == valorMaquina) {
    divResultado.innerHTML = "<p class='resultado-final'>Houve um empate!!</p>";
  }

  mostrarListaCartasJogador();
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");

  divCartaMaquina.style.backgroundImage = `url(${cartaPartidaMaquina.imagem})`;

  var moldura =
    "<img src='https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png' style='width: inherit; height: inherit; position: absolute;'>";

  var tagHTML = "<div id='opcoes' class='carta-status'>";
  var opcoes = "";

  for (var atributos in cartaPartidaMaquina.atributos) {
    console.log(atributos);

    opcoes +=
      "<p>" +
      atributos +
      ": " +
      cartaPartidaMaquina.atributos[atributos] +
      "<br>";
  }

  var nome = `<p class="carta-subtitle">${cartaPartidaMaquina.nome}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoes + "</p></div>";
}