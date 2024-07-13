let estilo = document.getElementById('estilo')

function cambiarEstiloAltoContraste(){
    estilo.setAttribute('href', 'estilos/estiloaltocontraste.css');
    document.getElementById('botonEstiloSimple').style.display = 'block';
    document.getElementById('botonEstiloAltoContraste').style.display = 'none';

}

function cambiarEstiloSimple(){
    estilo.setAttribute('href', 'estilos/estilosimple.css');
    document.getElementById('botonEstiloSimple').style.display = 'none';
    document.getElementById('botonEstiloAltoContraste').style.display = 'block';
}



function validarCampos() {
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const fnacimiento = document.getElementById('fnacimiento');
    const pais = document.getElementById('pais');
    let ban = true;

    if (nombre.value.trim() === '') {
        nombre.classList.add('is-invalid');
        ban = false;
    } else {
        nombre.classList.remove('is-invalid');
    }

    if (apellido.value.trim() === '') {
        apellido.classList.add('is-invalid');
        ban = false;
    } else {
        apellido.classList.remove('is-invalid');
    }

    if (email.value.trim() === '' || !email.value.includes('@')) {
        email.classList.add('is-invalid');
        ban = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (fnacimiento.value.trim() === '') {
        fnacimiento.classList.add('is-invalid');
        ban = false;
    } else {
        fnacimiento.classList.remove('is-invalid');
    }

    if (pais.value.trim() === '') {
        pais.classList.add('is-invalid');
        ban = false;
    } else {
        pais.classList.remove('is-invalid');
    }


    if(ban === true) alert("Datos registrados correctamente!");
}


function noRefresh(){
    return false;
}

