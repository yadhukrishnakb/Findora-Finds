const Product = require("../models/Product")

const getProducts = async (request, response) => {
    try {
        const products = await Product.find()
        if (products.length === 0) {
            return response.status(404).json({ message: "No Products Available!" })
        }

        let categories = []
        products.forEach(each => {
            if (!categories.includes(each.category)){
                categories.push(each.category)
            }
        })

        return response.status(200).json({ products, categories })
    } catch (err) {
        return response.status(500).json({ message: `Server Error: ${err.message}` })
    }
}

module.exports = { getProducts }