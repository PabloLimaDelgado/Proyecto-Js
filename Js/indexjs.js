let arregloUsuario = [] 
let salir = 0

class Usuario{
    constructor(nombre, contraseña, tarjeta){
        this.nombre = nombre
        this.contraseña = contraseña
        this.tarjetas = [tarjeta]
    }
    
    agregarTarjetas(tarjeta){
        this.tarjetas.push(tarjeta)

        let condicionSalida = false;
        while (!condicionSalida) {
        let entradaUsuario = prompt("Escriba 'Si' para salir o cualquier otra tecla para continuar añadiendo las tarjetas.");
          if (entradaUsuario.toLowerCase() === "si") {
            condicionSalida = true;
          }
        }
    }

    mostrarTarjetas() {
        let condicionSalida = false;
        while (!condicionSalida) {
          let mensaje = "";
          let i = 1
          this.tarjetas.forEach((tarjeta) => {
            mensaje += "El numero de la tarjeta "+ i +" es: "+tarjeta.numTarjeta + 
            "\nEl propietario de la tarjeta "+ i +" es: " + tarjeta.propTarjeta + 
            "\nEl vencimiento de la tarjeta " + i + " es: " + tarjeta.vencimientoTarjeta + 
            "\nEl codigo de seguridad de la tarjeta " + i + " es: " + tarjeta.codigoSeguridadTarjeta + "\n ";
            i = i + 1
          });
          alert(mensaje);
          let entradaUsuario = prompt("Escriba 'Si' para salir o cualquier otra tecla para continuar viendo las tarjetas.");
          if (entradaUsuario.toLowerCase() === "si") {
            condicionSalida = true;
          }
        }
      }


      quitarTarjeta(codigoSeguridad) {
        let mensaje = "";
        let tarjetaEliminada = this.tarjetas.find(tarjeta => tarjeta.codigoSeguridadTarjeta === codigoSeguridad);
        tarjetaEliminada = this.tarjetas.find(tarjeta => tarjeta.codigoSeguridadTarjeta === codigoSeguridad);



        console.log(tarjetaEliminada)
        if (!tarjetaEliminada) {
            mensaje = "No se encontró ninguna tarjeta con ese código de seguridad.";
        } else {
            // Eliminar la tarjeta del arreglo
            this.tarjetas = this.tarjetas.filter(tarjeta => tarjeta !== tarjetaEliminada);
            mensaje = "Se eliminó la tarjeta con número " + tarjetaEliminada.numTarjeta + ".";
        }
      
        alert(mensaje);
    }
}

class Tarjeta{
    constructor(numTarjeta, propTarjeta, vencimientoTarjeta, codigoSeguridadTarjeta){
        this.numTarjeta = numTarjeta
        this.propTarjeta = propTarjeta
        this.vencimientoTarjeta = vencimientoTarjeta
        this.codigoSeguridadTarjeta = codigoSeguridadTarjeta
    }
}

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
  


function crearUsuario(){
    let name = prompt("Ingrese un nombre")
    let password = prompt("Ingrese una contraseña") 
    let card = crearTarjeta()
    let user = new Usuario(name, password, card)


    arregloUsuario.push(user)
    paginaAdentro(name)
}


function crearTarjeta(){
    let numTarjeta = prompt("Ingrese el numero de su tarjeta")
    let propTarjeta = prompt("Ingrese nombre y apellido de su tarjeta")
    let vencimientoTarjeta = parseInt (prompt("Ingrese fecha de vencimiento de su tarjeta"))
    let codigoSeguridadTarjeta =  parseInt (prompt("Ingrese codigo de seguridad de su tarjeta"))

    let card = new Tarjeta(numTarjeta, propTarjeta, vencimientoTarjeta, codigoSeguridadTarjeta)
    return card
}

function ingresar(usuarioA, contraseñaA){
    let registrarse1 = null;
    let j = 0;
    
    do{
        let userFound = false;
        arregloUsuario.forEach( (user, index) =>{
            if(usuarioA === user.nombre && contraseñaA === user.contraseña){
                userFound = true;
            }
        })
    
        if(!userFound){
            alert("El usuario o la contraseña son incorrectos.");
            usuarioA = prompt("Ingrese un nombre de usuario correcto");
            contraseñaA = prompt("Ingrese una contraseña correcta");
        }else{
            break;
        }
    
        if( j >= arregloUsuario.length){
            registrarse1 = prompt("¿Desea registrarse?");

            registrarse1.toLocaleLowerCase()
        
            if (registrarse1 == "si"){
                crearUsuario();
                break;
            }
         }
    
        j++;
    }while(registrarse1 !== 3 || !userFound);

    paginaAdentro(usuarioA)
}

function ajusteDeCuenta(nombreDeUsuario){
    let salir1
    let opciones = parseInt(prompt("Bienvenido " + nombreDeUsuario + "\nQue desa hacer" + "\n1. para Añadir tarjeta" + "\n2. para Quitar tarjeta" + "\n3. para mirar sus tarjetas" + "\n4. para salir"))
    while (salir1 != 4){
        switch (opciones){
            case 1 : 
                let tarjeta1 = crearTarjeta()
                arregloUsuario[0].agregarTarjetas(tarjeta1)
                salir1 = 4
                break;
            case 2 : 
                let codigoTarjetaSeguridad = prompt("Ingrese el codigo de seguridad de la tarjeta que desea rertirar")
                arregloUsuario[0].quitarTarjeta(codigoTarjetaSeguridad)
                salir1 = 4
            case 3 :
                arregloUsuario[0].mostrarTarjetas()
                salir1 = 4
                break;
            case 4 :
                salir1 = 4
                break;
            default : alert("Usted ingreso un numero incorrecto")
            salir1 = 4
            break;  
        }
    }
}


