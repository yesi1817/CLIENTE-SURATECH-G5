//pasos para consumir api con js
export async function buscarPacientes(){
   
const URL="http://localhost:8080/api/paciente"


let peticion={
    method:"GET"
}

let respuestaServidor=await fetch(URL,peticion)
let pacientes=await respuestaServidor.json()
return pacientes

}

export async function registrarPaciente(datosPaciente) {
    const URL="http://localhost:8080/api/paciente"
    let peticion={
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosPaciente)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let respuestaFinal=await respuestaInicial.json()
    return respuestaFinal
}
