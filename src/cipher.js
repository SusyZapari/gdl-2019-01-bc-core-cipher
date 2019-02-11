  function encode (offset, diagnosis){
    let fraseCodificada = "";
    for(let indice = 0;indice < diagnosis.length;indice++){
      let nuevoCodigoDeLetra = (diagnosis.charCodeAt(indice)-65+parseInt(offset))%26+65;
      //let diferencia = 0;
      nuevoCodigoDeLetra = diagnosis.charCodeAt(indice) - 65;
      nuevoCodigoDeLetra = (nuevoCodigoDeLetra + offset)%26;
      nuevoCodigoDeLetra = nuevoCodigoDeLetra + 65;
    let letraApartirDeCodigo = String.fromCharCode(nuevoCodigoDeLetra);
    fraseCodificada = fraseCodificada+letraApartirDeCodigo;
    }
    return fraseCodificada;
  }

  function decode (offset, diagnosis) {
    let fraseCodificada ="";
    for(let indice = 0;indice < diagnosis.length;indice++){
      //  let nuevoCodigoDeLetra =(diagnosis.charCodeAt(indice)+65-offset)%26+65;
      let nuevoCodigoDeLetra = diagnosis.charCodeAt(indice) + 65;
      nuevoCodigoDeLetra = (nuevoCodigoDeLetra - offset)%26;
      nuevoCodigoDeLetra = nuevoCodigoDeLetra + 65;
      let letraApartirDeCodigo = String.fromCharCode(nuevoCodigoDeLetra);
      fraseCodificada = fraseCodificada + letraApartirDeCodigo;
    }
    return fraseCodificada;
  }
