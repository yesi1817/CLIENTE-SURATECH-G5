let signosVitales=[
    {
        id:123,
        nombre:"Presión Arterial",
        valor: "130/25",
        fechaMedida: "2024-11-18"
       
    },
    {
        id: 125,
        nombre: "Temperatura Corporal",
        valor: "37.5 °C",
        fechaMedida: "2024-11-18"
    },
    {
        id: 124,
        nombre: "Frecuencia Cardíaca",
        valor: "75 bpm",
        fechaMedida: "2024-11-18"
    },
    {
        id: 126,
        nombre: "Glucosa en Sangre",
        valor: "95 mg/dL",
        fechaMedida: "2024-11-18"
    }
]

let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
signosVitales.forEach(function(signoVital){
    console.log(signoVital)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

     
    let nombre=document.createElement("h2")
    nombre.textContent=signoVital.nombre

    let valor=document.createElement("h2")
    valor.textContent=signoVital.valor

    let fechaMedida=document.createElement("h2")
    fechaMedida.textContent=signoVital.fechaMedida

    //Paso final (Ordenando las cartas)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(valor)
    tarjeta.appendChild(fechaMedida)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})