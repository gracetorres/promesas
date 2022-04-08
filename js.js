// function probandoPromesa() {
//     return new Promise((resolve, reject) =>{
//         const suma = 1 + 5;
//         if (suma > 4) {
//             resolve(suma)
//         } else{
//             reject(suma);
//         }
//     });
// } 

// probandoPromesa()
// .then((res) => console.log('resolve', res))
// .catch((err) => console.log('reject', err))


// const promesa = new Promise((resolve, reject) =>{
//     const suma = 1 + 5;
//     if (suma > 4) {
//         resolve(suma)
//     } else{
//         reject(suma);
//     }
// });

// // promesa.then().catch()


// async function probando(){
//     const obtener = await promesa;
//     console.log(obtener)
// }


// probando()




// function obtenerPeliculas() {
//     const url ="http://localhost:3000/api/movies";

// fetch(url,{
//     method: "GET"
// })
// .then((res) => res.json())
// .then((res) => console.log(res))
// }


// obtenerPeliculasAsync();


// async function obtenerPeliculasAsync() {
//     const url ="http://localhost:3000/api/movies";
//     const getPelis = await fetch(url,{ method: "GET" });
//     const convertirJSON = await getPelis.json();

//     console.log(convertirJSON)
// }



// function funcionesIniciales() {

//     obtenerTipoDocumento() // 6s
//     obtenerMetodoDePAgo() // 10s
//     obtenerGeneros() // 12s 

//     // tiempo final = 28s

//     // asyncrono las funciones se ejecutan al mismo tiempo

//     // tiempo final = 12s

//     Promise.all(
//         obtenerTipoDocumento(),
//         obtenerMetodoDePAgo(),
//         obtenerGeneros(),
//     ).then((res)=> res.json)
//     .then


// }

// function obtenerTipoDocumento() {
    
// }

// function obtenerMetodoDePAgo() {
    
// }

// function obtenerGeneros() {
    
// }

async function obtenerProductos(){
    const Productos = document.getElementById("Productos");
    let html = "";
    const url = "http://localhost:3000/api/products"
    const producto = await fetch(url,{
        method:"GET",
    })
    const productoConvertido = await producto.json()

    for (let index = 0; index < productoConvertido.length; index++) {
       html+=
       ` <option value="">${productoConvertido[index].name}</option> `      
    }
    Productos.innerHTML = html;

    console.log(productoConvertido)
}

async function obtenerCategorias(){
    const categoriaPeliculas = document.getElementById("categoriaPeliculas");
    let c = "";
    const url = "http://localhost:3000/api/categories"
    const categ = await fetch(url,{
        method:"GET",
    })
    const categoriaConvertido = await categ.json()

    for (let index = 0; index < categoriaConvertido.length; index++) {
       c+=
       ` <option value="">${categoriaConvertido[index].name}</option> `      
    }
    categoriaPeliculas.innerHTML = c;

    console.log(categoriaConvertido)
}


async function obtenerPeliculas(){
    const peliculas = document.getElementById("peliculas");
    let p = "";
    const url = "http://localhost:3000/api/movies"
    const peli = await fetch(url,{
        method:"GET",
    })
    const peliculaaConvertido = await peli.json()

    for (let index = 0; index < peliculaaConvertido.length; index++) {
       p+=
       ` <option value="">${peliculaaConvertido[index].name}</option> `      
    }
    peliculas.innerHTML = p;

    console.log(peliculaaConvertido)
}



function funcionesIniciales(){
    // obtenerProductos()
    // obtenerCategorias()
    // obtenerPeliculas()

     Promise.all([
        obtenerProductosabc(),
        obtenerCategoriasaabc(),
        obtenerPeliculasabc()
    ])
    .then(async function (res)  {
        const productoss =await res[0].json();
        const categoriass = await res[1].json();
        const peliculas = await res[2].json();

        renderProductos(productoss);
        renderCategorias(categoriass);
        renderPeliculas(peliculas);

  
    })
 
}

function renderProductos(productList){
    const Productos = document.getElementById("Productos");
    let p = "";
    for (let index = 0; index < productList.length; index++) {
        p+=
        ` <option value="${productList[index].name}">${productList[index].name}</option> `      
     }
     Productos.innerHTML = p;
}

function renderCategorias(categoryList){
    const categoriaPeliculas = document.getElementById("categoriaPeliculas");
    let p = "";
    for (let index = 0; index < categoryList.length; index++) {
        p+=
        ` <option value="${categoryList[index].name}">${categoryList[index].name}</option> `      
     }
     categoriaPeliculas.innerHTML = p;
}

function renderPeliculas(MoviesList){
    const peliculas = document.getElementById("peliculas");
    let p = "";
    for (let index = 0; index < MoviesList.length; index++) {
        p+=
        ` <option value="${MoviesList[index].name}">${MoviesList[index].name}</option> `      
     }
     peliculas.innerHTML = p;
}




function obtenerProductosabc(){
    const url = "http://localhost:3000/api/products"
    return fetch(url,{method:"GET"})
}

function obtenerCategoriasaabc(){
    const url = "http://localhost:3000/api/categories"
    return fetch(url,{method:"GET"})
}

function obtenerPeliculasabc(){
    const url = "http://localhost:3000/api/movies"   
    return fetch(url,{ method:"GET"})
}