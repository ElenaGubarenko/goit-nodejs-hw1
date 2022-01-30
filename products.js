const fs = require("fs").promises
const path = require("path")
const uniqid = require("uniqid")

const productsPath = path.resolve("./db/products.json")

function getData() {
  return fs
    .readFile(`${productsPath}`, "utf8")
    .then((answer) => {
      return JSON.parse(answer)
    })
    .catch((error) => console.log(error.message))
}

function updateProducts(updatedProducts) {
  const stringiftProducts = JSON.stringify(updatedProducts)
  return fs
    .writeFile(`${productsPath}`, stringiftProducts)
    .then(() => {
      console.log("updated")
    })
    .catch((error) => console.log(error.message))
}

function listProducts() {
  return getData()
    .then((answer) => console.table(answer))
    .catch((error) => console.log(error))
}

// function getProductById(contactId) {
//   getData()
//     .then((answer) => {
//       answer.find((contact) => {
//         if (contact.id === Number(contactId)) {
//           console.log(contact)
//         }
//       })
//     })
//     .catch((error) => {
//       console.log("no such contact")
//       console.log(error.message)
//     })
// }

function removeProduct(productId) {
  return getData()
    .then((answer) => {
      const filteredProducts = answer.filter((product) => {
        return product.id !== Number(productId)
      })
      console.log("removed")
      updateProducts(filteredProducts)
    })
    .catch((error) => console.log(error.message))
}

function addProduct(product) {
  return getData()
    .then((answer) => {
      const productsToUpdate = [...answer, product]
      updateProducts(productsToUpdate)
      console.log("added")
    })
    .catch((error) => console.log(error.message))
}

module.exports = {
  getData,
  updateProducts,
  productsPath,
  listProducts,
  removeProduct,
  addProduct,
}
