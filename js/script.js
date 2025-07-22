const productos = [
    {
       id:"ejemplo-1",
       titulo: "ejemplo1",
       imagen: "js/bagl.jpg",
       categoria: {
           nombre:"galletitas",
           id:"galletitas"
       },
       precio: 1000
   
       },
       {
           id:"ejemplo-2",
           titulo: "ejemplo2",
           imagen: "js/don.jpg",
           categoria: {
               nombre:"galletitas",
               id:"galletitas"
           },
           precio: 1000
       
           },
           {
               id:"ejemplo-3",
               titulo: "ejemplo3",
               imagen: "js/pitu.jpg",
               categoria: {
                   nombre:"galletitas",
                   id:"galletitas"
               },
               precio: 1000
           
               },
               {
                   id:"ejemplo-4",
                   titulo: "ejemplo4",
                   imagen: "js/bagl.jpg",
                   categoria: {
                       nombre:"galletitas",
                       id:"galletitas"
                   },
                   precio: 1000
               
                   },
                   {
                       id:"ejemplo-4",
                       titulo: "ejemplo4",
                       imagen: "js/bagl.jpg",
                       categoria: {
                           nombre:"galletitas",
                           id:"galletitas"
                       },
                       precio: 1000
   
       },
       {
           id:"ejemplo-1",
           titulo: "ejemplo1",
           imagen: "js/gomitas.jpg",
           categoria: {
               nombre:"camisas ",
               id:"Caramelos"
           },
           precio: 1000
       
           },
           {
               id:"ejemplo-2",
               titulo: "ejemplo2",
               imagen: "js/menta.jpg",
               categoria: {
                   nombre:"Caramelos ",
                   id:"Caramelos"
               },
               precio: 1000
           
               },
               {
                   id:"ejemplo-2",
                   titulo: "ejemplo2",
                   imagen: "js/misky.jpg",
                   categoria: {
                       nombre:"Caramelos ",
                       id:"Caramelos"
                   },
                   precio: 1000
               
                   },
                   {
                       id:"ejemplo-3",
                       titulo: "ejemplo3",
                       imagen: "js/gomitas.jpg",
                       categoria: {
                           nombre:"Caramelos ",
                           id:"Caramelos"
                       },
                       precio: 1000
                   
                       },
                       {
                           id:"ejemplo-4",
                           titulo: "ejemplo4",
                           imagen: "js/gomitas.jpg",
                           categoria: {
                               nombre:"Caramelos ",
                               id:"Caramelos"
                           },
                           precio: 1000
                       
                                           },
                  {
                      id:"ejemplo-1",
                      titulo: "ejemplo1",
                      imagen: "js/gomitas.jpg",
                      categoria: {
                          nombre:"Caramelos ",
                          id:"Caramelos"
                      },
                      precio: 1000
                  
                      },
             {
                 id:"ejemplo-2",
                 titulo: "ejemplo2",
                 imagen: "js/pico.jpg",
                 categoria: {
                     nombre:"chupetines ",
                     id:"chupetines"
                 },
                 precio: 1000
             
                 },
                 {
                     id:"ejemplo-3",
                     titulo: "ejemplo3",
                     imagen: "js/bola.jpg",
                     categoria: {
                         nombre:"chupetines ",
                         id:"chupetines"
                     },
                     precio: 1000
                 
                     },
                     {
                         id:"ejemplo-4",
                         titulo: "ejemplo4",
                         imagen: "js/pico.jpg",
                         categoria: {
                             nombre:"chupetines ",
                             id:"chupetines"
                         },
                         precio: 1000
                     
                         },
                         {
                             id:"ejemplo-5",
                             titulo: "ejemplo5",
                             imagen: "js/pico.jpg",
                             categoria: {
                                 nombre:"chupetines ",
                                 id:"chupetines"
                             },
                             precio: 1000
                         
                             },
                             {
                                 id:"ejemplo-6",
                                 titulo: "ejemplo6",
                                 imagen: "js/pico.jpg",
                                 categoria: {
                                     nombre:"chupetines ",
                                     id:"chupetines"
                                 },
                                 precio: 1000
                             
                                 }
   
   ];
   
   const contenedorProductos = document.querySelector("#contenedor-productos");
   const botonesCategorias = document.querySelectorAll(".boton-categoria");
   const tituloPrincipal = document.querySelectorAll("#titulo-principal");
   let botonesAgregar = document.querySelectorAll(".producto-agregar");
   const numerito = document.querySelector("#numerito");
      //FUNCION BOTONES CATEGORIAS
   
   botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        
        // Eliminar la clase 'active' de todos los botones
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        
        // Agregar la clase 'active' al botón clickeado
        e.currentTarget.classList.add("active");

        // Filtrar los productos por categoría
        if (e.currentTarget.id !== "Todos") {
            // Filtrar los productos según el ID de la categoría
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            tituloPrincipal.innerText = `Productos de ${e.currentTarget.innerText}`; // Cambiar título según la categoría
        } else {
            // Si se selecciona "Todos", mostrar todos los productos
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

const campoBusqueda = document.querySelector("#buscar");
const resultados = document.querySelector("#results");

// Función de búsqueda
function buscar() {
    const textoBusqueda = campoBusqueda.value.toLowerCase(); // Obtener el valor del campo de búsqueda y convertir a minúsculas

    // Filtrar productos que coincidan con el texto ingresado
    const productosFiltrados = productos.filter(producto => {
        return producto.titulo.toLowerCase().includes(textoBusqueda);
    });

    // Mostrar los resultados
    mostrarResultados(productosFiltrados);

    // Si no se encuentran productos, mostrar un mensaje
    if (productosFiltrados.length === 0) {
        resultados.innerHTML = "<li>No se encontraron productos.</li>";
    }
}

// Función para mostrar los resultados en el HTML
function mostrarResultados(productosFiltrados) {
    // Limpiar los resultados anteriores
    resultados.innerHTML = "";

    // Recorrer los productos filtrados y agregar un elemento de lista por cada uno
    productosFiltrados.forEach(producto => {
        const li = document.createElement("li");
        li.classList.add("producto-item");
        li.innerHTML = `
            <div class="producto">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                </div>
            </div>
        `;
        resultados.appendChild(li); // Agregar el li al listado de resultados
     
    });
}
// Opcional: también podemos permitir que el usuario busque presionando "Enter"
campoBusqueda.addEventListener("input", () => {
    const textoBusqueda = campoBusqueda.value.toLowerCase();

    // Si el campo de búsqueda está vacío, mostrar todos los productos
    if (textoBusqueda === "") {
        resultados.innerHTML = "<li>Escribe algo para buscar...</li>";
    } else {
        const productosFiltrados = productos.filter(producto => {
            return producto.titulo.toLowerCase().includes(textoBusqueda);
        });

        // Mostrar los productos filtrados mientras escribes
        mostrarResultados(productosFiltrados);
    }
});
   function cargarProductos(productosElegidos){
       contenedorProductos.innerHTML ="";
   
       productosElegidos.forEach(producto => {
           const div = document.createElement("div");
           div.classList.add("producto");
           div.innerHTML = `
           <div class="producto">
               <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
               <div class="producto-detalles">
                   <h3 class="producto-titulo">${producto.titulo}</h3>
                   <p class="producto-precio">${producto.precio}</p>
               </div>
           </div>
       `; //<button class="producto-agregar" id="${producto.id}"> Agrega</button>
           
           contenedorProductos.append(div);
   
       });
   
       actualizarBotonesAgregar();
    
   
   } 
   
   cargarProductos(productos);
   

   
   function actualizarBotonesAgregar() {
       botonesAgregar = document.querySelectorAll(".producto-agregar");
   
       botonesAgregar.forEach(boton => {
           boton-addEventListener("click", agregarAlCarrito);
   
       });
   
       
   }
   
   const productosEnCarrito = [];
   
   function agregarAlCarrito(e){
   
       const idBoton = e.currentTarget.id;
       const productoAgregado =  productos.find(producto => producto.id === idBoton);
   
       if(productosEnCarrito.some(producto => producto.id === idBoton)) {
           const index = productosEnCarrito.findIndex(producto =>producto.id === idBoton);
           productosEnCarrito[index].cantidad++;
       }else {
           productoAgregado.cantidad = 1;
           productosEnCarrito.push(productoAgregado);
       }
   
    actualizarNumerito();
       
   
   }
   
   function actualizarNumerito(){
       let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.candidad ,0);
       numerito.innerText = nuevoNumerito;
   }




   document.addEventListener('keyup', e => {
    if(e.target.matches('#buscar')){
        productos.forEach(produc =>{
        })

    }
})