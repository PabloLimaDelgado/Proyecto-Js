/*

//VARIBABLES GLOBALES

let usuario = " "
let contraseña = " "
let salir


//BASE DE DATOS DE PELICULAS

function pelisAcción(){
    alert("\nPeliculas de Acción"+"\n1. Avatar: The Way of Water" + "\n2. El gato con botas: el último deseo" + "\n3. Everything Everywhere All at Once" + "\n3. Alita: ángel de batalla" 
    + "\n4. Dead pool" + "\n5. Píxeles")
}


function pelisComedia(){
    alert("\nPeliculas de Comedia"+"\n1. Free Guy" + "\n2. Murder Mystery 2" + "\n3. Intensamente" + "\n3. Zootopia" + "\n4. El dictador" + "\n5. Sing 2")
}

function pelisDrama(){
    alert("\nPeliculas de Drama"+"\n1. El conde de montecristo" + "\n2. Argentina, 1985" + "\n3. Dune" + "\n3. En el Corazón del Mar" + "\n4. The Goodfather" + "\n5. Arrival")
}

//FUNCIONES DE REGISTRO E INICIO DE SECIÓN

function paginaPrincipal(){
    let cuenta= prompt("Bienvenido a StarWatch"+"\nPresione 1. para iniciar sesión" + "\nPresione 2. para registrarse" + "\nPresione 3. para salir de la pagina")


    do{
        while(cuenta != 1 && cuenta != 2 && cuenta != 3){
            cuenta = prompt("Ingrese un número correcto"+"\n1. para iniciar sesión" + "\n2. para registrarse" + "\n3. para salir de la pagina")
        }

        if(cuenta == 2){
            registrarse()
        }

        if (cuenta == 1) {
            let usuario1 = prompt("Ingrese su nombre de usuario")
            let contraseña1 = prompt("Ingrese su contraseña de usuario")

            ingresar(usuario1,contraseña1)
        }

        if (cuenta == 3){
            salir = 4
        }
    }while(cuenta !=1 && cuenta != 2 && cuenta != 3)
}

function ingresar(usuarioA, contraseñaA){

    let registrarse1

    do{
        if(usuarioA != usuario){
            alert("El usuario  es incorrecto")
            usuarioA = prompt("Ingrese un nombre de usuario correcto")
        }

        if(contraseñaA != contraseña){
            alert("La contraseña  es incorrecta")
            contraseñaA = prompt("Ingrese una contraseña correcta")
        }

        if(contraseñaA != contraseña || usuarioA != usuario){
            registrarse1 = Number(prompt("Ingrese 3 si dese registrarse"))

            if (registrarse1 == 3){
                registrarse()
            }
        }

    }while((usuarioA != usuario || contraseñaA != contraseña) && registrarse1 != 3)
}

function registrarse(){
    usuario = prompt("Ingrese su nombre de usuario")
    contraseña = prompt("Ingrese su contraseña de usuario")
    let mail = prompt("Ingrese su mail")
    let numeroTarjeta = ("Ingrese el numero de su tarjeta")
    let nombreApellidoTarjeta = ("Ingrese nombre y apellido de su tarjeta")
    let fechaVencimientoTarjeta = parseInt (prompt("Ingrese fecha de vencimiento de su tarjeta"))
    let codigoSeguridadTarjeta =  parseInt (prompt("Ingrese codigo de seguridad de su tarjeta"))  
}


//PROGRAMA PRINCIPAL

paginaPrincipal()


do{
    let genero = parseInt( prompt("Bienvenido " + usuario + "\nQue genero desea mirar" + "\n1. para Acción" + "\n2. para Comedia" + "\n3. para Drama" + "\n4. para salir") ) 
    switch (genero){
        case 1 : pelisAcción()
            break;

        case 2 : pelisComedia()
            break;

        case 3 : pelisDrama()
            break;
        
        case 4 : alert("Cerrar sesión")
            paginaPrincipal()
            break;
        default : alert("Usted ingreso un numero incorrecto")
            break;
    }
}while(salir != 4) */

