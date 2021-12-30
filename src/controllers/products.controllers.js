import Product from "../models/Product";

const Products = {
    createProduct: async(req, res) => {
        try {
            let product;
    
            product = new Product(req.body)
            await product.save()
            res.status(201).json(product)
            // console.log(product)
            
        } catch (error) {
            console.log(error)
        }
    },
    getProcuts: async(req, res) => {
        try {
            const product = await Product.find()
            res.status(200).json(product)
            
        } catch (error) {
            console.log(error)
        }

    },
    getOneProduct: async (req, res) => {
        try {
            const getOneProduct = await Product.findById(req.params.id)
    
            res.status(200).json(getOneProduct)
            
        } catch (error) {
            console.log(error)
        }
    },
    updateProduct: async (req, res) => {
        try {

            const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true})
            res.status(200).json(updateProduct)
            
        } catch (error) {
            console.log(error)
        }
    },
    deleteProduct: async (req, res) => {
        try {

            await Product.findByIdAndDelete(req.params.id)

            res.status(204).json()
            
        } catch (error) {
            console.log(error)
        }
    }
}

export default Products;