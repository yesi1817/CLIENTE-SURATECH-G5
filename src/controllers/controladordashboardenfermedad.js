import { buscarEnfermedad} from "./services/servicioEnfermedad.js"

buscarEnfermedad()
.then(function(respuestBack){
    console.log(respuestBack)
    let fila=document.getElementById("fila")
    respuestBack.forEach(function(enfermedades){
    
    let columna=document.createElement("div")
    columna.classList.add("col")
    
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")     
    let nombre=document.createElement("h2")
    nombre.textContent=enfermedades.nombre
    let sintomas=document.createElement("h2")
    sintomas.textContent=enfermedades.sintomas
    let clasificacion=document.createElement("h2")
    clasificacion.textContent=enfermedades.clasificacion
    let grado=document.createElement("h2")
    grado.textContent=enfermedades.grado
    let probabilidadVida=document.createElement("h2")
    probabilidadVida.textContent=enfermedades.probabilidadVida
    
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(sintomas)
    tarjeta.appendChild(clasificacion)
    tarjeta.appendChild(grado)
    tarjeta.appendChild(probabilidadVida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
});
})
