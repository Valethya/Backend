class Product {
  ///CONSTRUCTOR
  constructor(title, description, price, thumbnail, stock) {
    (this.title = title),
      (this.description = description),
      (this.price = price),
      (this.thumbnail = thumbnail),
      (this.stock = stock);
  }

  ///METHODS
  static getProducts() {
    console.log(products);
  }
  static addProduct(constructor) {
    let lastcode =
      products.length != 0 ? products[products.length - 1].code : 0;
    constructor.code = ++lastcode;
    products.push(constructor);
  }

  static getProductsById(id) {
    let product = products.find((item) => item.code == id);
    product
      ? console.log(`el producto es ${product.description}`)
      : console.log("no tenemos ningun producto con ese id");
  }
}

const products = [];

Product.addProduct(
  new Product("polera", "polera de algodon blanca", 15.99, "dsdsd", 30)
);

Product.addProduct(
  new Product("polera", "polera de algodon negra", 15.99, "dsdgfdf", 30)
);
Product.addProduct(
  new Product("polera", "polera de algodon roja", 15.99, "dsdgjhk", 30)
);

Product.getProducts();

Product.getProductsById(2);
