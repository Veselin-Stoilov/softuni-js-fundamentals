let express = require('express');

let app = express();

app.get('/',(req, res) => {
    res.send(`
    <h1>Home Page</h1>
    <a href= "/about">About</a>
    <p>Welcome to our site</p>
    `);

});

app.get('/about', (req, res) => {
    res.send(`
    <h1>About Us</h1>
    <a href= "/">Home</a>
    <p>My demo web project</p>
    <p>App created using Node.js and Express</p>
    <p>Veselin Stoilov &copy; 2021</p>
    `);
})

app.listen(5000);