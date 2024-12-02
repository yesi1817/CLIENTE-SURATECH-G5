import { registrarPaciente } from "./services/serviciosPacientes.js"

let nombrePaciente =document.getElementById("nombrepaciente")
let correoPaciente =document.getElementById("correopaciente")
let telefonoPaciente =document.getElementById("telefonopaciente")
let fechaNacimientoPaciente =document.getElementById("nacimientopaciente")
let ciudadPaciente =document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente =document.getElementById("ipspaciente")
let grupoIngresoPaciente =document.getElementById("ingresospaciente")
let fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")
let botonRegistroPaciente=document.getElementById("botonregistropaciente")

botonRegistroPaciente.addEventListener("click", function(evento){
    evento.preventDefault()

let datosFormularioPaciente={
    nombre: nombrePaciente.value,
    anioNacimiento: fechaNacimientoPaciente.value,
    ciudad: ciudadPaciente.value,
    correo: correoPaciente.value,
    telefono: telefonoPaciente.value,
    ips: ipsPaciente.value,
    poliza: true,
    grupoIngreso: grupoIngresoPaciente.value,
    fechaAfiliacion: fechaAfiliacionPaciente.value
}

console.log(datosFormularioPaciente)
registrarPaciente(datosFormularioPaciente)
.then(function(respuestBack){
    console.log(respuestBack)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
      });

})


})




