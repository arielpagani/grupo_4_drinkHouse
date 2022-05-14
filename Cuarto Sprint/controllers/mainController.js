//Requiero el modulo path y declaro una variable para traer los articulos.
//instalo el metodo override con "npm install method-override", lo requiero y utilizo con app.use.
//Requiero el modulo fs para traer el paquete file system.

const fs = require("fs");
const path = require("path");

const home = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));

    //Productos random de busquedas Destacadas
    //Acá declaro cuantos productos son en total del catalogo
    const cantidadDeProductosFiltrados= articulos.length
    // constante declarada donde se guardan los productos
    const productosAleatorios=[]
    // cuantos productos quiero mostrar
    const cantidadDeProductos=4
    // convierto en numero entero la cantidad de productos
    const cantidadDeProductosAMostrar= parseInt(cantidadDeProductosFiltrados)

    // funcion que genera numeros de forma aleatoria de la cantidad de productos y devuelve 4
    function llenarAleatorios(a){
        var v=Math.floor(Math.random()*cantidadDeProductosAMostrar);
        if (!a.some(function(e){return e == v})){
            a.push(v)
        }
    }
    while(productosAleatorios.length < cantidadDeProductos && cantidadDeProductos <= cantidadDeProductosAMostrar){
        llenarAleatorios(productosAleatorios)
    }

    // Esto hay que mejorarlo(funciona pero es horrible) 
    // aca le digo que de los 4 numeros aleatorios entre el 0 y la cantidad total de productos los busque entre todos los productos y los agregue a productosSimilaresAleatorios 
    const productosSimilaresAleatorios = []
    const push_1= productosSimilaresAleatorios.push(articulos[productosAleatorios[0]])
    const push_2= productosSimilaresAleatorios.push(articulos[productosAleatorios[1]])
    const push_3= productosSimilaresAleatorios.push(articulos[productosAleatorios[2]])
    const push_4= productosSimilaresAleatorios.push(articulos[productosAleatorios[3]])

    // le pido que me renderice home con productosSimilaresAleatorios
    res.render ("home", {arreglo:productosSimilaresAleatorios});
};

const login = (req, res) => {
    res.render ("login")
};

const categoria = (req,res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    const categoria = req.params.categoria;
    if (categoria != 'catalogo') {
        const filtrado = articulos.filter(productos => productos.categoria === categoria);
        res.render("categoria", {arreglo:filtrado});
    }
    res.render("categoria", {arreglo:articulos});
}

const register = (req, res) => {
    res.render ("register");
}

const carritoCompras = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    let compras = articulos [2];
    res.render ("carritoCompras", {arreglo:compras});
}

const administrador = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    res.render ("administrador", {arreglo:articulos});
}

const createProducts = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    res.render ("createProducts");
}

const save = (req, res) =>{
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    let ultimoArticulo = articulos.pop();
    articulos.push(ultimoArticulo);
    let nuevoArticulo = {
        categoria: req.body.categoria, 
        marca: req.body.marca,  
        codigo:parseInt(ultimoArticulo.codigo)+1, 
        precio:parseInt(req.body.precio), 
        descuento:parseInt(req.body.descuento), 
        descripcion:req.body.descripcion, 
        img: "/Images/ArticulosCreados/"+req.file.filename,
        stock:parseInt(req.body.stock),
    }
    articulos.push(nuevoArticulo);
    let nuevoProductoGuardar = JSON.stringify(articulos, null, 2);
    fs.writeFileSync(path.resolve(__dirname, "../database/Productos/articulos.json"), nuevoProductoGuardar);
    res.redirect("administrador")
}

const productDetail = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    const id = req.params.codigo;
    const converted_id = parseInt(id);    
    const productoDetallado = articulos.find(product => product.codigo == converted_id);
    const productosSimilares = articulos.filter(product => ((product.categoria == productoDetallado.categoria) && (product.codigo != converted_id)));

    //Productos random de busquedas similares (la explicacion esta en el controlador home)
    const cantidadDeProductosFiltrados= productosSimilares.length
    const productosAleatorios=[]
    const cantidadDeProductos=3
    const cantidadDeProductosAMostrar= parseInt(cantidadDeProductosFiltrados)

    function llenarAleatorios(a){
        var v=Math.floor(Math.random()*cantidadDeProductosAMostrar);
        if (!a.some(function(e){return e == v})){
            a.push(v)
        }
    }
    while(productosAleatorios.length < cantidadDeProductos && cantidadDeProductos <= cantidadDeProductosAMostrar){
        llenarAleatorios(productosAleatorios)
    }

    // Esto hay que mejorarlo(funciona pero es horrible)
    const productosSimilaresAleatorios = []
    const push_1= productosSimilaresAleatorios.push(productosSimilares[productosAleatorios[0]])
    const push_2= productosSimilaresAleatorios.push(productosSimilares[productosAleatorios[1]])
    const push_3= productosSimilaresAleatorios.push(productosSimilares[productosAleatorios[2]])
    
    res.render("productDetail", {arreglo:productoDetallado, similares:productosSimilaresAleatorios});
}

const editProducts = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    const id = req.params.codigo;
    const converted_id = parseInt(id);
    const productoSeleccionado = articulos.find(product => product.codigo == converted_id);
    res.render ("editProducts", {articulo : productoSeleccionado});
}

const putProducts = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
        
        const id = req.params.codigo;
        const converted_id = parseInt(id);
        let productoUpdate = articulos.map(producto =>{
            if(producto.codigo == converted_id){
                const imagen = req.file != undefined? "/Images/ArticulosCreados/"+ req.file.filename:producto.img;
                producto = {
                categoria: req.body.categoria, 
                marca: req.body.marca,  
                codigo:parseInt(producto.codigo), 
                precio:parseInt(req.body.precio), 
                descuento:parseInt(req.body.descuento), 
                descripcion:req.body.descripcion, 
                stock:parseInt(req.body.stock),
                }
                producto.img = imagen;
                    return producto;
            }
            return producto;
        })
        console.log(productoUpdate)
        const productoActualizar = JSON.stringify(productoUpdate,null,2);
        console.log(productoActualizar)
        fs.writeFileSync(path.resolve(__dirname,"../database/Productos/articulos.json"),productoActualizar);

    res.redirect ("/views/administrador")
}

const eliminarProduct = (req, res) => {
    let articulos = JSON.parse(fs.readFileSync(path.resolve(__dirname, "../database/Productos/articulos.json")));
    const productDeleteId = req.params.codigo;
    const converted_id = parseInt(productDeleteId);
    const productsFinal = articulos.filter(articulo => articulo.codigo != converted_id);
    let productsSave = JSON.stringify(productsFinal,null,2);
    fs.writeFileSync(path.resolve(__dirname,"../database/Productos/articulos.json"),productsSave);
    res.redirect ("/views/administrador");
};

const mainController = {
    home,
    login,
    carritoCompras,
    productDetail,
    register, 
    createProducts,
    save,
    administrador,
    categoria,
    editProducts,
    putProducts,
    eliminarProduct,
};

module.exports = mainController