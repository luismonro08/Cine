function recomendar(genero){
    let edad = document.getElementById("edadPersona").value;
    let elementoRespuesta = document.getElementById("recomendaciones");
   
    switch (genero) {
        case 'accion':
            if(edad < 13){
                elementoRespuesta.textContent = "Paw Patrol";
            }else {
                if(edad < 16){
                    elementoRespuesta.textContent = "Avatar";
                }else {
                    elementoRespuesta.textContent = "Oppenheimer";
                }
            }
            break;
        case 'aventura':
            if(edad < 13){
                elementoRespuesta.textContent = "Dora la Exploradora";
            }else {
                if(edad < 16){
                    elementoRespuesta.textContent = "Star Wars";
                }else {
                    elementoRespuesta.textContent = "Indiana Jones";
                }
            }
            break;
        case 'comedia':
            if(edad < 13){
                elementoRespuesta.textContent = "Minios";
            }else {
                if(edad < 16){
                    elementoRespuesta.textContent = "Quieren volverme loco";
                }else {
                    elementoRespuesta.textContent = "Que paso Ayer";
                }
            }
            break;
        case 'heroes':
            if(edad < 13){
                elementoRespuesta.textContent = "Spiderman";
            }else {
                if(edad < 16){
                    elementoRespuesta.textContent = "Guerdianes de la Galaxia";
                }else {
                    elementoRespuesta.textContent = "Deadpool";
                }
            }
            break;
    }

}