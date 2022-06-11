const articulo = [
    {
        marca: 'Rutini',
        descuento: '5% off',
        precio: '9999'
    },
    {
        marca: 'Rutini',
        descuento: '5% off',
        precio: '9999'
    },
    {
        marca: 'Rutini',
        descuento: '5% off',
        precio: '9999'
    }
]



const home = (req, res) => {
    res.render ("home");
};

const catalago = (req, res) => {
    res.render ("catalogo", {arreglo:articulo})
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