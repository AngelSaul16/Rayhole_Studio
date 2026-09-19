window.addEventListener('scroll', function() {
  var imagen1 = document.getElementById('imagen1');
  var imagen2 = document.getElementById('imagen2');
  var menu = document.getElementById("menu");
  var menuIcon = document.getElementById("menuIcon");

  // Obtén la posición actual de scroll
  var scrollPosition = window.scrollY;

  // Cambia las imágenes según la posición de scroll
  if (scrollPosition > 100) {
    imagen1.style.display = 'none';
    imagen2.style.display = 'block';

    menu.style.borderColor = "black";
    menuIcon.classList.remove("navbar-toggler-icon");
    menuIcon.classList.add("navbar-responsive-icon");
  } else {
    imagen1.style.display = 'block';
    imagen2.style.display = 'none';

    menu.style.borderColor = "white";
    menuIcon.classList.remove("navbar-responsive-icon");
    menuIcon.classList.add("navbar-toggler-icon");
  }
});

const btn = document.getElementById('enviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

  // Validación de campos y mensajes de error
  var inputs = this.querySelectorAll("input, textarea");
  var algunoVacio = false;

  inputs.forEach(function(input) {
    var spanError = input.nextElementSibling;
    if (spanError) { // Verificar si el siguiente elemento hermano existe
        if (input.value.trim() === "") { // Si el valor del input está vacío
            algunoVacio = true;
            spanError.textContent = "This field is required"; // Mostramos el mensaje de error en el <span>
            spanError.style.color = "red"; // Cambiamos el color del texto del mensaje de error a rojo
        } else {
            spanError.textContent = ""; // Limpiamos el mensaje de error en el <span>
        }
    }
});

  // Si algún campo está vacío, detenemos el envío del formulario
  if (algunoVacio) {
    return;
  }

  // Envío del formulario
  if (btn.value == 'Enviar') {
    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_8vf9uwt';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Correo enviado",
          text: "Estaremos contestando a la brevedad posible.",
          showConfirmButton: false,
          timer: 4000
        });  
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  }
  else {
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_8vf9uwt';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Submit';
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Mail sent",
          text: "We will be responding as soon as possible.",
          showConfirmButton: false,
          timer: 4000
        });  
      }, (err) => {
        btn.value = 'Submit';
        alert(JSON.stringify(err));
      });
  } 
});




/*
const btn = document.getElementById('enviar');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

  if (btn.value == 'Enviar') {
    btn.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_8vf9uwt';


    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Enviar';
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Correo enviado",
          text: "Estaremos contestando a la brevedad posible.",
          showConfirmButton: false,
          timer: 4000
        });  
      }, (err) => {
        btn.value = 'Enviar';
        alert(JSON.stringify(err));
      });
  }
  else {
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_8vf9uwt';


    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'Submit';
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Mail sent",
          text: "We will be responding as soon as possible.",
          showConfirmButton: false,
          timer: 4000
        });  
      }, (err) => {
        btn.value = 'Submit';
        alert(JSON.stringify(err));
      });
  }

   
});

document.addEventListener("DOMContentLoaded", function() {
  // Obtenemos el formulario por su ID
  var formulario = document.getElementById("form");

  // Agregamos un event listener para el evento "submit"
  formulario.addEventListener("submit", function(event) {
      // Obtenemos todos los inputs y textareas del formulario
      var inputs = formulario.querySelectorAll("input, textarea");

      // Bandera para verificar si algún campo está vacío
      var algunoVacio = false;

      // Iteramos sobre cada input para verificar si alguno está vacío
      inputs.forEach(function(input) {
          var spanError = input.nextElementSibling; // Obtenemos el siguiente elemento hermano (el <span> para el mensaje de error)
          if (input.value.trim() === "") { // Si el valor del input está vacío
              algunoVacio = true;
              // Cambiamos el color de fondo del input vacío a rojo
              input.style.backgroundColor = "red";
              // Mostramos el mensaje de error en el <span>
              spanError.textContent = "Este campo es obligatorio";
          } else {
              // Restauramos el color de fondo predeterminado del input
              input.style.backgroundColor = "";
              // Limpiamos el mensaje de error en el <span>
              spanError.textContent = "";
          }
      });

      // Si algún campo está vacío, evitamos el envío del formulario
      if (algunoVacio) {
          // Evitamos el envío del formulario
          event.preventDefault();
      }
  });
});
*/