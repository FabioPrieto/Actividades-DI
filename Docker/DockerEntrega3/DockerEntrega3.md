# Informe de configuración de servicios con Docker Compose

---

## Pasos realizados

### 1. Crear el archivo `docker-compose.yml`
Se creó un archivo `docker-compose.yml` con la configuración necesaria para los servicios **MySQL** y **phpMyAdmin**.

#### Contenido del archivo
```yaml
version: "3.8"  # Especifica la versión de Docker Compose que estamos usando.

services:  # Define los servicios que se van a ejecutar.
  mysql:  # Configuración para el servicio de la base de datos MySQL.
    container_name: mysql_database  # Nombre del contenedor para identificarlo fácilmente.
    image: mysql:8.0  # Imagen oficial de MySQL en su versión 8.0.
    ports:
      - "3307:3306"  # Mapea el puerto 3306 del contenedor al puerto 3306 del host (para conexiones externas).
    volumes:
      - volumen3:/var/lib/mysql  # Usa un volumen llamado "volumen3" para almacenar datos de forma persistente.
    environment:  # Variables de entorno necesarias para configurar MySQL.
      MYSQL_ROOT_PASSWORD: rootpassword  # Contraseña para el usuario root de MySQL.
      MYSQL_DATABASE: testdb  # Crea una base de datos llamada "testdb".
      MYSQL_USER: testuser  # Crea un usuario llamado "testuser".
      MYSQL_PASSWORD: testpassword  # Establece la contraseña del usuario "testuser".

  phpmyadmin:  # Configuración para el servicio de phpMyAdmin.
    container_name: phpmyadmin_service  # Nombre del contenedor para identificarlo fácilmente.
    image: phpmyadmin/phpmyadmin  # Imagen oficial de phpMyAdmin.
    depends_on:  # Asegura que este servicio se inicie después de que el servicio MySQL esté listo.
      - mysql
    ports:
      - "8081:80"  # Mapea el puerto 80 del contenedor al puerto 8081 del host (para acceder a phpMyAdmin).
    environment:  # Variables de entorno necesarias para configurar phpMyAdmin.
      PMA_HOST: mysql  # Define el host donde se encuentra la base de datos (nombre del servicio MySQL).
      PMA_PORT: 3306  # Puerto del servicio MySQL.

volumes:  # Define los volúmenes utilizados por los servicios.
  volumen3:  # Volumen persistente para almacenar los datos de MySQL.
```

---

### 2. Ejecutar los servicios con Docker Compose
Para iniciar los servicios, se utilizó el siguiente comando desde el directorio donde se encuentra el archivo `docker-compose.yml`:

```bash
docker compose up -d
```

Este comando inicia ambos contenedores en segundo plano.

![Entrega3_1](./imagenes/3_1(Error).png)
(En el primer comando muestro como tube un error con los puertos)
---

### 3. Verificación de contenedores activos
Se verificó que los contenedores están corriendo con el siguiente comando:

```bash
docker ps
```

La salida confirma que los servicios están activos:

- **mysql_database** en el puerto `3307`.
- **phpmyadmin_service** en el puerto `8081`.

![Entrega3_2](./imagenes/3_2(Contenedores_Activos).png)

---
### 4. Acceso a phpMyAdmin
Abrir un navegador web y acceder a **phpMyAdmin** mediante la URL:

```
http://localhost:8081
```

Se utilizaron las credenciales configuradas en el archivo `docker-compose.yml`:

- **Servidor**: `mysql` (nombre del contenedor de MySQL).
- **Usuario**: `testuser`.
- **Contraseña**: `testpassword`.

![Entrega3_2](./imagenes/3_3(phpmyadmin).png)
