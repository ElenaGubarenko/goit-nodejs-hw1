const { listProducts, removeProduct, addProduct } = require("./products")

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

function invokeAction({ action, id,product}) {
  switch (action) {
    case "list":
      listProducts()
      break
    
    case "add":
      addProduct(product)
      break

    case "remove":
      removeProduct(id)
      break

    default:
      console.warn("\x1B[31m Unknown action type!")
  }
}

invokeAction(argv)
