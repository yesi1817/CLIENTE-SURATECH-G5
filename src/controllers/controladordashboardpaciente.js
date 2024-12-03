import { buscarPacientes} from "./services/serviciosPaciente.js"

buscarPacientes()
.then(function(respuestBack){
    console.log(respuestBack)
    let fila=document.getElementById("fila")

    respuestBack.forEach(function(paciente){
    console.log(paciente)
  
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombres
    let fechaNacimiento=document.createElement("p")
    fechaNacimiento.textContent=paciente.fechaNacimiento
    let ciudad=document.createElement("p")
    ciudad.textContent=paciente.ciudad
    let correo=document.createElement("p")
    correo.textContent=paciente.correo
    let telefono=document.createElement("p")
    telefono.textContent=paciente.telefono
    let ips=document.createElement("p")
    ips.textContent=paciente.ips
    let grupoIngresos=document.createElement("p")
    grupoIngresos.textContent=paciente.grupoIngresos
    let tienePoliza=document.createElement("p")
    tienePoliza.textContent=paciente.tienePoliza
    let fechaAfiliacion=document.createElement("p")
    fechaAfiliacion.textContent=paciente.fechaAfiliacion
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(fechaNacimiento)
    tarjeta.appendChild(ciudad)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(grupoIngresos)
    tarjeta.appendChild(tienePoliza)
    tarjeta.appendChild(fechaAfiliacion)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
})
