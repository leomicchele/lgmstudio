
const $formulario = document.querySelector('#formulario') 
const $email = document.querySelector('#formEmail');
const $telefono = document.querySelector('#formTelefono');
const $nombre = document.querySelector('#formNombre');
const $mensaje = document.querySelector('#formTexto');

function enviarFromulario() {
  $formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const datos = {
      email: $email.value,
      telefono: $telefono.value,
      nombre: $nombre.value,
      mensaje: $mensaje.value,
    };

    console.log(datos);

    fetch("https://api.jsonbin.io/v3/b", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2b$10$4WaaagEK13M.rynnuv7QNOkQLqCrjVxglvcoPAYAg49zteCh7An3C",
      },
      body: JSON.stringify({ datos }),
    })
      .then((response) => {
        alert("Mensaje enviado");
        $email.value = "";
        $telefono.value = "";
        $nombre.value = "";
        $mensaje.value = "";
      })
      .catch((error) => console.error(error));
  });
}

enviarFromulario();

