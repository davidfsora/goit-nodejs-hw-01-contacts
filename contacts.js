const fs = require("fs");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

function listContacts() {
	const data = fs.readFileSync(contactsPath, "utf-8");
	return JSON.parse(data);
}

function getContactById(contactId) {
	const contacts = listContacts();
	return contacts.find((contact) => contact.id === contactId);
}

function removeContact(contactId) {
	const contacts = listContacts();
	const updatedContacts = contacts.filter((contact) => contact.id !== contactId);
	fs.writeFileSync(contactsPath, JSON.stringify(updatedContacts, null, 2));
}

function addContact(name, email, phone) {
	const contacts = listContacts();
	const newContact = { id: '' + (contacts.length + 1), name, email, phone };
	contacts.push(newContact);
	fs.writeFileSync(contactsPath, JSON.stringify(contacts, null, 2));
}

module.exports = { listContacts, getContactById, removeContact, addContact };
