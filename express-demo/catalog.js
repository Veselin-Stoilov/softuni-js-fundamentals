let {getAll, getById} = require('./model')


function getCatalog(req, res) {
    let products = getAll();

    let all_products = Object.entries(products).map(([id, p]) => `<li><a href= "/catalog/${id}">${p.name}</a></li>`).join('');

    res.send(`
    <h1>Catalog</h1>
    <a href= "/">Home</a>
    <a href= "/about">About</a>

    <ul>
        ${all_products}   
    </ul>
    `);
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