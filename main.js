//Captura de datos;
document.getElementById('formulario').addEventListener('submit', function (e) {
    e.preventDefault();
    let formulario = new FormData(document.getElementById('formulario'));
    fetch('registrar.php', {
        method: 'POST',
        body: formulario
    })
        .then(res => res.json())
        .then(data => {
            if (data == 'true') {
                document.getElementById('txt_nombre').value = '';
                document.getElementById('txt_apellido').value = '';
                document.getElementById('txt_mail').value = '';
                document.getElementById('txt_telefono').value = '';
                alert('Registro Correcto!!!')
            } else {
                console.log(data);
            }
        })
});



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
/*var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 500);*/

