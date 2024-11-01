// ~SELECCIONADOR DE PRODUCTOS~ //

let contenedorDeTarjetas = document.querySelector(`.contenedor-card2`)

document.getElementById('filtroProductos').addEventListener('change', function () {
    fetch('data.json')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
            let filtro = this.value;
            let productosFiltrados = datos;
            if (filtro !== 'todo') {
                productosFiltrados = datos.filter(producto => producto.tipo === filtro);
            }

            contenedorDeTarjetas.innerHTML = '';
            mostrarProductos(productosFiltrados);
        })
        .catch((error) => console.log(error));

});

function mostrarProductos(productos) {
    let contenedorDeTarjetas = document.querySelector('.contenedor-card2');
    productos.forEach((producto, index) => {
        contenedorDeTarjetas.innerHTML += `
        <div class="contenedor-card2">
            <div class="card" style="width: 18rem;">
                <img src="./imagenes/${producto.imagen}" class="card-img-top" alt="imagen">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">$ ${producto.precio}</p>
                    <a class="btn btn-success" data-index="${index}">Añadir al carrito 🛒</a>
                </div>
            </div>
        </div>
        `;
    });

    document.querySelectorAll('.btn.btn-success').forEach((button) => {
        button.addEventListener('click', () => {
            const index = button.getAttribute('data-index'); 
            const producto = productos[index];

            const encontrado = carrito.find(item => item.nombre === producto.nombre);
            if (encontrado) {
                encontrado.cantidad++;
            } else {
                producto.cantidad = 1;
                carrito.push(producto);
            }
            actualizarCarrito();
            guardarCarrito();

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
    });
}


// ~BARRA DE BUSQUEDA~ //

let barraDeBusqueda = document.getElementById('BarraDeBusqueda');
barraDeBusqueda.addEventListener('input', function () {

    let busqueda = barraDeBusqueda.value.toLowerCase();
    let items = document.getElementsByClassName('contenedor-card2');

    Array.from(items).forEach(function (item) {
        let escribirProductoNombre = item.textContent.toLowerCase();

        if (escribirProductoNombre.includes(busqueda)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});









