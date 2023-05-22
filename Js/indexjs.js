/* let arregloUsuario = []
let salir = 0
let salir1 = 0

class Usuario{
    constructor(nombre, contraseña, tarjeta){
        this.nombre = nombre
        this.contraseña = contraseña
        this.tarjetas = [tarjeta]
    }
    
    agregarTarjetas(tarjeta){
        this.tarjetas.push(tarjeta)

    }

    mostrarTarjetas() {
          let mensaje = "";
          let i = 1
          this.tarjetas.forEach((tarjeta) => {
            mensaje += "El numero de la tarjeta "+ i +" es: "+tarjeta.numTarjeta + 
            "\nEl propietario de la tarjeta "+ i +" es: " + tarjeta.propTarjeta + 
            "\nEl vencimiento de la tarjeta " + i + " es: " + tarjeta.vencimientoTarjeta + 
            "\nEl codigo de seguridad de la tarjeta " + i + " es: " + tarjeta.codigoSeguridadTarjeta + "\n";
            i = i + 1
          });
          alert(mensaje);
      } 


    quitarTarjeta(codigoSeguridad) {
        const tarjetaEncontrada = this.tarjetas.find( (seguridad) => seguridad.codigoSeguridadTarjeta == codigoSeguridad)
        let tamañoArregloTarjeta = this.tarjetas.length

        if(tamañoArregloTarjeta > 1){
            if (tarjetaEncontrada) {
                const index = this.tarjetas.indexOf(tarjetaEncontrada);
                this.tarjetas.splice(index, 1);
              } else {
                alert("No se encontró ninguna tarjeta con ese código de seguridad");
              }
        }
        else{
            alert("No puede quedarse sin tarjetas")
        }
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
    let userFound = false;
    let queHacer
    
    do{
        arregloUsuario.forEach( (user) =>{
            if(usuarioA === user.nombre && contraseñaA === user.contraseña){
                userFound = true;
            }
        })
    
        if(!userFound){
            alert("El usuario o la contraseña son incorrectos.");
            usuarioA = prompt("Ingrese un nombre de usuario correcto");
            contraseñaA = prompt("Ingrese una contraseña correcta");

            arregloUsuario.forEach( (user) =>{
                if(usuarioA === user.nombre && contraseñaA === user.contraseña){
                    userFound = true;
                }
            })
        }
    

        if(!userFound){

            queHacer = prompt("Que desea hacer: " + "\n1. registarse" +"\n2. ver contraseña")

            if(queHacer == 1){
                crearUsuario();
                break;
            }
            if(queHacer == 2){
                usuarioA = prompt("Ingrese su usuario");
                const usuarioEncontrado = arregloUsuario.find((usuario) => usuario.nombre === usuarioA);

                
                if (usuarioEncontrado) {
                    const contraseñaEncontrada = usuarioEncontrado.contraseña;
                    alert("El nombre de usuario es " + usuarioA + "y su contraseña es" + contraseñaEncontrada);
                } 
                else {
                    alert("El usuario que ingreso no existe");
                }
            }
        }

    }while(queHacer != 1 && !userFound);


    if(queHacer != 1){
        paginaAdentro(usuarioA)
    }
}

function ajusteDeCuenta(nombreDeUsuario){
    let opciones = parseInt(prompt("Bienvenido " + nombreDeUsuario + "\nQue desa hacer" + "\n1. para Añadir tarjeta" + "\n2. para Quitar tarjeta" + "\n3. para mirar sus tarjetas" + "\n4. para salir"))
    const indice = arregloUsuario.findIndex(usuario => usuario.nombre == nombreDeUsuario);

    while(salir1 != 4){

        switch (opciones){
            case 1 : 
                let tarjeta1 = crearTarjeta()
                arregloUsuario[indice].agregarTarjetas(tarjeta1)
                salir = opciones
                break;
            case 2 : 
                let codigoTarjetaSeguridad = prompt("Ingrese el codigo de seguridad de la tarjeta que desea rertirar")
                arregloUsuario[indice].quitarTarjeta(codigoTarjetaSeguridad)
                salir1 = opciones
                break;
            case 3 :
                arregloUsuario[indice].mostrarTarjetas()
                salir1 = opciones
                break;
            case 4 :
                salir1 = opciones
                break;
            default : 
                alert("Usted ingreso un numero incorrecto")
                salir1 = opciones
                break;  
        }

        if(salir1 != 4){
            opciones = parseInt(prompt("Bienvenido " + nombreDeUsuario + "\nQue desa hacer" + "\n1. para Añadir tarjeta" + "\n2. para Quitar tarjeta" + "\n3. para mirar sus tarjetas" + "\n4. para salir"))
        }
    }
    salir1 = 0
}


function paginaAdentro(nombreUsuario){
        let genero = parseInt( prompt("Bienvenido " + nombreUsuario + "\nQue genero desea mirar" + "\n1. para Acción" + "\n2. para Comedia" + "\n3. para Drama" +"\n4. para ajuste de cuenta" +"\n5. para salir") ) 
        while(salir != 5){
            switch (genero){
                case 1 : pelisAcción()
                salir = genero
                    break;
        
                case 2 : pelisComedia()
                salir = genero
                    break;
        
                case 3 : pelisDrama()
                salir = genero
                    break;
                case 4 : ajusteDeCuenta(nombreUsuario)
                salir = genero
                    break;
                case 5 : alert("Cerrar sesión")
                   salir = genero
                    break;
                default : alert("Usted ingreso un numero incorrecto")
                salir = genero
                    break;
            }

            if(salir != 5){
                genero = parseInt( prompt("Bienvenido " + nombreUsuario + "\nQue genero desea mirar" + "\n1. para Acción" + "\n2. para Comedia" + "\n3. para Drama" +"\n4. para ajuste de cuenta" +"\n5. para salir") )
            }
        }
        salir = 0
        programaPrincipal()
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

    }while(cuenta !=1 && cuenta != 2 && cuenta != 3)
}



programaPrincipal()

*/

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




