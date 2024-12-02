import { buscarmedicamento} from "./services/serviciosmedicamento.js"

buscarmedicamento()
.then(function(respuestBack){
    console.log(respuestBack)
    let fila=document.getElementById("fila")
    respuestBack.forEach(function(medicamentos){
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")
    let nombre=document.createElement("h2")
    nombre.textContent=medicamento.nombre
    let presentacion=document.createElement("h2")
    presentacion.textContent=medicamento.presentacion
    let dosis=document.createElement("h2")
    dosis.textContent=medicamento.dosis
    let laboratorio=document.createElement("h2")
    laboratorio.textContent=medicamento.laboratorio
    let fechaCaducidad=document.createElement("h2")
    fechaCaducidad.textContent=medicamento.fechaCaducidad
    let contraIndicaciones=document.createElement("h2")
    contraIndicaciones.textContent=medicamento.contraIndicaciones
    let registro=document.createElement("h2")
    registro.textContent=medicamento.registro
    let tieneCopago=document.createElement("h2")
    tieneCopago.textContent=medicamento.tieneCopago

   
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(presentacion)
    tarjeta.appendChild(dosis)
    tarjeta.appendChild(laboratorio)
    tarjeta.appendChild(fechaCaducidad)
    tarjeta.appendChild(contraIndicaciones)
    tarjeta.appendChild(registro)
    tarjeta.appendChild(tieneCopago)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
})
