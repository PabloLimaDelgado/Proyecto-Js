/* let arregloUsuario = []

class Usuario{
    constructor(nombre, contraseña, tarjeta){
        this.nombre = nombre
        this.contraseña = contraseña
        this.tarjetas = [tarjeta]
    }
    
    agregarTarjetas(tarjeta){
        this.tarjetas.push(tarjeta)

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
}*/

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

estrenos.forEach( (estreno) => {
    estreno.addEventListener('mouseenter', (e) => {
        const elemento = e.currentTarget;
        setTimeout(() => {
            estrenos.forEach(estreno => estreno.classList.remove('.hover'));
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



