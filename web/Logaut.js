firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        location.replace("index.html");
    } else {
        document.getElementById("user").innerHTML = "" + user.email;
        // imgPerfil.src = "";
        //let photoURL = user.photoURL;
        //imgPerfil.src = photoURL;
    }
});
// HACEMOS UNA FUNCION PARA PODER TENENR UNA ALERTA EN CASO DE QUERER CERRAR SESION
$(function salir() {

    $(document).on("click", "#btn-salir", function() {
        //Ingresamos un mensaje a mostrar
        var mensaje = confirm("¿Estas seguro de cerrar sesion?");
        //Detectamos si el usuario acepto el mensaje
        if (mensaje) {
            firebase.auth().signOut();
        }
        //Detectamos si el usuario denegó el mensaje
    });
});