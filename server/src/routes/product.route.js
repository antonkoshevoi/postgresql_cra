const { Router } = require("express");
const ProductController = require("../controllers/product.controller");
const authMiddleware = require("../middleware/auth.middleware");

class ProductRoute {
    router = new Router();
    productController = new ProductController();

    constructor() {
        this.initializeRoutes();
    }

    initializeRoutes() {
        this.router.get("/api/products", authMiddleware, this.productController.getProducts)
    }
}

module.exports = ProductRoute;