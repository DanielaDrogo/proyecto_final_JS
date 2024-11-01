// ~PRODUCTOS~ // 

fetch('data.json')
    .then((respuesta) => respuesta.json())
    .then((datos) => {
        let contenedorDeTarjetas = document.querySelector('.contenedor-card2');
        datos.forEach((producto, index) => {
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
                const producto = datos[index];

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
    })
    .catch((error) => console.log(error));

    