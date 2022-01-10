function sendPasswordReset() {
    // [START auth_send_password_reset]
    var email = document.getElementById("correo").value;
    firebase.auth().languageCode = 'it';
    firebase.auth().useDeviceLanguage();
    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            alert("Por favor revisa en tus bandejas de mensaje, enb la cùal se  enviò un  enlace para poder recuperar tu contraseña.");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error, el email esta mal escrito o no existe.");
        });
}