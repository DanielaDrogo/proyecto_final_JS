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

// mostrarProductos(productos); // Mostrar todos los productos al cargar la página

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










// if (condition) {
//     let verduras = productos.filter((producto) => producto.tipo == "verdura")
//     verduras.forEach(producto => console.log(producto.nombre));
//     console.log(verduras)
// } else {
//     let frutas = productos.filter((producto) => producto.tipo == "fruta")
//     frutas.forEach(producto => console.log(producto.nombre));
//     console.log(frutas)
// }




