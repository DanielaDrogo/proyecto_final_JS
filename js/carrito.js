// ~CARRITO~ //

let carrito = [] // Declaro el array carrito

// Añadir evento click a los botones "añadir al carrito"
document.querySelectorAll('.btn.btn-success').forEach((button, index) => {
    button.addEventListener('click', () => {

        // si existe en el producto en el carrito, aumento la cantidad
        if (carrito.includes(productos[index])) {
            productos[index].cantidad++
        } else {
            productos[index].cantidad++
            carrito.push(productos[index]);
        }

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
            <div class="productoCargado">
                <p>${producto.nombre} - $${producto.precio} - ${producto.cantidad}</p>
                <button type="button" class="btn btn-link" value="${producto.nombre}">Eliminar</button>
            </div>    
            `;
        });

        // Añadir eventos de eliminación
        let botones_eliminar = document.querySelectorAll('.btn.btn-link')
        botones_eliminar.forEach(botonEliminar => {
            botonEliminar.addEventListener('click', () => {


                // disminuir la cantidad del producto que cargue en carrito
                let productoEliminar = carrito.find(produc => produc.nombre === botonEliminar.value);
                let indice = carrito.indexOf(productoEliminar);

                // intento que disminulla el contador de cantidad (T_T)
                if (productoEliminar.cantidad <= 1) {
                    carrito.splice(indice, 1);
                    cantidad--
                }

                carrito = carrito.filter((productos) => productos.nombre != botonEliminar.value);
                actualizarCarrito();
                guardarCarrito()

            })
        })    
        

        // Mostrar el total
        totalCarrito.innerHTML = `Total: $${total}`;
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


// *TOASTIFI* //
let botonAgregarCarrito = document.querySelectorAll('.btn.btn-success');
botonAgregarCarrito.forEach((button) => {
    button.addEventListener('click', () => {

        Toastify({
            text: "Producto añadido al carrito",
            gravity: "bottom",
            duration: 1500,
            close: true,
            style: {
                background: "red",
            }
            
        }).showToast();
    });
})





