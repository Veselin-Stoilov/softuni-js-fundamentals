/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const Contact = require('./models/Contact');

const fs = require('fs');

// let contacts = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

let contacts = [
	new Contact('Peter', '+4541248986'),
	new Contact('John', '+4544247878'),
	new Contact('Mary', '+4520201234'),

];

function getContacts() {
	return contacts
}

function addContact(name, phone) {
	let contact = new Contact(name, phone);
	contacts.push(contact);
}

module.exports = {
	getContacts,
	addContact
};