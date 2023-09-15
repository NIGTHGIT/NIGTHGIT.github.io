
document.getElementById('btnEnviarWhatsApph').addEventListener('click', enviarMensajeWhatsApp);

function enviarMensajeWhatsApp() {
  console.log("fgb")
  // Número de teléfono al que deseas enviar el mensaje (incluye el código de país)
  var numeroTelefono = '8297490187';

  // Mensaje que deseas enviar (puedes URL codificarlo)
  var mensaje = ` Nombre: ${document.getElementById("name").value},
  Correo: ${document.getElementById("correo").value},
  Motivo: ${document.getElementById("motivo").value}`;

  // Construye el enlace de WhatsApp
  var enlaceWhatsApp = 'https://api.whatsapp.com/send?phone=' + encodeURIComponent(numeroTelefono) + '&text=' + encodeURIComponent(mensaje);

window.open(enlaceWhatsApp);
  // Abre una nueva ventana o pestaña del navegador con el enlace de WhatsApp

}



