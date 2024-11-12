const productos = [
 {
    id:"ejemplo-1",
    titulo: "ejemplo1",
    imagen: "js/insert.jpg",
    categoria: {
        nombre:"abrigo ",
        id:"abrigos"
    },
    precio: 1000

    },
    {
        id:"ejemplo-2",
        titulo: "ejemplo2",
        imagen: "js/insert.jpg",
        categoria: {
            nombre:"abrigo ",
            id:"abrigos"
        },
        precio: 1000
    
        },
        {
            id:"ejemplo-3",
            titulo: "ejemplo3",
            imagen: "js/insert.jpg",
            categoria: {
                nombre:"abrigo ",
                id:"abrigos"
            },
            precio: 1000
        
            },
            {
                id:"ejemplo-4",
                titulo: "ejemplo4",
                imagen: "js/insert.jpg",
                categoria: {
                    nombre:"abrigo ",
                    id:"abrigos"
                },
                precio: 1000
            
                },
                {
                    id:"ejemplo-4",
                    titulo: "ejemplo4",
                    imagen: "js/insert.jpg",
                    categoria: {
                        nombre:"abrigo ",
                        id:"abrigos"
                    },
                    precio: 1000

    },
    {
        id:"ejemplo-1",
        titulo: "ejemplo1",
        imagen: "js/insert.jpg",
        categoria: {
            nombre:"camisas ",
            id:"camisas"
        },
        precio: 1000
    
        },
        {
            id:"ejemplo-2",
            titulo: "ejemplo2",
            imagen: "js/insert.jpg",
            categoria: {
                nombre:"camisas ",
                id:"camisas"
            },
            precio: 1000
        
            },
            {
                id:"ejemplo-2",
                titulo: "ejemplo2",
                imagen: "js/insert.jpg",
                categoria: {
                    nombre:"camisas ",
                    id:"camisas"
                },
                precio: 1000
            
                },
                {
                    id:"ejemplo-3",
                    titulo: "ejemplo3",
                    imagen: "js/insert.jpg",
                    categoria: {
                        nombre:"camisas ",
                        id:"camisas"
                    },
                    precio: 1000
                
                    },
                    {
                        id:"ejemplo-4",
                        titulo: "ejemplo4",
                        imagen: "js/insert.jpg",
                        categoria: {
                            nombre:"camisas ",
                            id:"camisas"
                        },
                        precio: 1000
                    
                                        },
               {
                   id:"ejemplo-1",
                   titulo: "ejemplo1",
                   imagen: "js/insert.jpg",
                   categoria: {
                       nombre:"camisas ",
                       id:"camisas"
                   },
                   precio: 1000
               
                   },
          {
              id:"ejemplo-2",
              titulo: "ejemplo2",
              imagen: "js/insert.jpg",
              categoria: {
                  nombre:"pantalones ",
                  id:"pantalones"
              },
              precio: 1000
          
              },
              {
                  id:"ejemplo-3",
                  titulo: "ejemplo3",
                  imagen: "js/insert.jpg",
                  categoria: {
                      nombre:"pantalones ",
                      id:"pantalones"
                  },
                  precio: 1000
              
                  },
                  {
                      id:"ejemplo-4",
                      titulo: "ejemplo4",
                      imagen: "js/insert.jpg",
                      categoria: {
                          nombre:"pantalones ",
                          id:"pantalones"
                      },
                      precio: 1000
                  
                      },
                      {
                          id:"ejemplo-5",
                          titulo: "ejemplo5",
                          imagen: "js/insert.jpg",
                          categoria: {
                              nombre:"pantalones ",
                              id:"pantalones"
                          },
                          precio: 1000
                      
                          },
                          {
                              id:"ejemplo-6",
                              titulo: "ejemplo6",
                              imagen: "js/insert.jpg",
                              categoria: {
                                  nombre:"pantalones ",
                                  id:"pantalones"
                              },
                              precio: 1000
                          
                              }

];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelectorAll("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function cargarProductos(productosElegidos){

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <div class="producto">
                        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="producto-detalles">
                            <h3 class="producto-titulo" >${producto.titulo}</h3>
                            <p class="producto-precio">${producto.precio}</p>
  
                           
                        </div>
                    </div>
        
        
        `; //<button class="producto-agregar" id="${producto.id}"> Agrega</button>
        
        contenedorProductos.append(div);



    })

    actualizarBotonesAgregar();
 

} 

cargarProductos(productos);

//FUNCION BOTONES CATEGORIAS

botonesCategorias.forEach(boton => {
    boton.addEventListener("click" , (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        
        e.currentTarget.classList.add("active");

        
      if (e.currentTarget.id !="Todos")   { 
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
        console.log(productoCategoria);

        const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
        cargarProductos(productosBoton);
     } else{
        tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos);
        }
      


    })


});

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


