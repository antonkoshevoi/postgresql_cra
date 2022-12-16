const ProductService = require("../services/product.services");

class productController {
    productService = new ProductService()

    async getProducts(req, res, next) {
    
        try {
            const { products } = await this.productService.getProducts();
            res.status(200).json({ products });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = productController;
