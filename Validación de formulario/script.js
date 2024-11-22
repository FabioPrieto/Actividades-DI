document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formulario");
  const inputs = {
    nombre: document.getElementById("nombre"),
    apellidos: document.getElementById("apellidos"),
    dni: document.getElementById("dni"),
    email: document.getElementById("email"),
    motivo: document.getElementById("motivo"),
  };
  const errores = {
    nombre: document.getElementById("error-nombre"),
    apellidos: document.getElementById("error-apellidos"),
    dni: document.getElementById("error-dni"),
    email: document.getElementById("error-email"),
    motivo: document.getElementById("error-motivo"),
  };

  const validarCampoTexto = (valor, campo) => {
    valor = valor.trim();
    if (!valor) return `El ${campo} es obligatorio.`;
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,20}$/.test(valor)) {
      return `El ${campo} debe tener entre 3 y 20 caracteres alfabéticos.`;
    }
    return "";
  };

  const validarDNI = () => {
    const valor = inputs.dni.value.trim();
    const regexDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKEtrwagmyfpdxbnjzsqvhlcke]$/;
    const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";
    if (!valor) return "El DNI es obligatorio.";
    if (!regexDNI.test(valor)) return "El DNI debe tener 8 dígitos y una letra.";
    const numero = parseInt(valor.slice(0, -1));
    const letra = valor.slice(-1).toUpperCase();
    if (letra !== letrasDNI[numero % 23]) {
      return "La letra del DNI no es válida.";
    }
    return "";
  };

  const validarEmail = () => {
    const valor = inputs.email.value.trim();
    if (!valor) return "El correo electrónico es obligatorio.";
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(valor)) {
      return "El correo electrónico no es válido.";
    }
    return "";
  };

  const validarMotivo = () => {
    const valor = inputs.motivo.value.trim();
    if (!valor) return "El motivo es obligatorio.";
    if (!/^[a-zA-Z0-9\s,.;()¿?¡!]{1,255}$/.test(valor)) {
      return "El motivo solo puede contener letras, números y (, . ; ()).¿?¡!";
    }
    return "";
  };

  const validaciones = {
    nombre: () => validarCampoTexto(inputs.nombre.value, "nombre"),
    apellidos: () => validarCampoTexto(inputs.apellidos.value, "apellidos"),
    dni: validarDNI,
    email: validarEmail,
    motivo: validarMotivo,
  };

  const mostrarError = (campo, mensaje) => {
    errores[campo].textContent = mensaje;
    errores[campo].style.display = "block"
  };

  const validarCampo = (campo) => {
    const mensajeError = validaciones[campo]();
    mostrarError(campo, mensajeError);
    return !mensajeError;
  };

  const validarFormulario = () => {
    let esValido = true;
    for (let campo in validaciones) {
      if (!validarCampo(campo)) esValido = false;
    }
    return esValido;
  };

  for (let campo in inputs) {
    inputs[campo].addEventListener("input", () => validarCampo(campo));
  }

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      fetch("https://webhook.site/b1eace9b-93bb-4175-87d9-133433117fba", {
        method: "POST",
        body: new FormData(formulario),
      }).then(() => alert("Datos enviados correctamente."));
    } else {
      alert("Por favor, corrige los errores antes de enviar.");
    }
  });

  document.getElementById("limpiar").addEventListener("click", () => {
    formulario.reset();
    for (let campo in errores) {
      mostrarError(campo, "");
    }
  });
});
