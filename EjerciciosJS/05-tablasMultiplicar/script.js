document.addEventListener("DOMContentLoaded", function() {
const tablaSection = document.getElementById("tabla-section");

for (let i = 1; i <= 10; i++) {
    const tablaContainer = document.createElement("div");
    tablaContainer.classList.add("tabla-container");

    const titulo = document.createElement("h2");
    titulo.textContent = `Tabla del ${i}`;
    tablaContainer.appendChild(titulo);

    const lista = document.createElement("ul");

    for (let j = 1; j <= 10; j++) {
        const item = document.createElement("li");
        item.textContent = `${i} x ${j} = ${i * j}`;
        lista.appendChild(item);
    }

    tablaContainer.appendChild(lista);
    tablaSection.appendChild(tablaContainer);
}
})
