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
    contenedorDeTargetas.innerHTML = '';
    mostrarProductos(productosFiltrados);
});

function mostrarProductos(productos) {
    // muestro solo las card de los productos filtrados
    productos.forEach((producto) => {
        contenedorDeTargetas.innerHTML += `
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






















// *PRIMEROS INTENTOS*

// const selectElement = document.querySelector(".ice-cream");
// const result = document.querySelector(".result");

// selectElement.addEventListener("change", (event) => {
//   result.textContent = `You like ${event.target.value}`;
// });


// if (condition) {
//     let verduras = productos.filter((producto) => producto.tipo == "verdura")
//     verduras.forEach(producto => console.log(producto.nombre));
//     console.log(verduras)
// } else {
//     let frutas = productos.filter((producto) => producto.tipo == "fruta")
//     frutas.forEach(producto => console.log(producto.nombre));
//     console.log(frutas)
// }