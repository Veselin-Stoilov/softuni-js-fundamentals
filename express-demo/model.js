let fs = require('fs');

let products = JSON.parse(fs.readFileSync('./data.json', 'utf-8'))


function getAll() {
    return products;
}

function getById(id) {
    return products[id];
}
module.exports = {
    getAll,
    getById,
};