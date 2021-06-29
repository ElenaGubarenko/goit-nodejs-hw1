const { getData, updateContacts, contactsPath, listContacts, getContactById, removeContact, addContact } = require("./contacts")

const { Command } = require("commander")
const program = new Command()
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone")

program.parse(process.argv)

const argv = program.opts()

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts()
      break

    case "get":
      getContactById(id)
      break

    case "add":
      addContact(name, email, phone)
      break

    case "remove":
      removeContact(id)
      break

    default:
      console.warn("\x1B[31m Unknown action type!")
  }
}

invokeAction(argv)

// getData()
// listContacts()
// getContactById(5)
// removeContact(5)
// addContact("Cyrus Jackson", "nibh@semsempererat.com", "(501) 472-5218")

// {
//   id: 5,
//   name: 'Cyrus Jackson',
//   email: 'nibh@semsempererat.com',
//   phone: '(501) 472-5218'
// }

// listContacts(contactsPath)
// console.log(contactsPath)
