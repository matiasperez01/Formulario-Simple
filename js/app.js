let estilo = document.getElementById('estilo')

function cambiarEstiloAltoContraste(){
    estilo.setAttribute('href', 'estilos/estiloaltocontraste.css');
    document.getElementById('botonEstiloSimple').style.display = 'block';
    document.getElementById('botonEstiloAltoContraste').style.display = 'none';
    document.getElementById('botonEstilo1').style.display = 'block';

}

function cambiarEstiloSimple(){
    estilo.setAttribute('href', 'estilos/estilosimple.css');
    document.getElementById('botonEstiloSimple').style.display = 'none';
    document.getElementById('botonEstiloAltoContraste').style.display = 'block';
    document.getElementById('botonEstilo1').style.display = 'block';
}

function cambiarEstilo1(){
    estilo.setAttribute('href', 'estilos/estilo1.css');
    document.getElementById('botonEstiloSimple').style.display = 'block';
    document.getElementById('botonEstiloAltoContraste').style.display = 'block';
    document.getElementById('botonEstilo1').style.display = 'none';
}
const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const pais = document.getElementById('pais').value;
const email = document.getElementById('email').value;
function validarCampos(){
    if(nombre === '' || apellido === '' || pais === '' || email === ''){
        alert("Por favor, complete todos los campos");
    }
    var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmail.test(email)) {
        alert('Por favor, ingrese un email válido.');
    }
    var email = document.getElementById('email').value;
}



function noRefresh(){
    return false;
}