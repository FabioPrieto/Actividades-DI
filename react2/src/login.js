import React, { useState } from "react";
import "./login.css"; // Asegúrate de crear un archivo CSS para los estilos

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const patronNombreApellido = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]{1,20}$/;
  const patronContrasena =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,20}$/;

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username) {
      setError("El nombre es obligatorio.");
      return;
    }
    if (!patronNombreApellido.test(username)) {
      setError("El nombre no debe contener números ni caracteres especiales.");
      return;
    }

    if (!password) {
      setError("La contraseña es obligatoria.");
      return;
    }
    if (!patronContrasena.test(password)) {
      setError(
        "La contraseña debe tener al menos 6 caracteres, incluyendo una mayúscula, una minúscula, un número y un carácter especial."
      );
      return;
    }

    if (username === "Fabio" && password === "Abc123!") {
      setSuccess("Inicio de sesión exitoso.");
    } else {
      setError("Nombre de usuario o contraseña incorrectos.");
    }
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
    setError("");
    setSuccess("");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Nombre de Usuario:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error-message">{error}</p>}
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
