const fs = require("fs/promises");

fs.readFile("./db/contacts.json");

const contactsPath = "./db/contacts.json";

async function listContacts() {
  const data = await fs.readFile(contactsPath);
  console.log(data.toString());
  // ...твій код. Повертає масив контактів.
}

listContacts();

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
