let medico=[
    {
        id:892,
        nombres:"Laura Fernández",
        matriculaProfesional:"123456",
        especialidad:"Cardiologia",
        salario:"6.000.000",
        ips:"Santa Fe",
        correo:"laurafernandez@sura.com.co",
        telefono:"3206548970",
        direccion:"calle 8 # 20-55",
        disponibleFinDeSemana:true
       
    },
    {
        id:893,
        nombres:"Carlos Jiménez",
        matriculaProfesional:"654321",
        especialidad:"Neurología",
        salario:"7.500.000",
        ips:"San Vicente",
        correo:"carlosjimenez@sura.com.co",
        telefono:"3107894561",
        direccion:"Carrera 12 # 45-89",
        disponibleFinDeSemana:false
    },
    {
        id:894,
        nombres:"Ana María Torres",
        matriculaProfesional:"987654",
        especialidad:"Pediatría",
        salario:"5.800.000",
        ips:"Los Ángeles",
        correo:"anatorres@sura.com.co",
        telefono:"3184567890",
        direccion:"Avenida 34 # 67-12",
        disponibleFinDeSemana:true
    },
    {
        id:895,
        nombres:"Juan Pablo Ruiz",
        matriculaProfesional:"456789",
        especialidad:"Dermatología",
        salario:"6.200.000",
        ips:"San José",
        correo:"juanruiz@sura.com.co",
        telefono:"3009876543",
        direccion:"Calle 50 # 30-25",
        disponibleFinDeSemana:false
    }
]

let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
medico.forEach(function(medico){
    console.log(medico)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

     
    let nombres=document.createElement("h2")
    nombres.textContent=medico.nombres

    let matriculaProfesional=document.createElement("h2")
    matriculaProfesional.textContent=medico.matriculaProfesional

    let especialidad=document.createElement("h2")
    especialidad.textContent=medico.especialidad

    let salario=document.createElement("h2")
    salario.textContent=medico.salario

    let ips=document.createElement("h2")
    ips.textContent=medico.ips

    let correo=document.createElement("h2")
    correo.textContent=medico.correo

    let telefono=document.createElement("h2")
    telefono.textContent=medico.telefono

    let direccion=document.createElement("h2")
    direccion.textContent=medico.direccion

    let disponibleFinDeSemana=document.createElement("h2")
    disponibleFinDeSemana.textContent=medico.disponibleFinDeSemana

    //Paso final (Ordenando las cartas)
    tarjeta.appendChild(nombres)
    tarjeta.appendChild(matriculaProfesional)
    tarjeta.appendChild(especialidad)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(ips)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono)
    tarjeta.appendChild(direccion)
    tarjeta.appendChild(disponibleFinDeSemana)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})