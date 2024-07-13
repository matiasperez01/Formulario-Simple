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



function validarCampos(){
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const pais = document.getElementById('pais').value;
    const email = document.getElementById('email').value;

    if(nombre.length < 1 || nombre.length > 20 || apellido.length < 2 || apellido.length > 20 || pais === '' || email === ''){
        alert("Por favor, complete todos los campos");
    }else{
        var formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formatoEmail.test(email)) {
            alert('Por favor, ingrese un email válido.');
        }else{
            alert("Datos ingresados correctamente!");
        }    
    }
    
}



function noRefresh(){
    return false;
}

