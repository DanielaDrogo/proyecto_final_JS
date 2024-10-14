let tipos = ["verdura", "fruta"]
let maduraciones = ["verde", "maduro", "pasado", "fresco"]

// defino una class para agregar productos
class Producto {
    constructor(nombre, tipo, precio, procedencia, oferta, maduracion, imagen){
        this.nombre = nombre;
        this.tipo = tipos[tipo]
        this.precio = precio;
        this.procedencia = procedencia;
        this.oferta = oferta;
        this.maduracion = maduraciones[maduracion]
        this.imagen = imagen
    }
}

// declaro mis praductos
let productos = [
    new Producto("papa", 0, 100, "salta", true, 2, "papas.jpg"),
    new Producto("banana", 1, 1000, "ecuador", false, 0, "bananas.jpg"),
    new Producto("lechuga", 0, 200, "buenos aires", false, 3, "lechuga.jpg"),
    new Producto("manzana", 1, 500, "rio negro", false, 0, "manzanas.jpg"),
    new Producto("zapallo", 0, 800, "buenos aires", true, 1, "zapallos.jpg"),
    new Producto("zanahoria", 0, 300, "buenos aires", false, 3, "zanahorias.jpg")
]

// Creo todas las targetas 
let contenedorDeTargetas = document.querySelector(`.contenedor-card2`)
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



