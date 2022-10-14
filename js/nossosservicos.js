
// TODO : CHECAR TODOS OS BOTÕES 3 VEZES, ARRUMAR O CÓDIGO QUE GUARDA O PREÇO E VER SE EXISTE CÓDIGO REDUNDANTE/OBSOLETO/DESNECESSÁRIO/WHATEVER


function on() {
  // esse javascript vai ser a alavanca que aciona/desliga o overlay (modal)do html quando o botão for clicado
  var modal = document.getElementById("modal");

  var btn = document.getElementById("btn");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  // essas variáveis pegam os elementos do html e transformam em váriaveis no JS
  var span = document.getElementById("span");

  // on click faz quando um desses botões, que estão caracterizados porcamente pelas IDS, ele abre o modal e guarda o preço do serviço base
  btn.onclick = function () {
    modal.style.display = "block";
    var price = 100.00;
    document.getElementById('out').innerHTML = price;
  }


  //eu vou deixar um monte de comentário aqui pra caso ainda dê tempo de implementar
  //mas caso não dê, eu ia dar 3 opções para o usuário escolher um serviço adicional, e mostrar o preço base                      
  //e o preço adicional, mas o comando de select misturado com javascript simplesmente está além de mim nesse momento no tempo
  //então usarei o js só para abrir o modal por enquanto



  btn1.onclick = function () {
    modal.style.display = "block";
    var price = 80.00;
    document.getElementById('out').innerHTML = price;
  }
  btn2.onclick = function () {
    modal.style.display = "block";
    var price = 50.00;
    document.getElementById('out').innerHTML = price;
  }
  span.onclick = function () {
    modal.style.display = "none";
  }

  /*o span é basicamente uma âncora para segurar o "close", que quando clicado fecha o modal*/
  

  //ESSA PARTE DE CÓDIGO MOSTRARÁ UMA DESCRIÇÃO DE QUALQUER PRODUTO ADICIONAL SELECIONADO
  //MAS ELE PRECISA SER EXPLICADO E RETIFICADO, PROBLEMA COM A PONTUAÇÃO DESSA BADERNA TÁ CONFUNDINDO TODO O JS
  // !!!!!!!!!!!!!!!!!!! TO-DO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //  //document.getElementById('outdes').innerHTML = "teste";
  //  $(document).ready(function() {
  //   $("select.selectVal").change(function() {
  //       let selectedItem = $(this).children("option:selected").val();
  //       if (selectedItem==1){
  //       document.getElementById('outdes').innerHTML = "";

  //     };
  //     if(selectedItem == 2){
  //     document.getElementById('outdes').innerHTML = "2EHI2UFNqhurigenoeazdnshlug2";

  //    }if(selectedItem == 0){
  //     document.getElementById('outdes').innerHTML = "2EHI2UFNqhurigenoeazdnshlug2";


  //    }
  //   });

var myBtn = document.getElementById('myButton');
  myBtn.onclick = function () {
  const dateInput = document.getElementById('data');
    if (!dateInput.value) {
      alert('A data não é aceita.');
    } else {
      modal.style.display = "none";
      alert('Agendamento marcado com sucesso!');

      ;
      console.log(dateInput.value);
    }
  };
}

var myBtn = document.getElementById("myButton");