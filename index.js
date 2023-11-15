const { listContacts, getContactById, removeContact, addContact } = require("./contacts");
const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
	switch (action) {
		case "list":
			const contacts = listContacts();
			console.table(contacts);
			break;

		case "get":
			const contact = getContactById(id);
			if (contact) {
				console.log("Contact:", contact);
			} else {
				console.log("Contact with the id was not found");
			}
			break;

		case "add":
			addContact(name, email, phone);
			console.log("New contact added successfully");
			break;

		case "remove":
			const isContact = getContactById(id);
			if (isContact) {
				removeContact(id);
				console.log("Contact removed successfully");
			} else {
				console.log("Contact with the id was not found");
			}			
			break;

		default:
			console.warn("\x1B[31m Unknown action type!");
	}
}

invokeAction(argv);
