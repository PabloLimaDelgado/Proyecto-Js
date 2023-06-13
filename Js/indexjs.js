let arregloUsuario = JSON.parse(localStorage.getItem('usuarios')) || [];
const urlUsuario = "https://64877b09beba62972790b5fd.mockapi.io/jssw/1/usuario"

function traerUsuarios(){
    fetch(urlUsuario)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((usuario) => {
            arregloUsuario.push(usuario);
        })
    });

}

async function crearUsuario1(producto){
    const resp = await fetch(urlUsuario, {
        method: "POST",
        body: JSON.stringify(producto),
        headers: {
            "Content-Type": "application/JSON",
        }
    })
    const data = await resp.json()
    traerUsuarios()
}

async function crearTarjeta1(tarjeta){
    const resp = await fetch(urlUsuario, {
        method: "POST",
        body: JSON.stringify(tarjeta),
        headers: {
            "Content-Type": "application/JSON",
        }
    })
    const data = await resp.json()
}

class Usuario{
    constructor(nombre, contrasenia, tarjeta){
        this.nombre = nombre
        this.contrasenia = contrasenia
        this.tarjetas = tarjeta
    }

    agregarTarjetas(tarjeta){
        this.tarjetas.push(tarjeta)
        this.actualizarLocalStorage();
        crearTarjeta1(tarjeta)

        Swal.fire({
            icon: 'success',
            title: 'Su tarjeta se agrego con exito',
            text: 'Presione ok para avanzar',
            color: '#e4ffc6',
            background: 'rgba(87, 108, 137)',
            iconColor: '#b3ff96',
            confirmButtonColor: 'rgb(74, 74, 74)',
        })
    }

    quitarTarjeta(codigoSeguridad) {
        const indiceTarjeta = this.tarjetas.findIndex((tarjeta) => tarjeta.codigoSeguridadTarjeta == codigoSeguridad);
        if (indiceTarjeta != -1) {
          this.tarjetas.splice(indiceTarjeta, 1);
          this.actualizarLocalStorage();
          Swal.fire({
            icon: 'success',
            title: 'Su tarjeta ha sido eliminada con exito',
            text: 'Presione ok para avanzar',
            color: '#e4ffc6',
            background: 'rgba(87, 108, 137)',
            iconColor: '#b3ff96',
            confirmButtonColor: 'rgb(74, 74, 74)',
        })
        }
        else{
            Swal.fire({
                icon: 'error',
                title: 'No se encontro esa tarjeta',
                text: 'Presione ok para avanzar',
                color: '#e4ffc6',
                background: 'rgba(87, 108, 137)',
                iconColor: '#ff4242',
                confirmButtonColor: 'rgb(74, 74, 74)',
            })
        }
    }

    actualizarLocalStorage() {
        const indice = arregloUsuario.findIndex((usuario) => usuario.nombre === this.nombre);
        if (indice != -1) {
          arregloUsuario[indice].tarjetas = this.tarjetas;
          localStorage.setItem('usuarios', JSON.stringify(arregloUsuario));
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

function crearTarjeta(cardNum, cardName, cardVencimiento, cardCode){
    let tarjeta1 = new Tarjeta(cardNum, cardName, cardVencimiento, cardCode)
    return tarjeta1
}

function crearUsuario(user, password, tarjeta) {
    let usuario = new Usuario(user, password, [tarjeta]);
    crearUsuario1(usuario)
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
const btnVolverInicioSesion = document.getElementById('btnVolverInicioSesion')

registrase.addEventListener('click', (event) => {
    event.preventDefault();
    formularioInscripcion.classList.add('inicio-disable')
    formularioRegistro.classList.remove('inicio-disable')
    formularioRegistro.classList.add('registro')
    btnDos.classList.add('disable')

    let userA = document.getElementById('usuarioEntrada')

    userA.value = ""
});

btnVolverInicioSesion.addEventListener('click', (event) => {
    event.preventDefault();
    formularioInscripcion.classList.remove('inicio-disable')
    formularioRegistro.classList.remove('registro')
    formularioRegistro.classList.add('inicio-disable')

    btnDos.classList.remove('disable')

})

let usuarioRegistroNombre = document.getElementById('inputUsuarioR')
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
        setTimeout( () => {
            rellenarCampos.classList.remove('disable-p')
        }, 900)
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

    usuarioRegistroNombre.value = ""

    const verificarEntrada = () =>{
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                arregloUsuario.forEach( (user) =>{
                    if(userA.value == user.nombre && passwordA.value == user.contrasenia){
                        userFound = true
                    }
                })

                if(userFound == false){
                    resolve()
                }else{
                    reject()
                }
            }, 1000)
        })
    }

    verificarEntrada()
    .then(() => {

        setTimeout( () => {
            rellenarCampos.classList.remove('desaparecer-p')
        }, 900)
    })
    .catch(() => {
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
    });
})

const btnAjuste = document.getElementById('btnAjuste')
const mainConfig = document.getElementById('main-config')