/*-----------------------------------------------------------------------------------------------------*/

let arregloUsuario = JSON.parse(localStorage.getItem('usuarios')) || [];

class Usuario{
    constructor(nombre, contraseña, tarjeta){
        this.nombre = nombre
        this.contraseña = contraseña
        this.tarjetas = [tarjeta]
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

function crearTarjeta(cardNum, cardName, cardVencimiento, cardCode){
    let tarjeta1 = new Tarjeta(cardNum, cardName, cardVencimiento, cardCode)
    return tarjeta1
}

function crearUsuario(user, password, tarjeta) {
    let usuario = new Usuario(user, password, tarjeta);
    arregloUsuario.push(usuario); // Agregar usuario al array
    localStorage.setItem('usuarios', JSON.stringify(arregloUsuario))
    return usuario;
}

const headerPrincipio = document.getElementById('header-principio')
const mainPrincipio = document.getElementById('main-principio')
const footerPrincipio = document.getElementById('footer-principio')

const headerInicio = document.getElementById('header-inicio')
const mainInicio = document.getElementById('main-init')
const footerInicio = document.getElementById('footer-inicio')

const cuerpo = document.getElementById('cuerpo')

const registrase = document.getElementById('btnRegistro')
const entrar = document.getElementById('btnInicioSesion')
const formularioInscripcion = document.querySelector('.inicio')
const formularioRegistro = document.getElementById('form-registro')

registrase.addEventListener('click', (event) => {
    event.preventDefault();
    formularioInscripcion.classList.add('inicio-disable')
    formularioRegistro.classList.remove('inicio-disable')
    formularioRegistro.classList.add('registro')
    btnDos.classList.add('disable')
});

const usuarioRegistroNombre = document.getElementById('inputUsuarioR')
const usuarioRegistroContraseña = document.getElementById('inputContraseñaR')
const usuarioTarjetaNum = document.getElementById('numTarjetaR')
const usuarioTarjetaNombre = document.getElementById('nombreTarjetaR')
const usuarioTarjetaVencimiento = document.getElementById('vencimientoTarjetaR')
const usuarioTrjetaCodigo = document.getElementById('codigoTarjetaR')

const btnRegistro = document.getElementById('enviar-reg')
const btnDos = document.querySelector('.botones');
const seccionInicioPag = document.getElementById('seccion-inicio-pagina')

btnRegistro.addEventListener('click', programaPrincipal)

const rellenarCampos = document.getElementById('texto-fallido')

function programaPrincipal(e){
    e.preventDefault()
    const user = usuarioRegistroNombre.value;
    const password = usuarioRegistroContraseña.value;
    const cardNum = usuarioTarjetaNum.value;
    const cardName = usuarioTarjetaNombre.value;
    const cardVencimiento = usuarioTarjetaVencimiento.value;
    const cardCode = usuarioTrjetaCodigo.value;

    if(usuarioRegistroNombre.value == "" || usuarioRegistroContraseña.value == "" || usuarioTarjetaNum.value == "" || usuarioTarjetaNombre.value == "" || usuarioTarjetaVencimiento.value == "" || usuarioTrjetaCodigo.value == ""){
        rellenarCampos.classList.remove('disable-p')
        rellenarCampos.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Complete todos los campos`
    }
    else{
        let tarjeta = crearTarjeta(cardNum, cardName, cardVencimiento, cardCode);
        let usuario = crearUsuario(user, password, tarjeta);
        seccionInicioPag.classList.add('disable')

        headerPrincipio.classList.remove('desaparecer')
        mainPrincipio.classList.remove('desaparecer')
        footerPrincipio.classList.remove('desaparecer')

        headerPrincipio.classList.add('header-principal')
        mainPrincipio.classList.add('main-principal')
        footerPrincipio.classList.add('footer-principal')

        headerInicio.classList.remove('header-inicio')
        headerInicio.classList.add('desaparecer')
        mainInicio.classList.remove('main-init')
        mainInicio.classList.add('desaparecer')
        footerInicio.classList.remove('footer-inicio')
        footerInicio.classList.add('desaparecer')

        cuerpo.classList.remove('body-inicio')
    }
}

entrar.addEventListener('click', (event) => {
    event.preventDefault()
    let userFound = false
    const userA = document.getElementById('usuarioEntrada')
    const passwordA = document.getElementById('contraseñaEntrada')
    const rellenarCampos = document.getElementById('texto-fallido-ingreso')

    arregloUsuario.forEach( (user) =>{
        if(userA.value == user.nombre && passwordA.value == user.contraseña){
            userFound = true
        }
    })

    if(userFound == false){
        rellenarCampos.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Usuario o contraseña incorrectos`
    }
    else{
        seccionInicioPag.classList.add('disable')
        headerPrincipio.classList.remove('desaparecer')
        mainPrincipio.classList.remove('desaparecer')
        footerPrincipio.classList.remove('desaparecer')

        headerPrincipio.classList.add('header-principal')
        mainPrincipio.classList.add('main-principal')
        footerPrincipio.classList.add('footer-principal')

        headerInicio.classList.remove('header-inicio')
        headerInicio.classList.add('desaparecer')
        mainInicio.classList.remove('main-init')
        mainInicio.classList.add('desaparecer')
        footerInicio.classList.remove('footer-inicio')
        footerInicio.classList.add('desaparecer')

        cuerpo.classList.remove('body-inicio')
    }
})