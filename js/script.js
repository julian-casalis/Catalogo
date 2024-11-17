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