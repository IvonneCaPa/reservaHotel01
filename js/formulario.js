function reservar(){
    //capturamos los datos del formulario
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let adultos= document.getElementById("adultos").value;
    let ninos = document.getElementById("ninos").value;
    let regimen = document.getElementsByName("regimen");
    console.log(regimen);

    //recorremos regimen para saber cual tiene el check
    for(let i = 0; i < regimen.length; i++){
        if(regimen[i].checked == true){
            regimen = regimen[i].value
            break
        }
    }
 


    alert(`
    Datos de la reserva:
    nombre: ${nombre}
    apellidos: ${apellidos}
    adultos: ${adultos}
    niños: ${ninos}
    comidas: ${regimen}`)
}

