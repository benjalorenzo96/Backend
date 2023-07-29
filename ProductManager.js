class ProductManager {
    constructor() {
      this.products = [];
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('Todos los campos son obligatorios.');
        return;
      }
  
      const isCodeRepeated = this.products.some((product) => product.code === code);
      if (isCodeRepeated) {
        console.log(`El código "${code}" ya está en uso.`);
        return;
      }
  
      const product = {
        id: this.products.length + 1,
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
      };
  
      this.products.push(product);
      console.log('Producto agregado con éxito.');
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id);
      if (!product) {
        console.log('Producto no encontrado.');
      }
      return product;
    }
  }
  
  const productManager = new ProductManager();
  productManager.addProduct('Producto 1', 'Descripción del producto 1', 100, 'thumbnail1.jpg', 'PROD001', 50);
  productManager.addProduct('Producto 2', 'Descripción del producto 2', 200, 'thumbnail2.jpg', 'PROD002', 30);
  
  const products = productManager.getProducts();
  console.log(products);
  
  const productById = productManager.getProductById(1);
  console.log(productById);
  
  const productByIdNotFound = productManager.getProductById(3);
  