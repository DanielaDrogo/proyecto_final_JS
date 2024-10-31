// ~SELECCIONADOR DE PRODUCTOS~ //

// Filtro de productos al cambiar la selección
document.getElementById('filtroProductos').addEventListener('change', function () {
    let filtro = this.value;
    console.log('Filtro seleccionado:', filtro);
    let productosFiltrados = productos;

    if (filtro !== 'todo') {
        productosFiltrados = productos.filter(producto => producto.tipo === filtro);
    }

    // Limpiar el contenedor antes de agregar las nuevas tarjetas
    contenedorDeTarjetas.innerHTML = '';
    mostrarProductos(productosFiltrados);
});

// muestro solo los productos filtrados
function mostrarProductos(productos) {
    // muestro solo las card de los productos filtrados
    productos.forEach((producto) => {
        contenedorDeTarjetas.innerHTML += `
        <div class="contenedor-card2">
            <div class="card" style="width: 18rem;">
                <img src=" ./imagenes/${producto.imagen}" class="card-img-top" alt="imagen">
                <div class="card-body">
                    <h5 class="card-title"> ${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <a href="#" class="btn btn-success">Añadir al carrito 🛒</a>
                </div>
            </div>
        </div>
        `;
    });
}



// *BARRA DE BUSQUEDA* // 

let barraDeBusqueda = document.getElementById('BarraDeBusqueda');
barraDeBusqueda.addEventListener('input', function() {

    let busqueda = barraDeBusqueda.value.toLowerCase();
    let items = document.getElementsByClassName('contenedor-card2');

    Array.from(items).forEach(function(item) {
        let escribirProductoNombre = item.textContent.toLowerCase();

       // muestra el producto solo cuando escrivo algo de lo contrario no hace nada 
        if (escribirProductoNombre.includes(busqueda)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});

// let buscarProducto = document.getElementById('botonBuscar').addEventListener('click', function() {
    
//     let busqueda = buscarProducto.value.toLowerCase();
//     let items = document.getElementsByClassName('contenedor-card2');

//     Array.from(items).forEach(function(item) {
//         let escribirProductoNombre = item.textContent.toLowerCase();

//         if (escribirProductoNombre.includes(busqueda)) {
//             item.style.display = '';
//         } else {
//             item.style.display = 'none';
//         }
//     });


// })








