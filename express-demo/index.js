let express = require('express');

let app = express();

app.get('/',(req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <a href= "/about">About</a>
    <a href= "/catalog">Catalog</a>
    <p>Welcome to our site</p>
    `);

});

app.get('/catalog', (req, res) => {
    res.send(`
    <h1>Catalog</h1>
    <a href= "/">Home</a>
    <a href= "/about">About</a>

    <ul>
        <li><a href= "/catalog/672045">Product S/N 672045</a>
    </ul>
    `);
})

app.get('/catalog/672045', (req, res) => {
    res.send(`
    <h1>Products Details</h1>
    <h2>Products S/N 672045</h2>
    <p>Product details</p>
    <a href= "/">Home</a>
    <a href= "/catalog">Catalog</a>
    <a href= "/about">About</a>
    `);
})

app.get('/about', (req, res) => {
    res.send(`
    <h1>About Us</h1>
    <a href= "/">Home</a>
    <a href= "/catalog">Catalog</a>
    <p>My demo web project</p>
    <p>App created using Node.js and Express</p>
    <p>Veselin Stoilov &copy; 2021</p>
    `);
})

app.listen(5000);