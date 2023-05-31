let arregloUsuario = JSON.parse(localStorage.getItem('usuarios')) || [];

class Usuario{
    constructor(nombre, contraseña, tarjeta){
        this.nombre = nombre
        this.contraseña = contraseña
        this.tarjetas = [tarjeta]
    }

    agregarTarjetas(tarjeta){
        this.tarjetas.push(tarjeta)
        this.actualizarLocalStorage();
    }

    actualizarLocalStorage() {
        const indice = arregloUsuario.findIndex((usuario) => usuario.nombre === this.nombre);
        if (indice !== -1) {
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
const btnVolverInicioSesion = document.getElementById('btnVolverInicioSesion')

registrase.addEventListener('click', (event) => {
    event.preventDefault();
    formularioInscripcion.classList.add('inicio-disable')
    formularioRegistro.classList.remove('inicio-disable')
    formularioRegistro.classList.add('registro')
    btnDos.classList.add('disable')
});

btnVolverInicioSesion.addEventListener('click', (event) => {
    event.preventDefault();
    formularioInscripcion.classList.remove('inicio-disable')
    formularioRegistro.classList.remove('registro')
    formularioRegistro.classList.add('inicio-disable')

    btnDos.classList.remove('disable')

})

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
        rellenarCampos.classList.remove('desaparecer-p')
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
})


const btnCerrarSesion = document.getElementById('btnCerrarSesion')

btnCerrarSesion.addEventListener('click', () => {
    const rellenarCampos1 = document.getElementById('texto-fallido-ingreso')

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
        textoFallidoNuevo.classList.remove('disable-p')
    }
    else{
        const usuarioEntradaNombre = document.getElementById('usuarioEntrada')
        const indice = arregloUsuario.findIndex(usuario => usuario.nombre == usuarioRegistroNombre.value || usuario.nombre == usuarioEntradaNombre.value)

        let tarjeta1 = crearTarjeta(numTarjetaNueva.value, nombreTarjetaNueva.value, vencimientoTarjetaNueva.value, codigoTarjetaNueva.value);
        let usuarioIntancia = new Usuario( arregloUsuario[indice].nombre, arregloUsuario[indice].contraseña, arregloUsuario[indice].tarjeta)

        usuarioIntancia.agregarTarjetas(tarjeta1)

    }
}