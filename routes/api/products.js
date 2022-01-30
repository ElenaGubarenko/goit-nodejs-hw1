const express = require("express")
const router = express.Router()
const functions = require("../../model/index")

router.get("/", functions.listProducts)

// router.get("/:productId", functions.getContactById)

router.post("/", functions.addProduct)

router.delete("/:productId", functions.removeProduct)

router.patch("/:productId", functions.updateProduct)

// router.patch("/:contactId/favorite", functions.updateFavorite)

module.exports = router
