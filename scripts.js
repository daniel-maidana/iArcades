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
        imagen: "imagenes/arcade5.png",
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
            
            <input id="boton-agregar-carrito" type="button" value="Agregar al carrito">

        </div>  
`;
}



const contenedorCursos = document.getElementById("contenedorCursos");
contenedorCursos.innerHTML = cursosHTML;
