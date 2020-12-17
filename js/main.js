//Usar CONST en general o no LET al pedo
//Cuando la variable es mia va en MAYÚSCULA
//Separar bien todo en funciones
//No tener variables globales (single responsability)


//Lo piola de estas funciones en realidad serían que tire un true/false
function validarNombre($nombreUsuario) {
    if ($nombreUsuario.length === 0) {
        return 'Este campo debe tener al menos algún caracter.';
    }
  
    if ($nombreUsuario.length >= 50) {
        return 'Este campo no debe ser mayor a 50 caracteres';
    }

    //para validar que el campo nombreUsuario sean solo letras
    if(!/^[a-z]+$/i.test($nombreUsuario)) {
        return 'El campo nombre solo acepta letras';
    }

    return '';
  }

function validarCiudad($ciudadUsuario) {
    if ($ciudadUsuario.length === 0) {
        return 'No se seleccionó ninguna provincia.'
    } 
    
    return '';
}

function validarRegalo($regaloUsuario) {
    if($regaloUsuario.length >= 100) {
        return 'La descripción del regalo no puede ser mayor a 100 caracteres';
    } else if ($regaloUsuario.length === 0) {
        return 'No se ingresó ningún regalo.';
    } else if (!/^[a-z0-9]+$/i.test($regaloUsuario)) {
        return 'El campo descripción solo puede tener numeros y letras';
    } else {
        return '';
    }
}

function validarForm() {
    const $nombreUsuario = document.formulario.nombre.value;
    const $ciudadUsuario = document.formulario.ciudad.value;
    const $comportamientoUsuario = document.formulario.comportamiento.value; //a este no le arme las validaciones
    const $regaloUsuario = document.formulario["descripcion-regalo"].value;
    
    const errores = {
        nombre: validarNombre($nombreUsuario),
        ciudad: validarCiudad($ciudadUsuario),
        'descripcion-regalo': validarRegalo($regaloUsuario) 
    }
    return errores;
}

function manejarErrores(errores) { 
    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');

    let cantidadErrores = 0;

    keys.forEach(function(key){
        //aca poner un for para que borre todos los 'li'
        const error = errores[key];
        const $formulario = document.querySelector('#carta-a-santa') //lo tuve que agregar porque me faltaba para seguir el ejemplo de Fabri
        
        if(error){
            cantidadErrores++;
            $formulario[key].className = "error"
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);

        }else {
            //si no aca borrar el campo adecuado (?)
            $formulario[key].className = ""
        }
    });

    return cantidadErrores;
}

function redireccionarAWishlist(){
            setTimeout(function() {
                window.open('./wishlist.html', "_self")
            }, 5000)
}

//Nivel 1.md
const $botonEnviarCarta = document.querySelector("#enviar-carta");

$botonEnviarCarta.onclick = function(event) {
    manejarErrores(validarForm());

    if (manejarErrores(validarForm()) === 0) {
        redireccionarAWishlist();
    }

    event.preventDefault();
}



//TAREA!

// buscar como hacer para que espera 5 segundos y los lleve a wishlist.html (debe ser con setInterval(5000) o algo así 
// y limpiar el error que se repiten los errores.

// // A las tareas clase 6 agregar todo:
//     regex, 
//     objetos, 
//     foreach, 
//     escribir pruebas, 
//     poner estilos, 
//     mostrar los errores en la interfaz de usuario (rojo)

