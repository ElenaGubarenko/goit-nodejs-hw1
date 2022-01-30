const Product = require("../utils/productSchema")

const listProducts = async (req, res, next) => {
  try {
    const selectProduct = await Product.find({})
    console.log(`selectProduct: ${selectProduct}`)
    res.json({
      status: "success",
      code: 200,
      data: {
        result: selectProduct,
      },
    })
  } catch (error) {
    if (error.code === 11000) {
      error.code = 400
    }
    next(error)
  }
}

// const getContactById = async (req, res, next) => {
//   const { contactId } = req.params

//   try {
//     const selectContact = await Contact.find({ _id: contactId })
//     console.log(`selectContact: ${selectContact}`)
//     res.json({
//       status: "success",
//       code: 200,
//       data: {
//         result: selectContact,
//       },
//     })
//   } catch (error) {
//     if (error.code === 11000) {
//       error.code = 400
//     }
//     next(error)
//   }
// }

const removeProduct = async (req, res, next) => {
  const { id } = req.params

  try {
    const selectProduct = await Product.findByIdAndRemove({ _id: id })
    console.log(`selectProduct: ${selectProduct}`)
    res.status(200).json({
      status: "success",
      code: "200",
      message: "Removed",
      data: {
        removedProduct: selectProduct,
      },
    })
  } catch (error) {
    if (error.code === 11000) {
      error.code = 400
    }
    next(error)
  }
}

const addProduct = async (req, res, next) => {
  const { body } = req

  try {
    const newProduct = await Product.create(body)
    console.log(`newProduct: ${newProduct}`)

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newProduct,
      },
    })
  } catch (error) {
    if (error.code === 11000) {
      error.code = 400
    }
    next(error)
  }
}

const updateProduct = async (req, res, next) => {
  const { id } = req.params
  const { body } = req

  try {
    const newProduct = await Product.findByIdAndUpdate(id, body)
    console.log(`newProduct: ${newProduct}`)

    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        result: newProduct,
      },
    })
  } catch (error) {
    if (error.code === 11000) {
      error.code = 400
    }
    next(error)
  }
}

// const updateFavorite = async (req, res, next) => {
//    const { contactId } = req.params
//   const { body } = req

//   try {
//     const newContact = await Contact.findByIdAndUpdate(contactId, body)
//     console.log(`newContact: ${newContact}`)

//     if(!body){
//       res.status(400).json({
//       status: "error",
//       code: 400,
//      message:  "missing field favorite"
//     })
//     }

//     res.status(201).json({
//       status: "success",
//       code: 201,
//       data: {
//         result: newContact,
//       },
//     })
//   } catch (error) {
//     if (error.code === 11000) {
//       error.code = 400
//     }
//     next(error)
//   }
//  }

module.exports = {
  listProducts,
    removeProduct,
  addProduct,
  updateProduct,
  
}
