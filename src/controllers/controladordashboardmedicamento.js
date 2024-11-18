let medicamento=[
    {
        id:892,
        nombre:"Acetaminofen",
        presentacion:"Tableta",
        dosis:"1",
        laboratorio:"JPK",
        fechaCaducidad:"2030-10-11",
        contraIndicaciones:"Solo una dosis en el rango de 8 horas",
        registro:"345678",
        tieneCopago:true
        
       
    },
    {
        id:893,
        nombre:"Ibuprofeno",
        presentacion:"Cápsula",
        dosis:"1",
        laboratorio:"Bayer",
        fechaCaducidad:"2028-05-15",
        contraIndicaciones:"Evitar en personas con úlceras gástricas",
        registro:"567890",
        tieneCopago:true
    },
    {
        id:894,
        nombre:"Amoxicilina",
        presentacion:"Suspensión",
        dosis:"10 ml",
        laboratorio:"Pfizer",
        fechaCaducidad:"2027-12-01",
        contraIndicaciones:"No consumir si es alérgico a penicilinas",
        registro:"789012",
        tieneCopago:false
    },
    {
        id:895,
        nombre:"Losartán",
        presentacion:"Tableta",
        dosis:"1",
        laboratorio:"Novartis",
        fechaCaducidad:"2032-03-22",
        contraIndicaciones:"No administrar en embarazo",
        registro:"890123",
        tieneCopago:true
    }

]  

let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
medicamento.forEach(function(medicamento){
    console.log(medicamento)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
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

   

    //Paso final (Ordenando las cartas)
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
})