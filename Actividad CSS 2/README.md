# Actividad CSS 2

## Reflexiones:

### 1. Elemento fuera del flujo del documento
El `h2` con `position: fixed` está completamente fuera del flujo normal del documento, por lo que el contenido que venga después no lo "empuja" hacia abajo. El contenido que aparece debajo del `h2` se comporta como si el `h2` no estuviera presente en su posición original.

### 2. Siempre visible
El elemento con `position: fixed` permanece siempre visible en la pantalla, incluso cuando el usuario hace scroll hacia abajo. Este comportamiento es útil para crear barras de navegación o encabezados fijos que deben estar siempre a la vista.

### 3. Desbordamiento del contenido
Dado que el `h2` está en la parte superior del viewport y no se reserva espacio en el flujo del documento, es posible que el contenido que siga se "superponga" o quede oculto debajo del encabezado. Para evitar esto, se puede agregar un margen o relleno adicional en el contenido siguiente para garantizar que no quede cubierto.
