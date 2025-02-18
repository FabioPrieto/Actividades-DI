import React, { useState } from "react";
import "./login.css"; // Asegúrate de crear un archivo CSS para los estilos

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorNombre, setErrorNombre] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [success, setSuccess] = useState("");

  const patronNombreApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{1,20}$/;
  const patronContrasena =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorNombre("");
    setErrorPass("");
    setSuccess("");
    let mal = false;

    if (!username) {
      setErrorNombre("El nombre es obligatorio.");
      mal = true;
    }
    else if (!patronNombreApellido.test(username)) {
      setErrorNombre("El nombre no debe contener números ni caracteres especiales.");
      mal = true;
    }

    if (!password) {
      setErrorPass("La contraseña es obligatoria.");
      mal = true;
    }
    else if (!patronContrasena.test(password)) {
      setErrorPass(
        "La contraseña debe tener al menos 6 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial."
      );
      mal = true;
    }
    if(mal){
      return
    }

    if (username === "Fabio" && password === "Abc123!") {
      setSuccess("Inicio de sesión exitoso.");
    } else {
      setErrorPass("Nombre de usuario o contraseña incorrectos.");
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setErrorNombre("");
    setErrorPass("");
    setSuccess("");
  };

  return (
    <div className="login-container">
      <h2>Formulario de login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errorNombre && <p className="error-message">{errorNombre}</p>}
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorPass && <p className="error-message">{errorPass}</p>}
        {success && <p className="success-message">{success}</p>}
        <button type="submit">Iniciar Sesión</button>
        <button type="button" onClick={handleReset}>
          Limpiar Datos
        </button>
      </form>
    </div>
  );
};

export default Login;
