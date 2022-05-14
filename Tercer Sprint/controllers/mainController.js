const carrito = [
{
    img: '/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png',
    marca: 'Rutini',
    precio: '3200',
    cantidad: '1',

}
]

const articulos = [

{
    categoria: 'Vinos', 
    marca: 'Norton',  
    codigo:'VN001', 
    precio:'700', 
    descuento:'5%', 
    descripcion:'VIno de cosecha tardía', 
    img:'/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png', 
    stock:'100',
},

{
    categoria: 'Vinos', 
    marca: 'Norton',  
    codigo:'VN001', 
    precio:'700', 
    descuento:'5%', 
    descripcion:'VIno de cosecha tardía', 
    img:'/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png', 
    stock:'100',
},

{
    categoria: 'Vinos', 
    marca: 'Norton',  
    codigo:'VN001', 
    precio:'700', 
    descuento:'5%', 
    descripcion:'VIno de cosecha tardía', 
    img:'/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png', 
    stock:'100',
},

{
    categoria: 'Vinos', 
    marca: 'Norton',  
    codigo:'VN001', 
    precio:'700', 
    descuento:'5%', 
    descripcion:'VIno de cosecha tardía', 
    img:'/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png', 
    stock:'100',
}

    // {
    //     marca: 'Rutini',
    //     descuento: '5% off',
    //     precio: '3200',
    //     img: '/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png'

    // },

    // {
    //     marca: 'Norton',
    //     descuento: '5% off',
    //     precio: '3200',
    //     img: '/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png'
    // },

    // {
    //     marca: 'Rutini',
    //     descuento: '5% off',
    //     precio: '3200',
    //     img: '/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png'
    // }
]

const home = (req, res) => {
    res.render ("home");
};

const catalago = (req, res) => {
    res.render ("catalogo",{arreglo:articulos})
};

const login = (req, res) => {
    res.render ("login")
};

const product = (req, res) => {
    res.render ("product");
};

const productDetail = (req, res) => {
    res.render ("productDetail");
};

const productDetailAdmin = (req, res) => {
    res.render ("productDetailAdmin");
};

const register = (req, res) => {
    res.render ("register");
}

const createProducts = (req, res) => {
    res.render ("createProducts");
}

const mainController = {
    home,
    catalago,
    login,
    product,
    productDetail,
    productDetailAdmin,
    register, 
    createProducts,
};

module.exports = mainController