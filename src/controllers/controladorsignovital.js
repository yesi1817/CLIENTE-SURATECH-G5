import {registrarSignoVital} from "./services/servicioSignoVital.js"

let nombreSignoVital=document.getElementById("nombresignovital")
let valorSignoVital=document.getElementById("valorsignovital")
let fechaMedidaSignoVital=document.getElementById("fechamedidasignovital")

let botonRegistroSignoVital=document.getElementById("botonregistrosignovital")

botonRegistroSignoVital.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosFormularioSignoVital={
        nombre : nombreSignoVital.value,
        valor : valorSignoVital.value,
        fechaMedida : fechaMedidaSignoVital.value
    }

    console.log(datosFormularioSignoVital)
    registrarSignoVital(datosFormularioSignoVital)
.then(function(respuestBack){
    console.log(respuestBack)
    Swal.fire({
        title: "Registro Exitoso!",
        text: "Ya eres parte de nuestra gran familia!",
        icon: "success"
    });
   
})
})
