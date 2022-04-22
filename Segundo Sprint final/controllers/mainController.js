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
        marca: 'Rutini',
        descuento: '5% off',
        precio: '3200',
        img: '/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png'

    },

    {
        marca: 'Norton',
        descuento: '5% off',
        precio: '3200',
        img: '/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png'
    },

    {
        marca: 'Rutini',
        descuento: '5% off',
        precio: '3200',
        img: '/Images/[5004] NORTON SEXY FISH MALBEC 750ml.png'
    }
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

const register = (req, res) => {
    res.render ("register");
}

const mainController = {
    home,
    catalago,
    login,
    product,
    productDetail,
    register, 
};

module.exports = mainController