// Objetivo: Capturar los datos de un formulario 

//1. Por cada input, select, textarea del formulario se crea una variable 

//2. Por cada variable debo utilizar el DOM para asociar el html con js
/*
let nombrePaciente =document.getElementById("nombrepaciente")
let correoPaciente =document.getElementById("correopaciente")
let telefonoPaciente =document.getElementById("telefonopaciente")
let fechaNacimientoPaciente =document.getElementById("nacimientopaciente")
let ciudadPaciente =document.getElementById("ciudadpaciente")
let polizaPaciente=document.getElementById("polizapaciente")
let ipsPaciente =document.getElementById("ipspaciente")
let grupoIngresoPaciente =document.getElementById("ingresospaciente")
let fechaAfiliacionPaciente=document.getElementById("afiliacionpaciente")

//3. Crear una variable para asociarla al id del boton que tengo en html

let botonRegistroPaciente=document.getElementById("botonregistropaciente")

//4. Detectamos acciones o eventos en el boton 

botonRegistroPaciente.addEventListener("click", function(evento){
    evento.preventDefault()
   

//5. Se crea un JSON que capture todos los datos del formulario 

let datosFormularioPaciente={
    nombres: nombrePaciente.value,
    fechaNacimiento: fechaNacimientoPaciente.value,
    ciudad: ciudadPaciente.value,
    correo: correoPaciente.value,
    telefono: telefonoPaciente.value,
    ips: ipsPaciente.value,
    grupoIngresos: grupoIngresoPaciente.value,
    tienePoliza: polizaPaciente.value,
    fechaAfiliacion: fechaAfiliacionPaciente.value
}

//6. Se envian los datos al back 
console.log(datosFormularioPaciente)





Swal.fire({
    title: "Registro Exitoso!",
    text: "Ya eres parte de nuestra gran familia!",
    icon: "success"
  });
})

*/

//Objetivo: Recibir datos del BACK  y hacerles render (render=PINTARLOS)
//1. Quemar o simular los datos 
let pacientes=[
    {
        id:890,
        nombres:"Emma Grisales",
        fechaNacimiento:"2006-10-04",
        ciudad:"Yarumal",
        correo:"julieta@gmail.com",
        telefono:"3202145050",
        ips:"Angostura",
        grupoIngresos:"A",
        tienePoliza:true,
        fechaAfiliacion:"2010-10-20"


    },
    {
        id:891,
        nombres:"Carlos Muñoz",
        fechaNacimiento:"2000-07-12",
        ciudad:"Medellín",
        correo:"carlosmunoz@gmail.com",
        telefono:"3123456789",
        ips:"Santa Mónica",
        grupoIngresos:"B",
        tienePoliza:true,
        fechaAfiliacion:"2015-03-15"
    },
    
    {
        id:892,
        nombres:"Laura Fernández",
        fechaNacimiento:"1995-03-25",
        ciudad:"Bogotá",
        correo:"laurafernandez@gmail.com",
        telefono:"3004567890",
        ips:"Salud Total",
        grupoIngresos:"C",
        tienePoliza:false,
        fechaAfiliacion:"2018-06-20"
    },
    
    {
        id:893,
        nombres:"Andrés López",
        fechaNacimiento:"1989-11-30",
        ciudad:"Cali",
        correo:"andreslopez@gmail.com",
        telefono:"3109876543",
        ips:"Viva Salud",
        grupoIngresos:"A",
        tienePoliza:true,
        fechaAfiliacion:"2012-09-12"
    }
    
]

//2. Crear una referencia a una etiqueta html donde vamos a renderizar
let fila=document.getElementById("fila")

//3. Se recorren los datos para obtenerlos de forma separada 
pacientes.forEach(function(paciente){
    console.log(paciente)
    //4. Se crean columnas 
    let columna=document.createElement("div")
    columna.classList.add("col")

    //5. Se crean tarjetas 
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card", "p-5", "h-100", "shadow")

    //6. Se crea una etiqueta para poner el nombre del paciente 
    let nombre=document.createElement("h2")
    nombre.textContent=paciente.nombres

    //Paso final (Ordenando las cartas)
    tarjeta.appendChild(nombre)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
})