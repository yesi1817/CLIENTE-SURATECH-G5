import {registrarEnfermedad} from "./services/servicioEnfermedad.js"

let nombreEnfermedad=document.getElementById("nombreenfermedad")
let sintomasEnfermedad=document.getElementById("sintomasenfermedad")
let clasificacionEnfermedad=document.getElementById("clasificacionenfermedad")
let gradoEnfermedad=document.getElementById("gradoenfermedad") 
let probabilidadDeVidaEnfermedad=document.getElementById("probabilidadvidaenfermedad")

let botonRegistroEnfermedad=document.getElementById("botonregistroenfermedad")

botonRegistroEnfermedad.addEventListener("click", function(evento){
    evento.preventDefault()

    let datosFormularioEnfermedad={
        nombre : nombreEnfermedad.value,
        sintomas : sintomasEnfermedad.value,
        clasificacion : clasificacionEnfermedad.value,
        grado : gradoEnfermedad.value,
        probabilidadDeVida : probabilidadDeVidaEnfermedad.value 
    }

    console.log(datosFormularioEnfermedad)
    registrarEnfermedad(datosFormularioEnfermedad)
    .then(function(respuestBack){
        console.log(respuestBack)
        Swal.fire({
            title: "Registro Exitoso!",
            text: "Ya eres parte de nuestra gran familia!",
            icon: "success"
          });
   
    })
})

