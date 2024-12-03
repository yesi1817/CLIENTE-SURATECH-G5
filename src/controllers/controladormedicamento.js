import {registrarMedicamento} from "./services/servicioMedicamento.js"

let nombreMedicamento=document.getElementById("nombremedicamento")
let presentacionMedicamento=document.getElementById("presentacionmedicamento")
let dosisMedicamento=document.getElementById("dosismedicamento")
let fechaCaducidadMedicamento=document.getElementById("caducidadmedicamento")
let laboratorioMedicamento=document.getElementById("laboratoriomedicamento")
let contraindicacionesMedicamento=document.getElementById("contraindicacionesmedicamento")
let registroMedicamento=document.getElementById("registromedicamento")
let copagoMedicamento=document.getElementById("copagomedicamento")

let botonRegistroMedicamento=document.getElementById("botonregistromedicamento")

botonRegistroMedicamento.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosFormularioMedicamento={
        nombre: nombreMedicamento.value,
        presentacion: presentacionMedicamento.value,
        dosis: dosisMedicamento.value,
        laboratorio: laboratorioMedicamento.value,
        fechaCaducidad: fechaCaducidadMedicamento.value,
        contraIndicaciones: contraindicacionesMedicamento.value,
        registroInvima: registroMedicamento.value,
        copago: true
    }
    console.log("Datos capturados del formulario:")
    console.log(datosFormularioMedicamento)
    registrarMedicamento(datosFormularioMedicamento)
    .then(function(respuestBack){
        console.log("Respuesta Backend:");
        console.log(respuestBack);

        Swal.fire({
            title: "Registro Exitoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
          });
   
    }).catch((error)=>{ console.log(error)});
        
})