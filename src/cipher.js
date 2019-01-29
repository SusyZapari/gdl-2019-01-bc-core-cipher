function encriptar() {
  var res = String.fromCharCode(65);
  var input = "GASTRITIS";
  var offset = 3;
  var resultado = "";

  for (var indice = 0; indice < input.length; indice++) {
     var codigoDeLetra = input.charCodeAt(indice); // convertir letra en numero
     var nuevoCodigoDeLetra = codigoDeLetra + offset; // sumarle el offset (moverlo n posiciones)
     var letraApartirDeCodigo = String.fromCharCode(nuevoCodigoDeLetra); // convertir el numero en letra

    resultado += letraApartirDeCodigo;
  }

  document.getElementById("demo").innerHTML = resultado;
}
