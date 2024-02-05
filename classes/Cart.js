const Product = require("./Product.js");

class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }

    addProduct(item){
        this.products.push(item);
        this.total += item.price;
    }

    removeProduct(item){
        this.total -= this.products[item].price;
        this.products.splice(item, 1);
    }

}

module.exports = Cart;