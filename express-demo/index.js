let express = require('express');
let {getCatalog, getDetails} = require('./catalog');

let app = express();

app.get('/',(req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <a href= "/about">About</a>
    <a href= "/catalog">Catalog</a>
    <p>Welcome to our site</p>
    `);

});

app.get('/catalog', getCatalog)


app.get('/catalog/:productID', getDetails)

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

app.get('*', (req, res) => {
    res.send(`
    <h1>Error 404 Not Found</h1>
    <p>The page you requested does not exist</p>
    
    `);
})

app.listen(5000);