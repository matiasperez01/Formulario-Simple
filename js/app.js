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

function noRefresh(){
    return false;
}