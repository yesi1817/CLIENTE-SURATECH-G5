import {buscarMedicamento} from "./services/servicioMedicamento.js"

buscarMedicamento()
.then(function(respuestBack){
    console.log(respuestBack)
    let fila=document.getElementById("fila")
    respuestBack.forEach(function(medicamento){
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")
    let nombre=document.createElement("h2")
    nombre.textContent=medicamento.nombre
    let presentacion=document.createElement("p")
    presentacion.textContent=medicamento.presentacion
    let dosis=document.createElement("p")
    dosis.textContent=medicamento.dosis
    let laboratorio=document.createElement("p")
    laboratorio.textContent=medicamento.laboratorio
    let fechaCaducidad=document.createElement("p")
    fechaCaducidad.textContent=medicamento.fechaCaducidad
    let contraIndicaciones=document.createElement("p")
    contraIndicaciones.textContent=medicamento.contraIndicaciones
    let registroInvima=document.createElement("p")
    registroInvima.textContent=medicamento.registroInvima
    let copago=document.createElement("p")
    copago.textContent=medicamento.copago

   
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(presentacion)
    tarjeta.appendChild(dosis)
    tarjeta.appendChild(laboratorio)
    tarjeta.appendChild(fechaCaducidad)
    tarjeta.appendChild(contraIndicaciones)
    tarjeta.appendChild(registroInvima)
    tarjeta.appendChild(copago)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
})
