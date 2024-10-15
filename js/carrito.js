// ~CARRITO~ //

let carrito = [] // Declaro el array carrito

// Añadir evento click a los botones
document.querySelectorAll('.btn.btn-success').forEach((button, index) => {
    button.addEventListener('click', () => {
        carrito.push(productos[index]);
        console.log(`${productos[index].nombre} ha sido añadido al carrito.`);
        actualizarCarrito();
        guardarCarrito();
    });
});
console.log(carrito); // Prueba a verificar el contenido del carrito

function actualizarCarrito() {
    let listaCarrito = document.querySelector('.listaCarrito');
    let totalCarrito = document.querySelector('.totalCarrito')
    let total = carrito.reduce((acumulador, valorActual) => acumulador + valorActual.precio, 0);

    // Limpiar la lista actual
    listaCarrito.innerHTML = '';
    totalCarrito.innerHTML = '';

    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<h6>Compra realizada con exito...</h6>';
    } else {
        carrito.forEach((producto) => {
            listaCarrito.innerHTML += `
                <p>${producto.nombre} - $${producto.precio}</p>
            `;
        });

        // Mostrar el total
        totalCarrito.innerHTML = `<h5>Total: $${total}</h5>`;
    }
}

// Guardar carrito en localStorage
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Recuperar carrito de localStorage
function cargarCarrito() {
    let carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        actualizarCarrito();
    }
}
cargarCarrito();  // Cargar carrito almacenado al cargar la página

// Compro y limpio localStorage
function comprar() { 
    localStorage.clear();
    carrito = [];
    actualizarCarrito();
    console.log('la compra fue realizada con exito');
}
document.querySelector('#btn_comprar').addEventListener('click', comprar);