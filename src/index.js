function doctorEncode (){
  console.log("boton enter");
  let diagnosis = document.getElementById ("diagnosis").value;
  let offset = document.getElementById("offset").value;
  let encodedDiagnosis = encode(parseInt(offset), diagnosis);
  document.getElementById("fraseCodificada").value = encodedDiagnosis;
}

document.getElementById("botonDoctorEncode").addEventListener("click", doctorEncode);

function pacienteDecode (){
  let diagnosis = document.getElementById ("diagnosticoPaciente").value;
  let offset = document.getElementById("offsetPaciente").value;
  let decodedDiagnosis = decode(parseInt(offset), diagnosis);
  document.getElementById("fraseDecodificada").value = decodedDiagnosis;
}

document.getElementById("botonPacienteDecoded").addEventListener("click",pacienteDecode);

function mostrarSeccionDoctor (){
  const doctorDiv = document.getElementById ("seccionDoctor");
  doctorDiv.style.display = "block";
  const seccionInicioDiv = document.getElementById ("seccionInicio");
  seccionInicioDiv.style.display = "none";
  const seccionPacienteDiv = document.getElementById ("seccionPaciente");
  seccionPacienteDiv.style.display = "none";
}

function mostrarSeccionPaciente (){
  const pacienteDiv = document.getElementById ("seccionPaciente");
  pacienteDiv.style.display = "block";
  const seccionInicioDiv = document.getElementById ("seccionInicio");
  seccionInicioDiv.style.display = "none";
  const seccionDoctorDiv = document.getElementById ("seccionDoctor");
  seccionDoctorDiv.style.display = "none";
}

document.getElementById("botonPacienteDecoded").addEventListener("click",mostrarSeccionPaciente);
