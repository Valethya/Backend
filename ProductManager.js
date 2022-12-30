const fs = require("fs");

class ProductManager {
  // Clase para administrar productos

  ///CONSTRUCTOR
  constructor() {
    this.path = "./product.json";
  }

  ///METHODS

  getProducts = async () => {
    if (fs.existsSync(this.path)) {
      const data = await fs.promises.readFile(this.path, "utf-8");

      const productos = JSON.parse(data);
      console.log(productos);
      return productos;
    } else {
      return [];
    }
  };

  addProduct = async (title, description, price, image, stock) => {
    const products = await this.getProducts();
    const product = {
      title: title,
      description: description,
      price: price,
      image: image,
      stock: stock,
    };
    let lastId = products.length != 0 ? products[products.length - 1].id : 1;
    product.id = ++lastId;

    products.push(product);
    await fs.promises.writeFile(this.path, JSON.stringify(products));
    return product;
  };

  getProductsById = async (id) => {
    let products = await this.getProducts();
    let product = products.find((item) => item.id == id);
    product
      ? console.log(`el producto es ${product.description}`)
      : console.log("no tenemos ningun producto con ese id");
  };

  updateProduct = async (id, propiedad, value) => {
    let products = await this.getProducts();
    let product = products.find((item) => item.id === id);
    product[propiedad] = value;

    let index = products.indexOf(product);
    products[index] = product;
    await fs.promises.writeFile(this.path, JSON.stringify(products));
  };

  deleteProduct = async (id) => {
    const products = await this.getProducts();
    console.log(products, "mira estos productos");
    let newProducts = products.filter((item) => item.id != id);
    console.log(newProducts, "esto esta filtrado");
    await fs.promises.writeFile(this.path, JSON.stringify(newProducts));
  };
}

const productos = new ProductManager();

const env = async () => {
  await productos.addProduct(
    "polera",
    "polera de algodon blanca",
    15.99,
    "dsdsd",
    30
  );
  await productos.addProduct(
    "polera",
    "polera de algodon negra",
    15.99,
    "dsdsd",
    30
  );
  await productos.addProduct(
    "polera",
    "polera de algodon roja",
    15.99,
    "dsdsd",
    30
  );
  await productos.deleteProduct(3);
  await productos.updateProduct(1, "price", 8000);
};
env();

productos.getProducts();

productos.getProductsById(3);
