let {getAll, getById} = require('./model')


function getCatalog(req, res) {
    let products = getAll();

    let viewModel = Object.entries(products).map(([id, p]) => ({id, name: p.name}));

    res.render('catalog', {layout: false, products: viewModel})
}



function getDetails(req, res) {
    let id = req.params.productID;
    let product = getById(id);

    res.send(`
    <h1>Products Details</h1>
    <h2>${product.name}</h2>
    <p>Price: ${product.price}</p>
    <p>In Stock: ${product.qty}</p>
    <a href= "/">Home</a>
    <a href= "/catalog">Catalog</a>
    <a href= "/about">About</a>
    `);
}

module.exports = {
    getCatalog,
    getDetails,
}