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

document.getElementById('nombre').addEventListener('input', () => {
    validarNombre();
    validarFormulario();
});

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

document.getElementById('apellidos').addEventListener('input', () => {
    validarApellidos();
    validarFormulario();
});

function validarDocumento(){
    const documento = document.getElementById('documento').value.trim();
    const errorDocumento = document.getElementById('errorDocumento');
    
    if(!/^\d{6,10}$/.test(documento)){
        errorDocumento.innerText = 'Ingrese un documento de entre 6 a 10 dígitos';
        return false;
    } else{
        errorDocumento.textContent = '';
        return true;
    }
}

document.getElementById('documento').addEventListener('input', () => {
    validarDocumento();
    validarFormulario();
});

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

document.getElementById('correo').addEventListener('input', () => {
    validarCorreo();
    validarFormulario();
});

function validarTelefono() {
   const telefono = document.getElementById('telefono').value.trim();
    const errorTelefono = document.getElementById('errorTelefono');
    
    if(!/^\d{10}$/.test(telefono)){
        errorTelefono.innerText = 'Ingrese un telefono válido';
        return false;
    } else{
        errorTelefono.textContent = '';
        return true;
    }
}


document.getElementById('telefono').addEventListener('input', () => {
    validarTelefono();
    validarFormulario();
});

function validarEdad() {
   const edad = document.getElementById('edad').value.trim();
    const errorEdad = document.getElementById('errorEdad');
    
    if(isNaN(edad) || edad < 18 || edad > 60){
        errorEdad.innerText = 'Ingrese una edad válida';
        return false;
    } else{
        errorEdad.textContent = '';
        return true;
    }
}


document.getElementById('edad').addEventListener('input', () => {
    validarEdad();
    validarFormulario();
});

function validarContrasena() {
   const contrasena = document.getElementById('contrasena').value.trim();
    const errorContrasena = document.getElementById('errorContrasena');
    
    if(!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(contrasena)){
        errorContrasena.innerText = 'Ingrese una contraseña válida';
        return false;
    } else{
        errorContrasena.textContent = '';
        return true;
    }
}


document.getElementById('contrasena').addEventListener('input', () => {
    validarContrasena();
    validarFormulario();
});

function validarConfirmarContrasena() {
    const confirmar = document.getElementById('confirmar').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const errorConfirmar = document.getElementById('errorConfirmar');
    
    if(confirmar === '' || confirmar !== contrasena){
        errorConfirmar.innerText = 'La confirmación no es igual a la contraseña';
        return false;
    } else{
        errorConfirmar.textContent = '';
        return true;
    }
}


document.getElementById('confirmar').addEventListener('input', () => {
    validarConfirmarContrasena();
    validarFormulario();
});

function validarPrograma(){
    const programa = document.getElementById('programa').value.trim();
    const errorPrograma = document.getElementById('errorPrograma');

    if(programa === ''){
        errorPrograma.textContent = 'Seleccione una opción de formación';
        return false;
    } else {
        errorPrograma.textContent = '';
        return true;
    }
}

document.getElementById('programa').addEventListener('change', () => {
    validarPrograma();
    validarFormulario();
});

function validarTerminos(){
    const terminos = document.getElementById('terminos').checked;
    const errorTerminos = document.getElementById('errorTerminos');

    if(!terminos){
        errorTerminos.textContent = 'Debe aceptar los términos y condiciones';
        return false;
    } else{
        errorTerminos.textContent = '';
        return true;
    }
}

document.getElementById('terminos').addEventListener('change', () => {
    validarTerminos();
    validarFormulario();
});

function validarFormulario() {
    const validaciones = [
        validarNombre(),
        validarApellidos(),
        validarDocumento(),
        validarCorreo(),
        validarTelefono(),
        validarEdad(),
        validarContrasena(),
        validarConfirmarContrasena(),
        validarPrograma(),
        validarTerminos()
    ];
    const resultado = validaciones.every(Boolean);
    document.getElementById('btnRegistrar').disabled = !resultado;
    return resultado;
}

function enviarFormulario(event) {
    event.preventDefault();

    if (!validarFormulario()) {
        return;
    }

    const formulario = document.getElementById('formulario');
    const mensajeFinal = document.getElementById('mensajeFinal');
    mensajeFinal.textContent = '¡Estudiante registrado correctamente!';
    mensajeFinal.className = 'exito';
    formulario.reset();
    document.getElementById('btnRegistrar').disabled = true;
}

document.getElementById('formulario').addEventListener('submit', enviarFormulario);
document.getElementById('btnRegistrar').disabled = true;