btnAjuste.addEventListener('click', () => {

    headerPrincipio.classList.remove('header-principal')
    headerPrincipio.classList.add('desaparecer')
    headerInicio.classList.remove('desaparecer')
    headerInicio.classList.add('header-inicio')

    mainPrincipio.classList.remove('main-principal')
    mainPrincipio.classList.add('desaparecer')
    mainConfig.classList.remove('desaparecer')
    mainConfig.classList.add('main-config')

    footerPrincipio.classList.remove('footer-principal')
    footerPrincipio.classList.add('desaparecer')
    footerInicio.classList.remove('desaparecer')
    footerInicio.classList.add('footer-inicio')
    cuerpo.classList.add('body-inicio')

    seccionAjusteUsuario.classList.add('primer-ajuste-usuario')
    seccionAjusteUsuario.classList.remove('desaparecer-primer-ajuste-usuario')
})

const btnVolverCongif = document.getElementById('btnVolverConfig')

btnVolverCongif.addEventListener('click', () => {
    headerInicio.classList.remove('header-inicio')
    headerInicio.classList.add('desaparecer')
    headerPrincipio.classList.remove('desaparecer')
    headerPrincipio.classList.add('header-principal')

    mainConfig.classList.remove('main-config')
    mainConfig.classList.add('desaparecer')
    mainPrincipio.classList.remove('desaparecer')
    mainPrincipio.classList.add('main-principal')

    footerInicio.classList.remove('footer-inicio')
    footerInicio.classList.add('desaparecer')
    footerPrincipio.classList.remove('desaparecer')
    footerPrincipio.classList.add('footer-principal')

    cuerpo.classList.remove('body-inicio')

    seccionMirarTarjetas.classList.add('desaparecerTarjeta')
    seccionMirarTarjetas.classList.remove('datosTarjeta')


    while (seccionMirarTarjetas.firstChild) {
        seccionMirarTarjetas.removeChild(seccionMirarTarjetas.firstChild);
    }

    seccionAgregarTarjetas.classList.add('desaparecerTarjeta')
    seccionAgregarTarjetas.classList.remove('formTarjetaNueva')
    
    textoFallidoNuevo.classList.add('disable-p')

    seccionQuitarTarjetas.classList.add('desaparecerTarjeta')
    seccionQuitarTarjetas.classList.remove('quitarTarjeta')

    textoFallidoQuitar.classList.add('disable-p')
})


const btnCerrarSesion = document.getElementById('btnCerrarSesion')

btnCerrarSesion.addEventListener('click', () => {
    const rellenarCampos1 = document.getElementById('texto-fallido-ingreso')

    Swal.fire({
        title: '¿Esta seguro que desea cerrar sesión?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(74, 74, 74)',
        cancelButtonColor: 'white',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, quiero salir',
        reverseButtons: true,
        position: 'center',
        iconColor: '#ffc61a',
        color: '#e4ffc6',
        background: 'rgba(87, 108, 137)',
        customClass: {
            confirmButton: 'my-confirm-button-class',
            cancelButton: 'my-cancel-button-class'
        }
      }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Su sesión fue cerrada con exito',
                icon: 'success',
                color: '#e4ffc6',
                background: 'rgba(87, 108, 137)',
                iconColor: '#b3ff96',
                confirmButtonColor: 'rgb(74, 74, 74)',

            })

            mainConfig.classList.remove('main-config')
            mainConfig.classList.add('desaparecer')
        
            mainInicio.classList.remove('desaparecer')
            mainInicio.classList.add('main-init')
        
            seccionInicioPag.classList.remove('disable')
        
            rellenarCampos1.classList.add('desaparecer-p')
            rellenarCampos.classList.add('disable-p')
        
            formularioInscripcion.classList.remove('inicio-disable')
            formularioInscripcion.classList.add('inicio')
        
            formularioRegistro.classList.remove('registro')
            formularioRegistro.classList.add('inicio-disable')
        
            btnDos.classList.add('botones')
            btnDos.classList.remove('disable')
        }
      })


})

const btnMirarTarjetas = document.getElementById('btnMirarTarjetas')
const seccionAjusteUsuario = document.querySelector('.primer-ajuste-usuario')
const seccionMirarTarjetas = document.getElementById('seccionMirarTarjetas')

btnMirarTarjetas.addEventListener('click', () => {
    seccionAjusteUsuario.classList.remove('primer-ajuste-usuario')
    seccionAjusteUsuario.classList.add('desaparecer-primer-ajuste-usuario')
    seccionMirarTarjetas.classList.remove('desaparecerTarjeta')
    seccionMirarTarjetas.classList.add('datosTarjeta')

    const usuarioEntradaNombre = document.getElementById('usuarioEntrada')
    const indice = arregloUsuario.findIndex(usuario => usuario.nombre == usuarioRegistroNombre.value || usuario.nombre == usuarioEntradaNombre.value)



    arregloUsuario[indice].tarjetas.forEach((tarjeta) => {
        seccionMirarTarjetas.innerHTML += `
        <div class="tarjetaDiv">
            <h3>Número tarjeta: </h3>
            <p>${tarjeta.numTarjeta}</p>
        </div>

        <div class="tarjetaDiv">
            <h3>Nombre tarjeta: </h3>
            <p>${tarjeta.propTarjeta}</p>
        </div>

        <div class="tarjetaDiv">
            <h3>Vencimiento tarjeta: </h3>
            <p>${tarjeta.vencimientoTarjeta}</p>
        </div>

        <div class="tarjetaDiv">
            <h3>Codigo de seguridad tarjeta: </h3>
            <p>${tarjeta.codigoSeguridadTarjeta}</p>
        </div>
        `
      });

})

