//Captura de datos;
function captura() {
    var nombre = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellido").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    if (nombre == "") {
        alert("El nombre es obligatorio");
        document.getElementById("nombres").focus();
    }
    else {
        if (correo == "") {
            alert("El correo es obligatorio");
            document.getElementById("correo").focus();
        }
        else {
            document.getElementById("nombres").value = "";
            document.getElementById("apellido").value = "";
            document.getElementById("correo").value = "";
            document.getElementById("telefono").value = "";
            document.getElementById("nombres").focus();
            alert("SUSCRIPCIÓN EXITOSA!!!")
        }
    }

}
//alert("Gracias por su suscripción")


//Movimiento del menú
document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

//Animación del scroll
ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.new-cards', { delay: 500 });
ScrollReveal().reveal('.banner-susbcription', { delay: 500 });
ScrollReveal().reveal('.social', { delay: 500 });
ScrollReveal().reveal('.footer-container', { delay: 500 });
ScrollReveal().reveal('.contenedor-grid', { delay: 500 });
ScrollReveal().reveal('.form-subs', { delay: 500 });

//Carrusel
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 500);

