import { buscarPaciente} from "./services/serviciosPacientes.js"

buscarPaciente()
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
    let fechaNacimiento=document.createElement("h2")
    fechaNacimiento.textContent=paciente.fechaNacimiento
    let ciudad=document.createElement("h2")
    ciudad.textContent=paciente.ciudad
    let correo=document.createElement("h2")
    correo.textContent=paciente.correo
    let telefono=document.createElement("h2")
    telefono.textContent=paciente.telefono
    let ips=document.createElement("h2")
    ips.textContent=paciente.ips
    let grupoIngresos=document.createElement("h2")
    grupoIngresos.textContent=paciente.grupoIngresos
    let tienePoliza=document.createElement("h2")
    tienePoliza.textContent=paciente.tienePoliza
    let fechaAfiliacion=document.createElement("h2")
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
