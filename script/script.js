let nombre, correo, mensaje;
let formulario = document.getElementById('form')


formulario.addEventListener('submit', (e)=>{
e.preventDefault()
LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.querySelector ('#textarea').value
    console.log(correo)
    ValidarData(nombre,correo,mensaje)
    GuardarLocalStorage (nombre,correo,mensaje)
}

function ValidarData(nombre,correo,mensaje) {
    if(nombre.length==0 || correo.length==0 || mensaje.length==0){

        Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
    }
}

function GuardarLocalStorage(nombre,correo,mensaje) {
    localStorage.setItem('Nombre',nombre)
    localStorage.setItem ('Correo',correo)
    localStorage.setItem('Mensaje',mensaje)
    ListarData()
}
    function ListarData() {
        let nombreUsu = localStorage.getItem('Nombre')
        let correoUsu = localStorage.getItem ('Correo')
        let mensajeUsu = localStorage.getItem('Mensaje')
    }