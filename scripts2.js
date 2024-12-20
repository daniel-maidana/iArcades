const productos = [
    {
        nombre : "Arcade PacMan",
        descripcion : "PacMan",
        imagen: "imagenes/producto1.png",
        precio: 378000
    },
    {
        nombre : "Arcade Super Mario",
        descripcion : "Super Mario",
        imagen: "imagenes/producto2.png",
        precio: 378000
    },
    {
        nombre : "Arcade Mortal Kombat",
        descripcion : "Mortal Kombat",
        imagen: "imagenes/producto3.png",
        precio: 378000
    },
    {
        nombre : "Arcade Simpsons",
        descripcion : "Simspsons",
        imagen: "imagenes/arcade4.png",
        precio: 378000
    },
    {
        nombre : "Arcade Mario Bross",
        descripcion : "Mario Bross",
        imagen: "imagenes/arcade5.png",
        precio: 378000
    },  
    {
        nombre : "Arcade Fighter",
        descripcion : "Fighter plus",
        imagen: "imagenes/arcade6.png",
        precio: 378000
    },  
    {
        nombre : "Arcade Street fighter",
        descripcion : "Street fighter",
        imagen: "imagenes/arcade7.png",
        precio: 378000
    },  
    {
        nombre : "Arcade Duff",
        descripcion : "Duff",
        imagen: "imagenes/arcade8.png",
        precio: 378000
    },  

]

let cursosHTML = "";
for(let indice = 0; indice < productos.length; indice++){
    cursosHTML += `
     <div class="tarjeta">
            <img src=${productos[indice].imagen}>
            <h2>${productos[indice].nombre}</h2>
            <h3>Precio: $${productos[3].precio}</h3>
            <p>${productos[indice].descripcion}</p>
            
            <input class="boton-agregar-carrito" type="button" value="Agregar al carrito">

        </div>  
`;
}



const contenedorCursos = document.getElementById("contenedorCursos");
contenedorCursos.innerHTML = cursosHTML;


//agregar un listeners a los botones de los productos
//Guardar en variables los elementoshtml que vamos a modificar
const botonesAgregar = document.querySelectorAll(".boton-agregar-carrito");

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p");

const mensajePagarCarrito = document.getElementById("mensajeCarrito");  

let totalAPagar = 0;

//agregamos al listener cada boton 
for(let indice = 0; indice < botonesAgregar.length; indice++){

    function agregarElemCarrito(){
        const  elementoLi = document.createElement("li");
        elementoLi.innerText = `Arcade ${productos[indice].nombre} $${productos[indice].precio} `;

        listaCarrito.appendChild(elementoLi);

        totalAPagar += productos[indice].precio;

        totalCarrito.innerText = "Total a pagar: $" + totalAPagar;

        mensajePagarCarrito.innerText = "";

    }
    botonesAgregar[indice].addEventListener("click", agregarElemCarrito);
}

//agregar listener al boton agregar 

const botonBorrar = document.querySelector("#boton-borrar");



function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML = "Total a pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = "";             
}


botonBorrar.addEventListener("click", borrarCarrito);

//agregar lisetner al boton pagar
const botonPagar = document.querySelector("#boton-pagar");


function irAPagar(){
    
    if(listaCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No seleccionaste ningun producto";     
    }else{
        window.location.href = "./pagos.html"
    }
    
}

botonPagar.addEventListener("click", irAPagar);