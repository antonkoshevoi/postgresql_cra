const DB = require("./database");

class ProductService {

    async getProducts() {
        const allProducts = await this.users.findAll()
        console.log({allProducts});

        return { products: allProducts };
    }
}

module.exports = ProductService;
