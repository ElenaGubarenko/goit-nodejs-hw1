
const { Schema, model } = require("mongoose")

const productSchema = Schema(
  {
    product: {
      type: Object,
    
}

    
  },
  { versionKey: false, timestamps: true }
)

const Product = model("product", productSchema)

module.exports = Product
