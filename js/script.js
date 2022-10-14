function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    return true;
  } else {
    return false;
  }
}

function Enviar(inputemail) {
  var nome = document.getElementById("nomeid");
  var telefone = document.getElementById("foneid").value.length;

  if (
    nome != "" &&
    telefone >= 10 &&
    telefone <= 11 &&
    validacaoEmail(inputemail)
  ) {
    alert(
      "Obrigado sr(a) " +
        nome.value +
        " os seus dados foram encaminhados com sucesso"
    );
  } else {
    alert("Verifique se todos os campos foram preenchidos corretamente.");
  }
}
