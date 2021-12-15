const Products = {
    createProduct = (req, res) => {
        res.json("Creating product");
    },
    getProcuts = (req, res) => {
        res.json("Getting products");
    },
    getOneProduct = (req, res) => {
        res.json("Getting one product");
    },
    updateProduct = (req, res) => {
        res.json("Updating product");
    },
    deleteProduct = (req, res) => {
        res.json("Deleting product");
    }
}

export default Products;