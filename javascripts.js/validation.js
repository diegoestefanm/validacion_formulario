
function emailValidation() {
    const form = document.getElementById('form');
    const alerta_footer = document.getElementById("alerta_footer");
    const email_conf = document.getElementById("email_confirm");
    const error_correo = document.createElement("p");
    error_correo.innerText = "El correo electrónico no coincide";
    error_correo.style.color = "#d14539";
    error_correo.style.display = "none";
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      if (form.email.value !== form.email_confirm.value) {
        alerta_footer.classList.remove("oculto");
        setTimeout(() => {
          alerta_footer.classList.add("oculto");
        }, 3000);
      } else {
        form.submit();
      }
    });
  
    email_conf.addEventListener("keyup", () => {
      console.log("cambio");
      if (form.email.value !== form.email_confirm.value) {
        email_conf.style.backgroundColor = "rgba(230,169,171,.5)";
        error_correo.style.display = "block";
      } else {
        email_conf.style.backgroundColor = "#fff";
        error_correo.style.display = "none";
      }
    });
  
    const contenido = document.getElementsByTagName("tbody")[0];
    contenido.insertBefore(error_correo, contenido.children[3]); // Inserta después del tercer hijo (tr)
  }
  
  window.onload = emailValidation;
  
