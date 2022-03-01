import '../scss/styles.scss';

document.addEventListener('DOMContentLoaded', () => {
    const addProduct = require('./modules/addProduct'),
            products = require('./modules/products');

    addProduct();
    products();
})