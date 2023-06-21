let primeraCompra = prompt("¿Es tu primera vez comprando lámparas con nosotros? Responde si o no:");

if (primeraCompra.toLowerCase() === "si") {
    alert("¡BIENVENIDO A LETT ARTE Y DISEÑO!");
    
} else {
    alert("¡GRACIAS POR TU PREFERENCIA!");
    
}

const lamparas = [
    { nombre: "Velador ALASKA YUTE", precio: 3000, descripcion: "Lámpara de escritorio con luz LED regulable y brazo flexible.", colores: ["blanco", "negro"] },
    { nombre: "Velador ALASKA ALGODON PEINADO", precio: 3500, descripcion: "Lámpara de techo con diseño moderno y luz cálida.", colores: ["plateado", "dorado"] },
    { nombre: "Velador MANCHESTER HILADO GRIS", precio: 2500, descripcion: "Lámpara de pie con acabado en metal oxidado y altura ajustable.", colores: ["negro", "marrón"] },
    { nombre: "Aplique SINGAPUR YUTE", precio: 2500, descripcion: "Lámpara de pie con acabado en metal oxidado y altura ajustable.", colores: ["negro", "marrón"] },
    { nombre: "Aplique ATENAS", precio: 2500, descripcion: "Lámpara de pie con acabado en metal oxidado y altura ajustable.", colores: ["negro", "marrón"] },
];

let carrito = []; 
let totalCompras = 0; 

while (true) {
    let menuTexto = "Menú de lámparas disponibles:\n";
    lamparas.forEach((lampara, index) => {
        menuTexto += `${index + 1}. ${lampara.nombre} - Precio: ${lampara.precio} Pesos Argentinos\n`;
        menuTexto += `   Descripción: ${lampara.descripcion}\n`;
        menuTexto += `   Colores disponibles: ${lampara.colores.join(", ")}\n\n`;
    });

    alert(menuTexto);

    const eleccion = parseInt(prompt("Elige el número de la lámpara que deseas comprar:"));
    if (eleccion >= 1 && eleccion <= lamparas.length) {
        const indice = eleccion - 1;
        const lamparaElegida = lamparas[indice];

        let eleccionTexto = `Has elegido: ${lamparaElegida.nombre}\n`;
        eleccionTexto += `Precio: ${lamparaElegida.precio} Pesos Argentinos\n`;
        eleccionTexto += `Descripción: ${lamparaElegida.descripcion}\n`;
        eleccionTexto += `Colores disponibles: ${lamparaElegida.colores.join(", ")}`;

        alert(eleccionTexto);

        const agregarEnvio = prompt("¿Deseas agregar el envío por 500 pesos extra? Responde si o no:");

        function calcularPrecioTotal(lampara, agregarEnvio) {
            let precioTotal = lampara.precio;
            if (agregarEnvio.toLowerCase() === "si") {
                precioTotal += 500;
            }
            return precioTotal;
        }

        const precioTotal = calcularPrecioTotal(lamparaElegida, agregarEnvio);
        alert(`Precio total: ${precioTotal} Pesos Argentinos`);

        carrito.push({ lampara: lamparaElegida, precioTotal: precioTotal }); 
        totalCompras += precioTotal; 

        const agregarOtro = prompt("¿Deseas agregar otro producto al carrito? Responde sí o no:");
        if (agregarOtro.toLowerCase() !== "si") {
            break;
        }
    } else {
        alert("¡Elección inválida! Por favor, selecciona un número de lámpara válido.");
    }
}

// Estos son el total de los productos que van a ir en el carrito al finalizar la compra
if (carrito.length > 0) {
    let carritoTexto = "Productos en el carrito:\n";
    carrito.forEach((item, index) => {
        carritoTexto += `Producto ${index + 1}:\n`;
        carritoTexto += `   Nombre: ${item.lampara.nombre}\n`;
        carritoTexto += `   Precio Total: ${item.precioTotal} Pesos Argentinos\n\n`;
    });
    carritoTexto += `Total de compras: ${totalCompras} Pesos Argentinos`;
    alert(carritoTexto);
} else {
    alert("El carrito está vacío.");
}

