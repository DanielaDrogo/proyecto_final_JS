// ~PRODUCTOS~ // 

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
        this.cantidad = 0
    }
}

// declaro mis praductos
let productos = [
    new Producto("Papa", 0, 100, "salta", true, 2, "papas.jpg"),
    new Producto("Banana", 1, 1000, "ecuador", false, 0, "bananas.jpg"),
    new Producto("Lechuga", 0, 200, "buenos aires", false, 3, "lechuga.jpg"),
    new Producto("Manzana", 1, 500, "rio negro", false, 0, "manzanas.jpg"),
    new Producto("Zapallo", 0, 800, "buenos aires", true, 1, "zapallos.jpg"),
    new Producto("Zanahoria", 0, 300, "buenos aires", false, 3, "zanahorias.jpg")
]

// Creo todas las targetas 
let contenedorDeTarjetas = document.querySelector(`.contenedor-card2`)
productos.forEach((producto) => {
    contenedorDeTarjetas.innerHTML += `
    <div class="contenedor-card2">
        <div class="card" style="width: 18rem;">
            <img src=" ./imagenes/${producto.imagen}" class="card-img-top" alt="imagen">
            <div class="card-body">
                <h5 class="card-title"> ${producto.nombre}</h5>
                <p class="card-text">$ ${producto.precio}</p>
                <a class="btn btn-success">Añadir al carrito 🛒</a>
            </div>
        </div>
    </div>
    `;
});