const btnAgrgarTarjetas = document.getElementById('btnAgregarTarjetas')
const seccionAgregarTarjetas = document.getElementById('seccionAgregarTarjetas')

btnAgrgarTarjetas.addEventListener('click', () =>{
    seccionAjusteUsuario.classList.remove('primer-ajuste-usuario')
    seccionAjusteUsuario.classList.add('desaparecer-primer-ajuste-usuario')
    seccionAgregarTarjetas.classList.remove('desaparecerTarjeta')
    seccionAgregarTarjetas.classList.add('formTarjetaNueva')
})


const formCardNueva = document.getElementById('formCardNueva')
const textoFallidoNuevo = document.getElementById('texto-fallido-nuevo')
formCardNueva.addEventListener("submit", validarForm)

function validarForm(event){
    event.preventDefault()

    const numTarjetaNueva = document.getElementById('numTarjetaNueva')
    const nombreTarjetaNueva = document.getElementById('nombreTarjetaNueva')
    const vencimientoTarjetaNueva = document.getElementById('vencimientoTarjetaNueva')
    const codigoTarjetaNueva = document.getElementById('codigoTarjetaNueva')

    if(numTarjetaNueva.value == "" || nombreTarjetaNueva.value == "" || vencimientoTarjetaNueva.value == "" || codigoTarjetaNueva.value == ""){
        setTimeout( () => {
            textoFallidoNuevo.classList.remove('disable-p')
        }, 900)
    }
    else{
        const usuarioEntradaNombre = document.getElementById('usuarioEntrada')
        const indice = arregloUsuario.findIndex(usuario => usuario.nombre == usuarioRegistroNombre.value || usuario.nombre == usuarioEntradaNombre.value)



        let tarjeta1 = crearTarjeta(numTarjetaNueva.value, nombreTarjetaNueva.value, vencimientoTarjetaNueva.value, codigoTarjetaNueva.value);
        let usuarioIntancia = new Usuario( arregloUsuario[indice].nombre, arregloUsuario[indice].contrasenia, arregloUsuario[indice].tarjetas)

        usuarioIntancia.agregarTarjetas(tarjeta1)

        seccionAgregarTarjetas.classList.add('desaparecerTarjeta')
        seccionAgregarTarjetas.classList.remove('formTarjetaNueva')

        seccionAjusteUsuario.classList.add('primer-ajuste-usuario')
        seccionAjusteUsuario.classList.remove('desaparecer-primer-ajuste-usuario')
    }
}

const btnQuitarTarjetas = document.getElementById('btnQuitarTarjetas')
const seccionQuitarTarjetas = document.getElementById('seccionQuitarTarjetas')

btnQuitarTarjetas.addEventListener('click', () => {
    seccionAjusteUsuario.classList.remove('primer-ajuste-usuario')
    seccionAjusteUsuario.classList.add('desaparecer-primer-ajuste-usuario')
    seccionQuitarTarjetas.classList.remove('desaparecerTarjeta')
    seccionQuitarTarjetas.classList.add('quitarTarjeta')

})

const formCardQuitar = document.getElementById('formCardQuitar')
const textoFallidoQuitar = document.getElementById('texto-fallido-quitar')

formCardQuitar.addEventListener("submit", validarForm2)

function validarForm2(event){
    event.preventDefault()

    const codigoTarjetaQuitar = document.getElementById('codigoTarjetaQuitar')

    if(codigoTarjetaQuitar.value == ""){
        textoFallidoQuitar.classList.remove('disable-p')
    }
    else{
        const usuarioEntradaNombre = document.getElementById('usuarioEntrada')
        const indice = arregloUsuario.findIndex(usuario => usuario.nombre == usuarioRegistroNombre.value || usuario.nombre == usuarioEntradaNombre.value)

        let usuarioIntancia = new Usuario( arregloUsuario[indice].nombre, arregloUsuario[indice].contrasenia, arregloUsuario[indice].tarjetas)

        usuarioIntancia.quitarTarjeta(codigoTarjetaQuitar.value)

        seccionQuitarTarjetas.classList.add('desaparecerTarjeta')
        seccionQuitarTarjetas.classList.remove('quitarTarjeta')

        seccionAjusteUsuario.classList.add('primer-ajuste-usuario')
        seccionAjusteUsuario.classList.remove('desaparecer-primer-ajuste-usuario')
    }
}