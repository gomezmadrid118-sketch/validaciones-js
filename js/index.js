function validarNombre(){
    const nombre = document.getElementById('nombre').value.trim();
    const errorNombre = document.getElementById('errorNombre');

    if(nombre.length < 3){
        errorNombre.innerText = 'El nombre debe tener mínimo 3 caracteres';
        return false;
    } else{
        errorNombre.innerText = '';
        return true;
    }
}

document.getElementById('nombre').addEventListener('input', validarNombre);

function validarApellidos(){
    const apellidos = document.getElementById('apellidos').value.trim();
    const errorApellidos = document.getElementById('errorApellidos');

    if(apellidos.length < 3){
        errorApellidos.innerText = 'Los apellidos deben tener mínimo 3 caracteres';
        return false;
    } else{
        errorApellidos.innerText = '';
        return true;
    }
}

document.getElementById('apellidos').addEventListener('input', validarApellidos);

function validarDocumento(){
    const documento = document.getElementById('documento').value.trim();
    const errorDocumento = document.getElementById('errorDocumento');
    
    if(!/^\d{6,10}$/.test(documento)){
        errorDocumento.innerText = 'Ingrese un documento de entre 6 a 10 dígitos';
        return false;
    } else{
        document.textContent = '';
        return true;
    }
}

document.getElementById('documento').addEventListener('input', validarDocumento);

function validarCorreo() {
    const correo = document.getElementById('correo').value.trim();
    const errorCorreo = document.getElementById('errorCorreo');
    
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
        errorCorreo.innerText = 'Ingrese un correo electrónico válido';
        return false;
    } else{
        errorCorreo.textContent = '';
        return true;
    }
}

document.getElementById('correo').addEventListener('input', validarCorreo);