# Actividad CSS: Reflexiones sobre el Posicionamiento

## 1. Reflexión sobre `position: relative`

Cuando se utiliza `position: relative`, el elemento (en este caso, la Caja 3) sigue ocupando su **espacio original** en el flujo del documento, aunque esté visualmente desplazado. 

La Caja 3 conserva su lugar como si no hubiera sido movida, pero visualmente aparece 50px hacia abajo y a la derecha. Esto provoca que la **Caja 4**, que sigue en el flujo normal, se coloque justo debajo de la posición original de la **Caja 3**.

El resultado es que la **Caja 3**, al estar visualmente desplazada, se **superpone** sobre la **Caja 4**. Esto ocurre porque la posición original de la Caja 3 en el flujo del documento no cambia, solo su **posición visual**.

---

## 2. Reflexión sobre `position: absolute` y el uso de un contenedor relativo

### Sin un contenedor relativo:
Cuando usas `position: absolute` sin un contenedor que sirva de referencia (con `position: relative` o `absolute`), el elemento se posiciona con respecto al **viewport**, que es la ventana visible del navegador. En este caso, la **Caja 3** se posiciona a 50px desde la esquina superior izquierda del viewport, sin tener en cuenta a las demás cajas.

### Con un contenedor relativo:
Si se asigna `position: relative` al contenedor (por ejemplo, `#container`), la **Caja 3** se posiciona en relación al contenedor, no al viewport. Ahora, la **Caja 3** estará ubicada a 50px desde la esquina superior izquierda del contenedor.

Aunque las **Cajas 1** y **2** están dentro del flujo normal del documento, la **Caja 3** es extraída del flujo debido a su `position: absolute`, lo que provoca que se coloque **por encima** de las otras cajas.

### Movimiento del contenedor:
Al mover el contenedor 50px hacia la derecha usando `left: 50px`, todo su contenido, incluida la **Caja 3**, también se mueve con él. Como la posición de la **Caja 3** es relativa al contenedor, sigue estando a 50px desde la esquina superior izquierda del contenedor, pero debido al desplazamiento del contenedor, la **Caja 3** se mueve en consecuencia.

---

## 3. Reflexión sobre `position: fixed`

Un elemento con `position: fixed` se extrae completamente del flujo normal del documento. Esto significa que el **h2** con `position: fixed` no afecta al resto del contenido; el contenido que sigue no "empuja" al h2 hacia abajo, sino que se comporta como si el h2 no existiera en su posición original.

El **h2** se posiciona de forma fija respecto al **viewport**, permaneciendo visible incluso cuando se desplaza la página hacia abajo o hacia arriba. Sin embargo, al estar fuera del flujo del documento, puede ser necesario ajustar el margen o el relleno del contenido siguiente para evitar que quede cubierto por el **h2**.