function paginaAdentro(nombreUsuario){
    while(salir != 4) {
        let genero = parseInt( prompt("Bienvenido " + nombreUsuario + "\nQue genero desea mirar" + "\n1. para Acción" + "\n2. para Comedia" + "\n3. para Drama" +"\n4. para ajuste de cuenta" +"\n5. para salir") ) 
        switch (genero){
            case 1 : pelisAcción()
                break;
    
            case 2 : pelisComedia()
                break;
    
            case 3 : pelisDrama()
                break;
            case 4 : ajusteDeCuenta(nombreUsuario)
                break;
            case 5 : alert("Cerrar sesión")
                programaPrincipal()
                break;
            default : alert("Usted ingreso un numero incorrecto")
                break;
        }
    }
}

function programaPrincipal(){
    let cuenta= prompt("Bienvenido a StarWatch"+"\nPresione 1. para iniciar sesión" + "\nPresione 2. para registrarse" + "\nPresione 3. para salir de la pagina")

    do{
        while(cuenta != 1 && cuenta != 2 && cuenta != 3){
            cuenta = prompt("Ingrese un número correcto"+"\n1. para iniciar sesión" + "\n2. para registrarse" + "\n3. para salir de la pagina")
        }

        if(cuenta == 2){
            crearUsuario()
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



programaPrincipal()


















/*------------ESTRENOS------------------------------------------------------------*/


const filaEstrenos = document.querySelector('.contenedor-carrousel-estrenos')
const estrenos =  document.querySelectorAll('.estrenos')

const  flechaIzquierda1 = document.getElementById('flecha-izquierda1')
const  flechaDerecha1 = document.getElementById('flecha-derecha1')



flechaDerecha1.addEventListener('click', () => {
    filaEstrenos.scrollLeft += filaEstrenos.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-estreno .activo');

    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


flechaIzquierda1.addEventListener('click', () => {
    filaEstrenos.scrollLeft -= filaEstrenos.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-estreno .activo');

    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});



const numeroPaginas = Math.ceil(estrenos.length / 5)

for(let i =0; i<numeroPaginas; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo')
    }
    document.querySelector('.indicadores-estreno').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        filaEstrenos.scrollLeft = i * filaEstrenos.offsetWidth;

        document.querySelector('.indicadores-estreno .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
}


estrenos.forEach( (estrenos) => {
    estrenos.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            estrenos.forEach(estrenos => estrenos.classList.remove('.hover'));
            elemento.classList.add('hover');
        }, 300);
    })
})

filaEstrenos.addEventListener('mouseleave', () =>{
    estrenos.forEach(estrenos => estrenos.classList.remove('hover'))
})




/*------------COMEDIA------------------------------------------------------------*/




const filaComedia = document.querySelector('.contenedor-carrousel-comedia')
const comedia =  document.querySelectorAll('.comedia')
const  flechaIzquierda2 = document.getElementById('flecha-izquierda2')
const  flechaDerecha2 = document.getElementById('flecha-derecha2')


flechaDerecha2.addEventListener('click', () => {
    filaComedia.scrollLeft += filaComedia.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-comedia .activo');

    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


flechaIzquierda2.addEventListener('click', () => {
    filaComedia.scrollLeft -= filaComedia.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-comedia .activo');

    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});



 const numeroPaginas1 = Math.ceil(comedia.length / 5)

for(let i =0; i<numeroPaginas1; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo')
    }
    document.querySelector('.indicadores-comedia').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        filaComedia.scrollLeft = i * filaComedia.offsetWidth;

        document.querySelector('.indicadores-comedia .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
} 



/*------------ACCION------------------------------------------------------------*/


const filaAccion = document.querySelector('.contenedor-carrousel-accion')
const accion =  document.querySelectorAll('.accion')
const  flechaIzquierda3 = document.getElementById('flecha-izquierda3')
const  flechaDerecha3 = document.getElementById('flecha-derecha3')


flechaDerecha3.addEventListener('click', () => {
    filaAccion.scrollLeft += filaAccion.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-accion .activo');

    if(indicadorActivo.nextSibling){
        indicadorActivo.nextSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});


flechaIzquierda3.addEventListener('click', () => {
    filaAccion.scrollLeft -= filaAccion.offsetWidth;

    const indicadorActivo = document.querySelector('.indicadores-accion .activo');

    if(indicadorActivo.previousSibling){
        indicadorActivo.previousSibling.classList.add('activo');
        indicadorActivo.classList.remove('activo');
    }
});



 const numeroPaginas2 = Math.ceil(accion.length / 5)

for(let i =0; i<numeroPaginas2; i++){
    const indicador = document.createElement('button');

    if(i === 0){
        indicador.classList.add('activo')
    }
    document.querySelector('.indicadores-accion').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        filaAccion.scrollLeft = i * filaAccion.offsetWidth;

        document.querySelector('.indicadores-accion .activo').classList.remove('activo');
        e.target.classList.add('activo');
    })
} 