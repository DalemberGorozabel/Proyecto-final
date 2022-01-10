/* EXPRESIONES REGULARES **************/


const expresiones_nombres = /^[a-zA-Z ]{4,20}$/;
const expresiones_email = /^\w+@\w+\.+[aZ-zA]{2,3}$/;

const expresiones_asunto = /^[a-zA-Z-0-9 ]{4,200}$/;
const expresiones_mensaje = /^[a-zA-Z-0-9 ]{10,200}$/;

/* VALIDACION DE REGISTRO Y QUE NO CARGUE LA PAGINA*/
const validarSugerencia = document.getElementById("validar-sugerencia");
validarSugerencia.addEventListener("submit", async(e) => {

    var nombres = document.getElementById("nombres").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;



    if (nombres == "" || asunto == "" || email == "" || mensaje == "") {
        e.preventDefault();
        alert("Todos los campos son obligatorios");
        return false;
    } else if (!expresiones_nombres.test(nombres)) {
        e.preventDefault();
        alert("El campo nombre debe tener al menos 4 caràcteres");
        return false;
    } else if (!expresiones_asunto.test(asunto)) {
        e.preventDefault();
        alert("El campo asunto debe contener al menos 4 caràcteres");
        return false;
    } else if (!expresiones_email.test(email)) {
        e.preventDefault();
        alert("El correo no es vàlido");
        return false;
    } else if (!expresiones_mensaje.test(mensaje)) {
        e.preventDefault();
        alert("El campo mensaje debe tener al menos 10 caràcteres");
        return false;
    } else {
        const enviarDatos = (nombres, email, asunto, mensaje) => db.collection('Comentarios').doc().set({
            nombres,
            email,
            asunto,
            mensaje
        });
        e.preventDefault();
        const mensaje = validarSugerencia["mensaje"].value;
        const nombres = validarSugerencia["nombres"].value;
        const asunto = validarSugerencia["asunto"].value;
        const email = validarSugerencia["email"].value;

        alert("Muchas gracias por tu comentario");

        await enviarDatos(nombres, email, asunto, mensaje);
        // AUTENTICACION DE USUARIOS
        console.log(enviarDatos);
        validarSugerencia.reset();
    }
});