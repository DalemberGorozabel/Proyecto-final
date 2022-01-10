function validarCédula(){
    let valorCedula = document.getElementById("Contraseña").value;

    if(!valoCedula.includes("letras")){
        alert("No se permite ingresar letras en este campo");
    }

}

$('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
        $('#message').html('Las contraseñas Coinciden').css('color', 'green');
    } else 
        $('#message').html('Las contraseñas no Coinciden').css('color', 'red');
});
var mysql=require('mysql');
var conexion = mysql.createConnection({
    host: 'localhost',
    database: 'seguimiento_graduado',
    user: 'root',
    password: ''
    });
conexion.connect(function(error){
    if (error){
    throw error;
    }else{
        console.log('Conexion Exitosa');
    }
    });


conexion.query('SELECT * FROM recuperarcontraseña', function (error, filas){
        if(error){
            throw error;
        }else{
            filas.forEach(filas=>{
            console.log(filas);
            });
        }
    });
    function add(){
        var db = conexion.result;
        var data = db.transaction("contraseña1", "readwrite");
        var object= data.objectStore('contraseña1');
    
        var datos= object.put({
            contraseña1:document.querySelector('#contraseña1').value,
            contraseña2:document.querySelector('#contraseña2').value,
        });
    
        datos.onerror = function(e){
            alert(datos.error.name + '\n\n'+ datos.error.message)
        }
    
        data.oncomplete = function(e){
            document.querySelector('#contraseña1').value = '';
            document.querySelector('#contraseña2').value = '';
            alert('objet succesfully added')
        }
    }